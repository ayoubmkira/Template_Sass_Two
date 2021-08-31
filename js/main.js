
const blogSliderElm = document.querySelector('.blog .blog-slider');
const btnNextElm = document.querySelector('.blog .next');
const btnPrevElm = document.querySelector('.blog .prev');

const navbarElm = document.querySelector('.header .navbar');
const btnNavbarToggleElm = document.querySelector('.header .btn-toggle');

const lengthSliderBoxs = blogSliderElm.children.length;
let indexCurrentSliderBox = 1;

// Functions:
function moveSlider () {

    let marginBlogSlider = -(1 / lengthSliderBoxs) * (indexCurrentSliderBox - 1);
    let widthBeforeCurrentSlideBox = marginBlogSlider * blogSliderElm.clientWidth;

    blogSliderElm.style.marginLeft = widthBeforeCurrentSlideBox + 'px';

}
function nextSlider () {

    if(indexCurrentSliderBox === lengthSliderBoxs)
        indexCurrentSliderBox = 1;
    else
        indexCurrentSliderBox++;
    
    moveSlider();

}
function prevSlider () {

    if(indexCurrentSliderBox === 1)
        indexCurrentSliderBox = lengthSliderBoxs;
    else
        indexCurrentSliderBox--;
    
    moveSlider();

}
function resizeWindow () {

    moveSlider();

}
function toggleNavbarMenu () {

    if(btnNavbarToggleElm.classList.contains('open')) {
        btnNavbarToggleElm.classList.remove('open');
        navbarElm.classList.remove('open');
    } else {
        btnNavbarToggleElm.classList.add('open');
        navbarElm.classList.add('open');
    }

}

// Event Listeners:
btnNextElm.addEventListener('click', nextSlider);
btnPrevElm.addEventListener('click', prevSlider);
window.addEventListener('resize', resizeWindow);
btnNavbarToggleElm.addEventListener('click', toggleNavbarMenu);