const breathingCircle = document.getElementById("breathing-circle");
const breathingInstructions = document.getElementById("breathing-instructions");
const startBreathing = document.getElementById("start-breathing");

startBreathing.addEventListener("click", () => {
  breathingCircle.style.animation = "breathe 6s infinite";
  breathingInstructions.innerText = "Inhale as the circle expands and exhale as it contracts.";
});