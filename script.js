const slides = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');


let currentSlide = 1;
function showSlide() {
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }
    if (currentSlide < 1) {
        currentSlide = 3;
    }
    slides.forEach(function (slide) {
        slide.style.display = "none";
    });
    dots.forEach(function (dot) {
        dot.classList.remove('active');
    });
    slides[currentSlide - 1].style.display = 'block';
    dots[currentSlide - 1].classList.add('active');
}

function handlePrev() {
    currentSlide -= 1;
    showSlide();
}

function handleNext() {
    currentSlide += 1;
    showSlide();
}

function handleDot(i) {
    currentSlide = i;
    showSlide();
}

function timer() {
    currentSlide += 1;
    showSlide();
}

function init() {
    showSlide();
    prevBtn.addEventListener('click', handlePrev);
    nextBtn.addEventListener('click', handleNext);
    setInterval(timer, 2000);
}

init();
