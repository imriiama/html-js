let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth;

function showSlide(index) {
    const distance = -index * slideWidth;
    document.querySelector('.slider').style.transform = `translateX(${distance}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    setTimeout(autoSlide, 5000);
}

function autoSlide() {
    showSlide(currentIndex);
    setTimeout(nextSlide, 5000);
    currentIndex = (currentIndex + 1) % totalSlides; 
}

autoSlide();

function showText(index) {
    const hiddenTexts = document.querySelectorAll(".hidden-text");
    hiddenTexts.forEach(text => {
        text.style.display = "none";
    });

    const textToShow = document.getElementById("text" + index);
    if (textToShow) {
        textToShow.style.display = "block";
    }
}

