const pandaMapFlag = document.querySelector('.panda-location img');
const lemurMapFlag = document.querySelector('.lemur-location img');
const gorillaMapFlag = document.querySelector('.gorilla-location img');
const eaglesMapFlag = document.querySelector('.eagles-location img');

const animalFlags = [pandaMapFlag, lemurMapFlag, gorillaMapFlag, eaglesMapFlag];
const animalsNames = ['panda', 'lemur', 'gorilla', 'eagles'];

for (let i = 0; i < animalFlags.length; i++){
  animalFlags[i].addEventListener('mouseover', changeFlag);
  animalFlags[i].addEventListener('click', changeFlag);
  animalFlags[i].addEventListener('mouseout', flagReset);
  animalFlags[i].addEventListener('mouseup', flagReset);
}

function changeFlag() {
  for (let i = 0; i < animalsNames.length; i++) {
    if (this.alt == animalsNames[i]) {
      this.src = `../assets/icons/location-${animalsNames[i]}-active.svg`;
    }
  }
}
function flagReset() {
  for (let i = 0; i < animalsNames.length; i++) {
    if (this.alt == animalsNames[i]) {
      this.src = `../assets/icons/location-${animalsNames[i]}.svg`;
    }
  }
}