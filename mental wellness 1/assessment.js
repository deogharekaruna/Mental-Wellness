// Self-assessment feature
/*document.getElementById("assessment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const result = document.getElementById("q1").value;
    document.getElementById("assessment-result").innerText = You feel anxious ${result}. Consider trying mindfulness exercises.;
  });*/
  const questions = [
    "How often do you feel anxious?",
    "Do you struggle with sleeping?",
    "Are you experiencing prolonged sadness?"
];

let currentQuestion = 0;

const form = document.getElementById("assessment-form");
const result = document.getElementById("assessment-result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.querySelector("label[for='q1']").innerText =
            questions[currentQuestion];
    } else {
        result.innerText =
            "Thank you for completing the assessment! Review your responses.";
        form.style.display = "none";
    }
});