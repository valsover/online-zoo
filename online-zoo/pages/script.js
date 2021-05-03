// Контролы
const donateNowBtn = document.querySelector('.donate-now-btn');
const donateForVoulanteersBtn = document.querySelector('.volunteers-btn');
const popUpClose = document.querySelector('.pop-up-close');
const popUp = document.querySelector('.pop-up');
const popUpAmount = document.querySelectorAll('.pop-up-btn');
const blanket = document.querySelector('.blanket');
const checkMarkBtn = document.querySelector('.check-mark');
const favouriteBtnPop = document.getElementById('favourite-btn-pop');
const favouriteList = document.querySelector('.favourite-pop-list');
const favouriteAnimalClicked = document.querySelectorAll('.favourite-pop-list-item');
const next1 = document.querySelector('.step1-next-btn');
const next2 = document.querySelector('.step2-next-btn');
const back2 = document.querySelector('.step2-back-btn');
const back3 = document.querySelector('.step3-back-btn');
const complete = document.querySelector('.complete-btn');
const donationPopUpSlide1 = document.querySelector('.step1');
const donationPopUpSlide2 = document.querySelector('.step2');
const donationPopUpSlide3 = document.querySelector('.step3');
const stepClose = document.querySelectorAll('.step-close');

// Открытие и закрытие окна "Pop-up"
donateNowBtn.addEventListener('click', openPopUp);
donateForVoulanteersBtn.addEventListener('click', openPopUp);
function openPopUp() {
  popUp.classList.remove('hidden');
  blanket.classList.remove('hidden');
}

blanket.addEventListener('click', closePopUp);
popUpClose.addEventListener('click', closePopUp);
function closePopUp() {
  popUp.classList.toggle('hidden');
  blanket.classList.toggle('hidden');
}

// Галочка
checkMarkBtn.addEventListener('click', checkMarkOn);
function checkMarkOn() {
  checkMarkBtn.classList.toggle('on');
}

let numOfClicks = 0;
favouriteBtnPop.addEventListener('click', showHideFavouriteList);
function showHideFavouriteList() {
  ++numOfClicks;
  if (numOfClicks % 2 !== 0) {
    favouriteList.classList.toggle('shown');
  } else if (favouriteBtnPop.innerText !== "Choose your favourite") {
    favouriteList.classList.toggle('shown');
  } else {
      favouriteList.classList.remove('shown');
  }
}

for (let i = 0; i < favouriteAnimalClicked.length; i++) {
  favouriteAnimalClicked[i].addEventListener('click', favouriteAnimalChoosed);
  function favouriteAnimalChoosed() {
    let imgBtn = document.querySelector('.favourite-pop-list-item .img-block');
    favouriteBtnPop.innerText = favouriteAnimalClicked[i].innerText;
    favouriteList.classList.remove('shown');
  }
}

for (let i = 0; i < popUpAmount.length; i++) {
  popUpAmount[i].addEventListener('click', showSlide1);
  function showSlide1() {
    donationPopUpSlide1.classList.toggle('active');
    popUp.classList.toggle('hidden');
  }
}

next1.addEventListener('click', showSlide2);
next2.addEventListener('click', showSlide3);
complete.addEventListener('click', completeDonation);
function showSlide2() {
  donationPopUpSlide2.classList.toggle('active');
  donationPopUpSlide1.classList.remove('active');
}
function showSlide3() {
  donationPopUpSlide3.classList.toggle('active');
  donationPopUpSlide2.classList.remove('active');
}
function completeDonation() {
  donationPopUpSlide3.classList.remove('active');
  blanket.classList.toggle('hidden');
}

back2.addEventListener('click', backToSlide1);
back3.addEventListener('click', backToSlide2);
function backToSlide1() {
  donationPopUpSlide2.classList.remove('active');
  donationPopUpSlide1.classList.toggle('active');
}
function backToSlide2() {
  donationPopUpSlide3.classList.remove('active');
  donationPopUpSlide2.classList.toggle('active');
}

for (let i = 0; i < stepClose.length; i++){
  stepClose[i].addEventListener('click', closeStep);
  function closeStep() {
    stepClose[i].parentElement.classList.remove('active');
    blanket.classList.toggle('hidden');
  }
}