"use strict"
let boton = document.getElementById("botoncollapse");

// Función para manejar el cambio de tamaño de la pantalla
function handleScreenSizeChange(mediaQuery) {
    if (mediaQuery.matches) {
        // Si es una pantalla pequeña (hasta 992px), muestra el botón
        boton.removeAttribute("hidden");
    } else {
        // Si es una pantalla más grande (mayor a 992px), oculta el botón
        boton.setAttribute("hidden", true);
    }
}

// Registra el evento de cambio de tamaño de pantalla
let mediaQuery = window.matchMedia("(max-width: 992px)"); // Ajusta el valor según tus necesidades
handleScreenSizeChange(mediaQuery);
mediaQuery.addListener(handleScreenSizeChange);

// Agrega un listener al botón para manejar el click
boton.addEventListener('click', function () {
    // Aquí puedes agregar lógica adicional al hacer clic en el botón
});