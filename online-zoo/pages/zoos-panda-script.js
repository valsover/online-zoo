const mapButton = document.querySelector('.caption-button');
const arrow = document.querySelector('.caption-arrow');
const burgerMenu = document.querySelector('.burger-menu');
const closeBurgerMenu = document.querySelector('.close-burger-menu');
const topNav = document.querySelector('.top-nav-list');
const navItem = document.querySelectorAll('.nav-item-ref');

mapButton.addEventListener('mouseover', changeColor);
mapButton.addEventListener('click', changeColor);

function changeColor() {
    arrow.src = '../assets/icons/white-arrow.svg';
}

mapButton.addEventListener('mouseout', colorReset);
mapButton.addEventListener('mouseup', colorReset);

function colorReset() {
    arrow.src = '../assets/icons/orange-arrow.svg';
}

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