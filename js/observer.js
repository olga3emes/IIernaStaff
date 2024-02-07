let cards = document.querySelectorAll('.fade-in-g');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    let rect = card.getBoundingClientRect();
    if (rect.top >=  0 && rect.bottom <= window.innerHeight) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});
