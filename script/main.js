let imageSlider = document.querySelector(".main-6-slider-images");
let image = document.getElementsByClassName('main-6-slider-img')[0];

let VW_IN_PX = window.innerWidth / 100.0;

function nextPhotoInSlider(input) {
    let progress = input.value
    let allWidth = image.getBoundingClientRect().width * 8 + 6 * 2.5 * VW_IN_PX - imageSlider.clientWidth
    imageSlider.style.transform = `translateX(-${allWidth * progress / 100}px)`
}

window.onresize = () => {
    VW_IN_PX = window.innerWidth / 100.0;
    nextPhotoInSlider(document.querySelector('.main-6-block-slider-range'));
}

let isImageSliderDrag = false;
let posInit = 0;
let posX1 = 0;
let posX2 = 0;
let style;
let transform;
let trfRegExp = /[-0-9.]+(?=px)/;
const swipeStart = function (event) {
    posInit = posX1 = event.clientX;
    imageSlider.addEventListener('mousemove', swipeAction);
    imageSlider.addEventListener('touchmove', swipeAction);
    imageSlider.addEventListener('touchend', swipeEnd);
    imageSlider.addEventListener('mouseup', swipeEnd);
}

const swipeAction = function (event) {
    style = imageSlider.style.transform;
    console.log(style)
    transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - event.clientX;
    posX1 = event.clientX;

    imageSlider.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
}

const swipeEnd = function () {
    imageSlider.removeEventListener('touchmove', swipeAction);
    imageSlider.removeEventListener('mousemove', swipeAction);
    imageSlider.removeEventListener('touchend', swipeEnd);
    imageSlider.removeEventListener('mouseup', swipeEnd);
}

imageSlider.addEventListener('mousedown', swipeStart);