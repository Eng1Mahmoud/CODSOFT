// main.js
const slider = document.querySelector('.slider');
const circles = document.querySelectorAll('.circle');

let currentSlide = 0;

const updateSlider = () => {
    const translateX = -currentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    circles.forEach((circle, index) => {
        circle.classList.toggle('active', index === currentSlide);
    });
};

const nextSlide = () => {
    if (currentSlide < circles.length - 1) {
        currentSlide++;
    } else {
        // If on the last slide, navigate to the first slide
        currentSlide = 0;
    }
    updateSlider();
};

const prevSlide = () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        // If on the first slide, navigate to the last slide
        currentSlide = circles.length - 1;
    }
    updateSlider();
};

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

updateSlider();

setInterval(nextSlide, 3000); // Auto-advance the slider every 3 seconds
