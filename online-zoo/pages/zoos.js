// Контролы
const sideBarBtnOpen = document.querySelector('.arrows');
const sideBarBtnClose = document.querySelector('.side-panel__arrows');
const carouselBtn = document.querySelector('.down');

// Управление сайдбаром
let numOfClicksSide = 0;
sideBarBtnOpen.addEventListener('click', openCloseSideBar);
function openCloseSideBar() {
  let animals = ['eagles', 'panda', 'gorilla', 'lemur', 'coala', 'lion', 'alligator', 'tiger'];

  ++numOfClicksSide;

  if (numOfClicksSide % 2 !== 0) {
    document.querySelector('.sidebar').classList.toggle('opened');
    document.querySelector('.arrows').classList.toggle('opened');
    document.querySelector('.down').classList.toggle('opened');
    document.querySelector('.cams-inner').classList.toggle('side-bar');
    for (let i = 0; i < animals.length; i++){
      document.querySelector(`.${animals[i]}-fig`).classList.toggle('opened');
    }
    for (let i = 0; i < document.querySelectorAll('.circle').length; i++){
      document.querySelectorAll('.circle')[i].classList.toggle('opened');
      document.querySelectorAll('.sidebar__text')[i].classList.remove('hidden');
    }
  }
  else {
    document.querySelector('.sidebar').classList.remove('opened');
    document.querySelector('.arrows').classList.remove('opened');
    document.querySelector('.down').classList.remove('opened');
    document.querySelector('.cams-inner').classList.remove('side-bar');
    for (let i = 0; i < animals.length; i++){
      document.querySelector(`.${animals[i]}-fig`).classList.remove('opened');
    }
    for (let i = 0; i < document.querySelectorAll('.circle').length; i++){
      document.querySelectorAll('.circle')[i].classList.remove('opened');
      document.querySelectorAll('.sidebar__text')[i].classList.toggle('hidden');
    }
  }
}

// Карусель
let numOfClicksDown = 0;
carouselBtn.addEventListener('click', carouselSlides);
function carouselSlides() {
  ++numOfClicksDown;
  if (numOfClicksDown % 2 !== 0) {
    for (let i = 2; i < 6; i++) {
      document.querySelector(`.row${i}_next`).classList.remove('hidden');
      document.querySelector(`.row${i}`).classList.toggle('hidden');
    }
  }
  else {
    for (let i = 2; i < 6; i++) {
      document.querySelector(`.row${i}_next`).classList.toggle('hidden');
      document.querySelector(`.row${i}`).classList.remove('hidden');
    }
  }
}