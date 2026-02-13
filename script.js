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

function goToSlide8() {
    goToSlide("slide8");
}

function goToSlide9() {
    goToSlide("slide9");
}

function goToSlide10() {
    goToSlide("slide10");
}
// This is your core logic from the uploaded file
function goToSlide(slideId) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    const target = document.getElementById(slideId);
    if (target) {
        target.classList.add("active");
    } else {
        console.error("Slide ID not found: " + slideId);
    }
}

// Instead of writing goToSlide2, goToSlide3, etc. manually
// You can just call goToSlide('slideX') directly in your HTML onclick.
function goToSlide2() { goToSlide("slide2"); }
function goToSlide3() { goToSlide("slide3"); }
function goToSlide4() { goToSlide("slide4"); }
function goToSlide5() { goToSlide("slide5"); }
// ... and so on for your other slides
