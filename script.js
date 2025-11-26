const wireless = document.querySelector('.wireless');
const bulb = document.querySelector('.bulb');
const bulbButton = document.querySelector('.bulb_button');


wireless.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        bulb.classList.add('on');
        bulbButton.classList.add('on');
    } else {
        bulb.classList.remove('on');
        bulbButton.classList.remove('on');
    }
});