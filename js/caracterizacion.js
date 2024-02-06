"use strict"

function desplegar(element){
    element.removeAttribute("hidden", "")
    element.nextElementSibling.toggleAttribute("hidden")
}