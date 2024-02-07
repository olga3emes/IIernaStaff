let color = $(".selected").css("background-color");
let $canvas = $("canvas");
let context = $canvas[0].getContext("2d");
let lastEvent;
let mouseDown = false;

// Obtener la posición del lienzo
let canvasOffset = $canvas.offset();
let offsetX = canvasOffset.left;
let offsetY = canvasOffset.top;

// Cuando el mouse está presionado en el lienzo
$canvas
  .mousedown(function (e) {
    lastEvent = { x: e.pageX - offsetX, y: e.pageY - offsetY };
    mouseDown = true;
  })
  .mousemove(function (e) {
    if (mouseDown) {
      let currentEvent = { x: e.pageX - offsetX, y: e.pageY - offsetY };
      context.beginPath();
      context.moveTo(lastEvent.x, lastEvent.y);
      context.lineTo(currentEvent.x, currentEvent.y);
      context.strokeStyle = color;
      context.stroke();
      lastEvent = currentEvent;
    }
  })
  .mouseup(function () {
    mouseDown = false;
  })
  .mouseleave(function () {
    $canvas.mouseup();
  });

// Cuando se hace clic en elementos de la lista de controles
$(".controls").on("click", "li", function () {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
});

// Cuando se presiona "Nuevo Color"
$("#revealColorSelect").click(function () {
  $("#colorSelect").toggle();
});

// Actualizar el nuevo color
function changeColor() {
  let r = $("#red").val();
  let g = $("#green").val();
  let b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}

// Cuando los deslizadores de color cambian
$("input[type=range]").change(changeColor);

// Cuando se presiona "Agregar Nuevo Color"
$("#addNewColor").click(function () {
  let $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});
