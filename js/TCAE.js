"use strict"

// Ocultar todas las tarjetas al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  var cards = document.querySelectorAll('.card-body');
  cards.forEach(function(card) {
      card.style.display = 'none';
  });
});

function toggleCardBody(cardId) {
  // Ocultar todas las tarjetas
  var cards = document.querySelectorAll('.card-body');
  cards.forEach(function(card) {
      card.style.display = 'none';
  });
  
  // Mostrar la tarjeta seleccionada
  var selectedCard = document.querySelector('#' + cardId);
  selectedCard.style.display = 'block';
}