// Self-assessment feature
document.getElementById("assessment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const result = document.getElementById("q1").value;
    document.getElementById("assessment-result").innerText = You feel anxious ${result}. Consider trying mindfulness exercises.;
  });