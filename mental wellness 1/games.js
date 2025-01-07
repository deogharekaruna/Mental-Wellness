const moodForm = document.getElementById("mood-form");
const moodChartCanvas = document.getElementById("mood-chart");
const moodChart = moodChartCanvas.getContext("2d");
const historyList = document.getElementById("history-list");
const resetBtn = document.getElementById("reset-btn");

/* // Retrieve mood data from localStorage or create a default structure */
let moodData = JSON.parse(localStorage.getItem("moodData")) || {
  happy: 0,
  neutral: 0,
  sad: 0,
  anxious: 0,
  history: [],
};

/* // Cache Chart.js chart instance globally */
let chartInstance;

/* // Function to update the Pie Chart with smoother transitions */
const updateChart = () => {
  // Destroy previous chart instance to avoid multiple charts on canvas
  if (chartInstance) {
    chartInstance.destroy();
  }

  /* // Create new pie chart with updated data */
  chartInstance = new Chart(moodChart, {
    type: "pie",
    data: {
      labels: ["Happy", "Neutral", "Sad", "Anxious"],
      datasets: [{
        label: "Mood Frequency",
        data: [moodData.happy, moodData.neutral, moodData.sad, moodData.anxious],
        backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336", "#03A9F4"],
        borderColor: ["#fff", "#fff", "#fff", "#fff"],
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const value = tooltipItem.raw;
              return `${tooltipItem.label}: ${value} times`;
            }
          }
        }
      }
    }
  });
};

/* // Function to update the Mood History section dynamically */
const updateHistory = () => {
  historyList.innerHTML = ""; // Clear previous history
  moodData.history.forEach(entry => {
    const div = document.createElement("div");
    div.className = "history-item";
    /* // Using template literals for a clean format */
    div.innerHTML = `<span>${entry.mood} - ${entry.date}</span>`;
    historyList.appendChild(div);
  });
};

/* // Event listener for mood form submission */
moodForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const currentDate = new Date().toLocaleString();

  /* // Update mood count and add to history */
  moodData[mood]++;
  moodData.history.push({ mood, date: currentDate });

  /* // Save updated mood data in localStorage */
  localStorage.setItem("moodData", JSON.stringify(moodData));

  /* // Update chart and history list */
  updateChart();
  updateHistory();
});

// Event listener for Reset button
resetBtn.addEventListener("click", () => {
  moodData = { happy: 0, neutral: 0, sad: 0, anxious: 0, history: [] };
  localStorage.setItem("moodData", JSON.stringify(moodData));
  updateChart();
  updateHistory();
});

// Initial rendering of chart and history
document.addEventListener("DOMContentLoaded", () => {
  updateChart();
  updateHistory();
});
