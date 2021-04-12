const mapButton = document.querySelector('.caption-button');
const arrow = document.querySelector('.caption-arrow');

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