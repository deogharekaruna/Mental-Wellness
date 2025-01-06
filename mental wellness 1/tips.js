const tips = [
  "Take a 10-minute walk outside to clear your mind.",
  "Practice gratitude by listing 3 things you're thankful for.",
  "Spend 5 minutes doing deep breathing exercises.",
  "Drink a glass of water and stay hydrated.",
  "Write down one positive thing about your day.",
    "Practice gratitude: Be thankful for the good things in your life", 
    "Develop coping skills: Try meditation, relaxation techniques, deep breathing, or biofeedback",
    "Be creative: Try a new recipe, paint, write a poem, or try a Pinterest project",
    "Get a pet: Pets can provide a sense of security and routine, and can help you de-stress", 
    "Take medication as directed: Never stop taking medication without consulting your healthcare provider",
    "Consider psychotherapy: Talking to a mental health professional can help you manage symptoms and work through challenges",
    "Eat well: A healthy diet can improve your mood and the way you think", 
"Exercise: Physical activity can reduce anxiety and depression",
"Sleep: Getting enough quality sleep can help you feel revitalized",
"Disconnect from electronics: Set aside time to unplug from social media and emails",
"Spend time with loved ones: Reach out to friends and family for emotional support",
"Volunteer: Helping others can enrich your life and make you happier",
];

const dailyTip = document.getElementById("daily-tip");
const getTip = document.getElementById("get-tip");

getTip.addEventListener("click", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  dailyTip.innerText = randomTip;
});
