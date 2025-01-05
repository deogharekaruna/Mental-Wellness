document.addEventListener("DOMContentLoaded", () => {
    // Team Carousel Logic
    const carousel = document.querySelector(".carousel");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    let offset = 0;
  
    nextBtn.addEventListener("click", () => {
      offset -= 220; // Move carousel to the left
      if (offset < -(carousel.scrollWidth - carousel.offsetWidth)) {
        offset = 0; // Reset if end is reached
      }
      carousel.style.transform = translateX(${offset}px);
    });
  
    prevBtn.addEventListener("click", () => {
      offset += 220; // Move carousel to the right
      if (offset > 0) {
        offset = -(carousel.scrollWidth - carousel.offsetWidth); // Go to the end
      }
      carousel.style.transform = translateX(${offset}px);
    });
  });