document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.interactiveCard');
  
  cards.forEach(card => {
    card.style.transform = 'scale(0)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
      card.style.transition = 'transform 0.5s ease';
    }, 300);

    const toggleDetailsBtn = card.querySelector('.toggleDetails');
    const infoElements = card.querySelectorAll('.card-info p, .card-info h5');
    let detailsVisible = false;

    toggleDetailsBtn.addEventListener('click', function() {
      detailsVisible = !detailsVisible;
      infoElements.forEach((element, index) => {
        if (detailsVisible) {
          setTimeout(() => {
            element.classList.add('active');
          }, 100 * index); // Retraso incremental para cada elemento
        } else {
          element.classList.remove('active');
        }
      });
      this.textContent = detailsVisible ? 'Ocultar Detalles' : 'Mostrar Detalles';
    });
  });
});
