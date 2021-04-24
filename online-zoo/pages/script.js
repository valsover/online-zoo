
const mainButton = document.querySelector('.main-button');
const animalsFeedButton = document.querySelector('.animals-feed-button');
const burgerMenu = document.querySelector('.burger-menu');
const closeBurgerMenu = document.querySelector('.close-burger-menu');
const topNav = document.querySelector('.top-nav-list');
const navItem = document.querySelectorAll('.nav-item-ref');
const popUpClose = document.querySelector('.pop-up-close');
const popUp = document.querySelector('.pop-up');
const blanket = document.querySelector('.blanket');

mainButton.addEventListener('mouseover', changeColor);
mainButton.addEventListener('click', changeColor);
animalsFeedButton.addEventListener('mouseover', changeColor);
animalsFeedButton.addEventListener('click', changeColor);

function changeColor() {
    this.classList.toggle('active');
}

mainButton.addEventListener('mouseout', colorReset);
mainButton.addEventListener('mouseup', colorReset);
animalsFeedButton.addEventListener('mouseout', colorReset);
animalsFeedButton.addEventListener('mouseup', colorReset);

function colorReset() {
    this.classList.remove('active');
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

popUpClose.addEventListener('click', closePopUp);
function closePopUp() {
  popUp.classList.toggle('hidden');
  blanket.classList.toggle('hidden');
}