const burgerMenu = document.querySelector('.burger-menu');
const closeBurgerMenu = document.querySelector('.close-burger-menu');
const topNav = document.querySelector('.top-nav-list');
const navItem = document.querySelectorAll('.nav-item-ref');

burgerMenu.addEventListener('click', openSideNav);
function openSideNav() {
  topNav.classList.toggle('side-menu');
  for (let i = 0; i < navItem.length; i++){
    navItem[i].classList.toggle('side-menu');
  }
  closeBurgerMenu.classList.toggle('side-menu');
}

closeBurgerMenu.addEventListener('click', closeSideNav);
function closeSideNav() {
  topNav.classList.remove('side-menu');
  for (let i = 0; i < navItem.length; i++){
    navItem[i].classList.remove('side-menu');
  }
  closeBurgerMenu.classList.remove('side-menu');
}