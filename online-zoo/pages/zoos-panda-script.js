const mapButton = document.querySelector('.caption-button');

mapButton.addEventListener('mouseover', changeColor);
mapButton.addEventListener('click', changeColor);

function changeColor() {
    this.classList.toggle('active');
}

mapButton.addEventListener('mouseout', colorReset);
mapButton.addEventListener('mouseup', colorReset);

function colorReset() {
    this.classList.remove('active');
}