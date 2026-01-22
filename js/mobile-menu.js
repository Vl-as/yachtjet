const burgerBtn = document.querySelector('.header-burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  burgerBtn.classList.toggle('is-open', isOpen);
  body.classList.toggle('no-scroll', isOpen);
});
