
const mainButton = document.querySelector('.main-button');
const animalsFeedButton = document.querySelector('.animals-feed-button');

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

