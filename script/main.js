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