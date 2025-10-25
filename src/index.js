import './style.css';

const burgerMenu = () => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  const menuItem = document.querySelectorAll('.menu__item');

  const toggleMenu = () => {
    burger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__menu_active');
    document.body.style.overflow = menu.classList.contains('header__menu_active') ? 'hidden' : '';
  };

  const closeMenu = () => {
    burger.classList.remove('header__burger_active');
    menu.classList.remove('header__menu_active');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', toggleMenu);
  menuItem.forEach((link) => link.addEventListener('click', closeMenu));
};

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
});
