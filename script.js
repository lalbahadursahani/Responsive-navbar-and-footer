const burger = document.querySelector('.burgers');
const navLinks = document.querySelector('.nav-link');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});
