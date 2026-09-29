// Decorative-only interactions keep this prototype static and maintenance-free.
document.querySelector('.icon-button').addEventListener('click', () => {
  document.body.classList.toggle('menu-pulse');
});
