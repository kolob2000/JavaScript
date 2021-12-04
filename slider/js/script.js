'use strict'

const init = () => {

    slider();
}
const slider = () => {

    let imgList = document.querySelectorAll('.slider-item');
    let sliderRight = document.querySelector('.right');
    let sliderLeft = document.querySelector('.left');
    let currentSlide = 0
    let left = () => {
        if (currentSlide === 0) {
            imgList[currentSlide].classList.toggle('slider_hidden');
            currentSlide = imgList.length - 1;
            imgList[currentSlide].classList.toggle('slider_hidden');
        } else {
            imgList[currentSlide].classList.toggle('slider_hidden');
            --currentSlide;
            imgList[currentSlide].classList.toggle('slider_hidden');
        }
    };
    let right = () => {
        if (currentSlide === imgList.length - 1) {
            imgList[currentSlide].classList.toggle('slider_hidden');
            currentSlide = 0;
            imgList[currentSlide].classList.toggle('slider_hidden');
        } else {
            imgList[currentSlide].classList.toggle('slider_hidden');
            ++currentSlide;
            imgList[currentSlide].classList.toggle('slider_hidden');
        }
    };
    sliderRight.addEventListener('click', right);
    sliderLeft.addEventListener('click', left);
    document.addEventListener('keydown', (event) => {
        console.log(event);
        if(event.ctrlKey === true && event.key === 'ArrowRight'){
            right();
        } else if (event.ctrlKey === true && event.key === 'ArrowLeft'){
            left();
        }
    });
}

window.addEventListener('load', init);
