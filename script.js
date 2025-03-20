const slides = [];
for (let i = 1; i <= 68; i++) {
    slides.push(`assets/images/slide${i}.jpg`);
}

let currentSlide = 0;
let isPaused = false;
const slideImage = document.getElementById("slide-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    slideImage.src = slides[currentSlide];
}

function nextSlide() {
    if (!isPaused) {
        showSlide(currentSlide + 1);
    }
}

// Автозміна слайдів
let slideInterval = setInterval(nextSlide, 3000);

// Пауза при кліку на зображення
slideImage.addEventListener("click", () => {
    isPaused = !isPaused;
    if (!isPaused) {
        slideInterval = setInterval(nextSlide, 3000);
    } else {
        clearInterval(slideInterval);
    }
});

// Обробники подій для стрілок
prevButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(currentSlide - 1);
    if (!isPaused) slideInterval = setInterval(nextSlide, 3000);
});

nextButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(currentSlide + 1);
    if (!isPaused) slideInterval = setInterval(nextSlide, 3000);
});

// Початковий показ першого слайду
showSlide(0);
