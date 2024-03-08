// start loading
let preload = document.querySelector('[data-preloaded]');
window.onload = () => {
    preload.classList.add('loaded');
    document.body.classList.add('loaded');
    autoSlide();
}
// end loading
// start events
const addEvent = function (elements, eventType, CallBack) {
    for(let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, CallBack);
    }
}
// end events
// start nav bar
let navbar = document.querySelector('[data-navbar]'), navToggler = document.querySelectorAll('[data-nav-toggler]'),
    overlay = document.querySelector('[data-overlay]');

const toggleNavbar = () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
}
addEvent(navToggler, 'click', toggleNavbar);
// end nav bar
// start header
let header = document.querySelector('[data-header]'), scrollPos = 0, topBut = document.querySelector('[data-top-but]');
const hideHeader = function () {
    let scrollBottom = scrollPos < window.scrollY;
    if(scrollBottom) {
        header.classList.add('hide');
    }
    else {
        header.classList.remove('hide');
    }
    scrollPos = window.scrollY;
}
window.onscroll = () => {
    if(window.scrollY >= 50) {
        header.classList.add('active');
        topBut.classList.add('active');
        hideHeader();
    }
    else {
        header.classList.remove('active');
        topBut.classList.remove('active');
    }
}
// end header
// start home
let homeSlider = document.querySelector('[data-home-slider]'), homeItem = document.querySelectorAll('[data-home-item]'),
    homePrev = document.querySelector('[data-prev-but]'), homeNext = document.querySelector('[data-next-but]'),
    currentSlide = 0, lastSlide = homeItem[0], slideInterval;
const updateSlide = function () {
    lastSlide.classList.remove('active');
    homeItem[currentSlide].classList.add('active');
    lastSlide = homeItem[currentSlide];
}
const slideNext = function () {
    if(currentSlide >= homeItem.length - 1) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }
    updateSlide();
}
const slidePrev = function () {
    if(currentSlide <= 0) {
        currentSlide = homeItem.length - 1;
    }
    else {
        currentSlide--;
    }
    updateSlide();
}
homePrev.addEventListener('click', slidePrev);
homeNext.addEventListener('click', slideNext);
const autoSlide = function () {
    slideInterval = setInterval(function () {
        slideNext();
    }, 7000);
}
addEvent([homeNext, homePrev], 'mouseover', function() {
    clearInterval(slideInterval)
})
addEvent([homeNext, homePrev], 'mouseout', autoSlide)
// end home
// start about
let parallaxItem = document.querySelectorAll('[data-parallax-item]'), x, y;
window.onmousemove = (event) => {
    x = 5 - (event.clientX / window.innerWidth * 10);
    y = 5 - (event.clientY / window.innerHeight * 10);
    for(let i = 0; i < parallaxItem.length; i++) {
        x *= Number(parallaxItem[i].dataset.parallaxSpeed);
        y *= Number(parallaxItem[i].dataset.parallaxSpeed);
        parallaxItem[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
}
// end about