const tips = [
    "Take a 10-minute walk outside to clear your mind.",
    "Practice gratitude by listing 3 things you're thankful for.",
    "Spend 5 minutes doing deep breathing exercises.",
    "Drink a glass of water and stay hydrated.",
    "Write down one positive thing about your day.",
  ];
  
  const dailyTip = document.getElementById("daily-tip");
  const getTip = document.getElementById("get-tip");
  
  getTip.addEventListener("click", () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    dailyTip.innerText = randomTip;
  });