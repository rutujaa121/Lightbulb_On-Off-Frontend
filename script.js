const wireless = document.querySelector('.wireless');
const bulb = document.querySelector('.bulb');
const bulbButton = document.querySelector('.bulb_button');
let isOn = false;

wireless.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        