  $(document).ready(function () {
    // Aplica el efecto de agrandamiento al hacer hover en las tarjetas con la clase .card
    $('.card').hover(
      function () {
        $(this).css('transform', 'scale(1.1)');
      },
      function () {
        $(this).css('transform', 'scale(1)');
      }
    );
  });