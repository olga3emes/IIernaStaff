let cards = document.querySelectorAll('.card');

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Detener la observación una vez activada la animación
    }
  });
}, {
  threshold: 0.5 // Porcentaje de visibilidad necesario para activar la animación (50%)
});

cards.forEach(card => {
  observer.observe(card);
});
