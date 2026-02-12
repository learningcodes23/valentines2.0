function goToSlide(slideId) {
    // Remove active class from all slides
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // Add active class to selected slide
    document.getElementById(slideId).classList.add("active");
}

/* Individual slide functions */

function goToSlide2() {
    goToSlide("slide2");
}

function goToSlide3() {
    goToSlide("slide3");
}

function goToSlide4() {
    goToSlide("slide4");
}

function goToSlide5() {
    goToSlide("slide5");
}

function goToSlide6() {
    goToSlide("slide6");
}

function goToSlide7() {
    goToSlide("slide7");
}
