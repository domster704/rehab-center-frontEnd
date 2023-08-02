let imageSlider = document.querySelector(".main-6-slider-images");
let image = document.getElementsByClassName('main-6-slider-img')[0];

let VW_IN_PX = window.innerWidth / 100.0;

window.onresize = () => {
    VW_IN_PX = window.innerWidth / 100.0;
}

let isImageSliderDrag = false;
let posInit = 0;
let posX1 = 0;
let posX2 = 0;
let style;
const swipeStart = function (event) {
    posInit = posX1 = event.clientX;
    imageSlider.addEventListener('mousemove', swipeAction);
    imageSlider.addEventListener('touchmove', swipeAction);
    imageSlider.addEventListener('touchend', swipeEnd);
    imageSlider.addEventListener('mouseup', swipeEnd);
}

const swipeAction = function (event) {
    style = imageSlider.style.transform;

    posX2 = posX1 - event.clientX;
    posX1 = event.clientX;

    imageSlider.scrollTo(imageSlider.scrollLeft + posX2, 0);
}

let scrollSpeed = 0.3;
const scrollHorizontally = function (event) {
    event.preventDefault();
    imageSlider.scrollLeft -= event.wheelDelta * scrollSpeed;
}

const swipeEnd = function () {
    imageSlider.removeEventListener('touchmove', swipeAction);
    imageSlider.removeEventListener('mousemove', swipeAction);
    imageSlider.removeEventListener('touchend', swipeEnd);
    imageSlider.removeEventListener('mouseup', swipeEnd);
}

imageSlider.addEventListener('mousedown', swipeStart);
imageSlider.addEventListener('mousewheel', scrollHorizontally)