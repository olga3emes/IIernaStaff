class Sketch {
  constructor(container, drawingBoard, historyCount) {
    this._changeFn = null
    this._changeScope = null
    this._stage = new Stage(container, drawingBoard, historyCount, this._emitChange.bind(this))
  }
  onChange(scope, fn) {
    this._changeFn = fn
    this._changeScope = scope
  }
  canUndo() {
    return this._stage.canUndo()
  }
  canRedo() {
    return this._stage.canRedo()
  }
  undo() {
    this._stage.undo(() => {
      this._emitChange()
    })
  }
  redo() {
    this._stage.redo(() => {
      this._emitChange()
    })
  }
  setStrokeWidth(width) {
    this._stage.setStrokeWidth(width)
  }
  setStrokeColour(colour) {
    this._stage.setStrokeColour(colour)
  }
  selectPencil() {
    this._stage.selectPencil()
  }
  selectEraser() {
    this._stage.selectEraser()
  }
  export() {
    return this._stage.export()
  }
  update(container, drawingBoard) {
    this._stage.update(container, drawingBoard)
  }
  _emitChange() {
    if(this._changeFn) {
      this._changeFn(this._changeScope)
    }
  }
}

class Stage {
  constructor(container, drawingBoard, historyCount = 100, change) {

    container = Object.assign({
      element: null,
      dimensions: {
        width: 400,
        height: 400
      }
    }, container)

    drawingBoard = Object.assign({
      pathType: 'bezier',
      dimensions: {
        width: 400,
        height: 400
      },
      position: {
        x: 0,
        y: 0
      },
      scale: 1
    }, drawingBoard)

    this._stage = new Konva.Stage({
      container: container.element,
      width: container.dimensions.width,
      height: container.dimensions.height
    })

    this._init()
    this._drawingBoard = new DrawingBoard(this._stage, this._canvas, drawingBoard, historyCount, change)
  }
  canUndo() {
    return this._drawingBoard.canUndo()
  }
  canRedo() {
    return this._drawingBoard.canRedo()
  }
  undo(callback) {
    this._drawingBoard.undo(callback)
  }
  redo(callback) {
    this._drawingBoard.redo(callback)
  }
  setStrokeColour(colour) {
    this._drawingBoard.setStrokeColour(colour)
  }
  setStrokeWidth(width) {
    this._drawingBoard.setStrokeWidth(width)
  }
  selectPencil() {
    this._drawingBoard.selectPencil()
  }
  selectEraser() {
    this._drawingBoard.selectEraser()
  }
  export() {
    return this._drawingBoard.export()
  }
  update(container, drawingBoard) {

    if(container.dimensions && container.dimensions.width) {
      this._stage.setWidth(container.dimensions.width)
    }
    if(container.dimensions && container.dimensions.height) {
      this._stage.setHeight(container.dimensions.height)
    }

    this._drawingBoard.update(drawingBoard)

  }
  _init() {
    this._canvas = new Konva.Layer()
    this._stage.add(this._canvas)
    this._draw()
  }
  _draw() {
    this._stage.draw()
  }
}

class DrawingBoard {
  constructor(stage, parentCanvas, settings, historyCount, change) {
    this._stage = stage
    this._parentCanvas = parentCanvas

    this._pathType = settings.pathType

    this._dimensions = settings.dimensions
    this._position = settings.position
    this._scale = settings.scale

    this._offsets = this._calculateOffsets()

    this._canvas = null
    this._board = null
    this._ctx = null

    this._strokeStyle = '#1b9cd8'
    this._lineWidth   = 4

    this._lineJoin    = 'round'
    this._lineCap     = 'round'
    this._shadowColor = 'rgb(27, 156, 216)'
    this._shadowBlur  = 2

    this._build(() => {

      this._exportManager = new ExportManager(this._canvas)

      this._historyManager = new HistoryManager({
        maxLength: historyCount
      },this._exportManager)

      this.save()
    })

    this._lastPointerPosition = null
    this._isPainting = false
    this._currentPoints = [ ]

    this._drawingMode = 'brush'

    this._listen()

    this._boardNeedsRendering = false

    this._change = change
    this._animate()

  }
  setStrokeColour(strokeColour) {
    this._strokeStyle = strokeColour
    this._shadowColor = this._strokeStyle

    this._ctx.strokeStyle = this._strokeStyle
    this._ctx.shadowColor = this._shadowColor
  }
  setStrokeWidth(width) {
    this._lineWidth = width
    this._ctx.lineWidth = this._lineWidth
  }
  selectPencil() {
    this._drawingMode = 'brush'
  }
  selectEraser() {
    this._drawingMode = 'eraser'
  }
  undo(callback) {
    this._historyManager.getPrevious((image) => {
      this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
      this._ctx.globalCompositeOperation = 'source-over'

      this._ctx.drawImage(image, 0, 0)
      this._parentCanvas.draw()

      callback()
    })
  }
  canUndo() {
    return this._historyManager.canUndo()
  }
  canRedo() {
    return this._historyManager.canRedo()
  }
  redo(callback) {
    this._historyManager.getNext((image) => {
      this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
      this._ctx.globalCompositeOperation = 'source-over'

      this._ctx.drawImage(image, 0, 0)
      this._parentCanvas.draw()
      
      callback()
    })
  }
  save() {
    this._historyManager.add()
  }
  export() {
    return this._exportManager.cropCanvasAndConvertToBase64(this._canvas)
  }
  update(settings) {
    if(settings.dimensions) {
      this._dimensions = settings.dimensions
    }

    if(settings.position) {
      this._position = settings.position
    }

    if(settings.scale) {
      this._scale = settings.scale
    }

    if(settings.scale || settings.position || settings.dimensions) {
      this._offsets = this._calculateOffsets()
    }

    this._board.width(this._dimensions.width)
    this._board.height(this._dimensions.height)

    this._board.x(this._offsets.x)
    this._board.y(this._offsets.y)

    this._board.scaleX(this._scale)
    this._board.scaleY(this._scale)

  }
  _animate() {
    if(this._boardNeedsRendering) {
      this._ctx.stroke()
      this._stage.draw()
      this._boardNeedsRendering = false
    }

    requestAnimationFrame(this._animate.bind(this))
  }
  _listen() {
    this._stage.on('contentMousedown.proto contentTouchstart.proto', () => {

      this._isPainting = true
      this._lastPointerPosition = this._getPointerPosition()

      if (this._drawingMode === 'brush') {
        this._ctx.globalCompositeOperation = 'source-over'
      }
      if (this._drawingMode === 'eraser') {
        this._ctx.globalCompositeOperation = 'destination-out'
      }

      if(this._pathType === 'bezier') {
        this._currentPoints.push({ x: this._lastPointerPosition.x, y: this._lastPointerPosition.y })
      }

      let p1 = this._currentPoints[ 0 ]
      // let p2 = this._currentPoints[ 1 ]

      this._ctx.beginPath()
      this._ctx.lineTo(p1.x, p1.y)

      this._boardNeedsRendering = true
    })
    this._stage.on('contentMouseup.proto contentTouchend.proto', () => {
      this._isPainting = false

      if(this._pathType === 'bezier') {
        this._currentPoints.length = 0
      }

      this.save()
      this._change()
    })
    this._stage.on('contentMousemove.proto contentTouchmove.proto', () => {

      if (!this._isPainting) { return }

      this._lastPointerPosition = this._getPointerPosition()

      if(this._pathType === 'bezier') {

        this._currentPoints.push({ x: this._lastPointerPosition.x, y: this._lastPointerPosition.y })

        let p1 = this._currentPoints[ 0 ]
        let p2 = this._currentPoints[ 1 ]

        this._ctx.beginPath()
        this._ctx.moveTo(p1.x, p1.y)

        for(let i = 1; i < this._currentPoints.length; i++) {

          let midPoint = this._midPointBetween(p1, p2)

          this._ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y)

          p1 = this._currentPoints[ i ]
          p2 = this._currentPoints[ i + 1 ]
        }

        this._ctx.lineTo(p1.x, p1.y)

        this._boardNeedsRendering = true
      }
    })
  }
  _build(callback) {
    this._canvas = document.createElement('canvas')
    this._canvas.width = this._dimensions.width
    this._canvas.height = this._dimensions.height

    this._ctx = this._canvas.getContext('2d')

    this._ctx.strokeStyle = this._strokeStyle
    this._ctx.lineWidth = this._lineWidth

    this._ctx.lineJoin = this._lineJoin
    this._ctx.lineCap = this._lineCap
    this._ctx.shadowColor = this._shadowColor
    this._ctx.shadowBlur = this._shadowBlur

    this._board = new Konva.Image({
      image: this._canvas,
      ...this._offsets,
      width: this._dimensions.width * this._scale,
      height: this._dimensions.height * this._scale
    })

    this._parentCanvas.add(this._board)
    this._draw()

    callback()
  }
  _midPointBetween(p1, p2) {
    return {
      x: p1.x + (p2.x - p1.x) / 2,
      y: p1.y + (p2.y - p1.y) / 2
    }
  }
  _getPointerPosition() {
    let n = this._stage.getPointerPosition()

    return {
      x: (n.x - this._offsets.x) / this._scale,
      y: (n.y - this._offsets.y) / this._scale
    }
  }
  _calculateOffsets() {
    return {
      x: this._position.x + (this._dimensions.width - (this._dimensions.width * this._scale)) / 2,
      y: this._position.y + (this._dimensions.height - (this._dimensions.height * this._scale)) / 2
    }
  }
  _draw() {
    this._board.draw()
  }
}

class HistoryManager {
  constructor({ maxLength } = { }, exportManager) {
    if(!(exportManager instanceof ExportManager)) {
      throw new Error('Must provide ExportManager instance')
    }

    this._exportManager = exportManager
    this._maxLength = maxLength
    this._history = [ ]
    this._index = -1
  }
  add() {
    this._index = this._index + 1
    this._history = this._history.slice(0, this._index)

    this._history.push(this._exportManager.fromCanvas(null, {
      to: 'base64'
    }))
  }
  canUndo() {
    return (this._index > 0)
  }
  canRedo() {
    return (this._history.length > this._index + 1)
  }
  getPrevious(callback) {
    this._exportManager.toCanvas(this._history[ this._getIndex('prev') ], {
      from: 'base64'
    }, (image) => {
      callback(image)
    })
  }
  getNext(callback) {
    this._exportManager.toCanvas(this._history[ this._getIndex('next') ], {
      from: 'base64'
    }, (image) => {
      callback(image)
    })
  }
  _getIndex(type) {
    if(type === 'prev') {
      if (this.canUndo()) {
        this._index = this._index - 1 
      }

      return this._index
    } else {
      if (this.canRedo()) {
        this._index = this._index + 1
      }

      return this._index
    }
  }
}

class ExportManager {
  constructor(canvas) {
    if(typeof canvas.getContext !== 'function') {
      throw new Error('Must provide canvas to Export Manager')
    }

    this._canvas = canvas
  }
  fromCanvas(canvas = null, { to = 'base64' } = { }) {

    if(canvas === null) {
      canvas = this._canvas
    } else if(typeof canvas.getContext !== 'function') {
      throw new Error('Invalid canvas element')
    }

    switch(to) {
      case 'base64':
        return canvas.toDataURL()
      default:
        throw new Error('Unknown export type')
    }
  }
  toCanvas(payload, { from = 'base64' } = { }, callback) {

    switch(from) {
      case 'base64':

        let img = new Image()
        img.src = payload

        img.onload = () => {
          callback(img)
        }

        break;
      default:
        throw new Error('Unknown export type')
    }
  }
  cropCanvasAndConvertToBase64(canvas) {

    if(this._isBlank(canvas)) {
      console.warn('Empty Canvas')
      return false
    }

    canvas = this._cloneCanvas(canvas)

    let ctx = canvas.getContext('2d')

    let w = canvas.width
    let h = canvas.height
    let pix = { x:[ ], y:[ ] }
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    let x
    let y
    let index

    for(y = 0; y < h; y++) {
      for(x = 0; x < w; x++) {
        index = (y * w + x) * 4
        if(imageData.data[ index + 3 ] > 0) {
          pix.x.push(x)
          pix.y.push(y)
        }
      }
    }

    pix.x.sort((a, b) => {
      return a - b
    })

    pix.y.sort((a, b) => {
      return a - b
    })

    let n = pix.x.length - 1

    w = pix.x[ n ] - pix.x[ 0 ]
    h = pix.y[ n ] - pix.y[ 0 ]

    let cut = ctx.getImageData(pix.x[ 0 ], pix.y[ 0 ], w, h)

    canvas.width = w
    canvas.height = h

    ctx.putImageData(cut, 0, 0)

    return {
      file: canvas.toDataURL(),
      x: pix.x[ 0 ],
      y: pix.y[ 0 ]
    }
  }
  _cloneCanvas(old) {

    let n = document.createElement('canvas')
    let ctx = n.getContext('2d')

    n.width = old.width
    n.height = old.height

    ctx.drawImage(old, 0, 0)

    return n
  }
  _isBlank(a) {
    let b = document.createElement('canvas')
    b.width = a.width
    b.height = a.height

    return a.toDataURL() === b.toDataURL()
  }
}

let sketch = new Sketch({
  element: 'element',
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight
  }
}, {
  pathType: 'bezier',
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  position: {
    x: 0,
    y: 0
  },
  scale: 1,
}, 50)

window.onresize = function() {
  sketch = new Sketch({
    element: 'element',
    dimensions: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }, {
    pathType: 'bezier',
    dimensions: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    position: {
      x: 0,
      y: 0
    },
    scale: 1,
  }, 50)
}

sketch.onChange(sketch, (scope) => {
  const canUndo = sketch.canUndo()
  const canRedo = sketch.canRedo()
  document.querySelector('#canvas #undo').setAttribute('class', (canUndo) ? '' : 'disabled')
  document.querySelector('#canvas #redo').setAttribute('class', (canRedo) ? '' : 'disabled')
  document.querySelector('#canvas #download').setAttribute('class', (canUndo || canRedo) ? '' : 'disabled')
})

document.getElementById('brush').onclick = function() {
  document.querySelector('#canvas #eraser').setAttribute('class', '')
  document.querySelector('#canvas #brush').setAttribute('class', 'active')  
  sketch.selectPencil()
}
document.getElementById('eraser').onclick = function() {
  document.querySelector('#canvas #eraser').setAttribute('class', 'active')
  document.querySelector('#canvas #brush').setAttribute('class', '')
  sketch.selectEraser()
}
document.getElementById('undo').onclick = function() {
  sketch.undo()
}
document.getElementById('redo').onclick = function() {
  sketch.redo()
}
document.getElementById('download').onclick = function() {
  const file = sketch.export()

  if (file) {
    console.log(file)
  }
}