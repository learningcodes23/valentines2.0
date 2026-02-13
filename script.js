/**
 * Core function to handle slide transitions.
 * It hides all slides and shows the one matching the provided ID.
 */
function goToSlide(slideId) {
    // 1. Select all elements with the class 'slide'
    const slides = document.querySelectorAll(".slide");
    
    // 2. Remove the 'active' class from every slide to hide them
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // 3. Find the specific slide we want to show
    const targetSlide = document.getElementById(slideId);
    
    if (targetSlide) {
        // 4. Add the 'active' class to reveal it
        targetSlide.classList.add("active");
        
        // 5. Scroll to the top of the page so the new slide is perfectly framed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error(`Slide Error: Could not find an element with ID "${slideId}"`);
    }
}

/** * Keep these individual functions so your existing HTML buttons 
 * (like onclick="goToSlide8()") still work perfectly!
 */
function goToSlide2() { goToSlide("slide2"); }
function goToSlide3() { goToSlide("slide3"); }
function goToSlide4() { goToSlide("slide4"); }
function goToSlide5() { goToSlide("slide5"); }
function goToSlide6() { goToSlide("slide6"); }
function goToSlide7() { goToSlide("slide7"); }
function goToSlide8() { goToSlide("slide8"); }
function goToSlide9() { goToSlide("slide9"); }
function goToSlide10() { goToSlide("slide10"); }
