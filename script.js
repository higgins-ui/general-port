document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('.faq-item');

  details.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;

      details.forEach((other) => {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });
});
