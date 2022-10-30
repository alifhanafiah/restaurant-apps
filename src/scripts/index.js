import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

// responsive burger menu
const burger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
