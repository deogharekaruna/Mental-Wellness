/*const moodForm = document.getElementById("mood-form");
const moodChart = document.getElementById("mood-chart").getContext("2d");

let moodData = JSON.parse(localStorage.getItem("moodData")) || {
  happy: 0,
  neutral: 0,
  sad: 0,
  anxious: 0,
};

const updateChart = () => {
  new Chart(moodChart, {
    type: "bar",
    data: {
      labels: ["Happy", "Neutral", "Sad", "Anxious"],
      datasets: [
        {
          label: "Mood Frequency",
          data: [
            moodData.happy,
            moodData.neutral,
            moodData.sad,
            moodData.anxious,
          ],
          backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336", "#03A9F4"],
        },
      ],
    },
  });
};

moodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mood = document.getElementById("mood").value;
  moodData[mood]++;
  localStorage.setItem("moodData", JSON.stringify(moodData));
  updateChart();
});

updateChart();*/
const moodForm = document.getElementById("mood-form");
    const moodChart = document.getElementById("mood-chart").getContext("2d");
    const historyList = document.getElementById("history-list");
    const resetBtn = document.getElementById("reset-btn");

    // Initialize data from localStorage or create a default structure
    let moodData = JSON.parse(localStorage.getItem("moodData")) || {
      happy: 0,
      neutral: 0,
      sad: 0,
      anxious: 0,
      history: [],
    };

    // Function to update the Pie Chart
    const updateChart = () => {
      new Chart(moodChart, {
        type: "pie",
        data: {
          labels: ["Happy", "Neutral", "Sad", "Anxious"],
          datasets: [
            {
              label: "Mood Frequency",
              data: [moodData.happy, moodData.neutral, moodData.sad, moodData.anxious],
              backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336", "#03A9F4"],
            },
          ],
        },
      });
    };

    // Function to update the Mood History
    const updateHistory = () => {
      historyList.innerHTML = ""; // Clear current history
      moodData.history.forEach((entry) => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = <span>${entry.mood} - ${entry.date}</span>;
        historyList.appendChild(div);
      });
    };

    // Event listener for form submission
    moodForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get the selected mood
      const mood = document.getElementById("mood").value;

      // Update mood data
      moodData[mood]++;
      const currentDate = new Date().toLocaleString();
      moodData.history.push({ mood, date: currentDate });

      // Save to localStorage
      localStorage.setItem("moodData", JSON.stringify(moodData));

      // Update chart and history
      updateChart();
      updateHistory();
    });

    // Event listener for Reset button
    resetBtn.addEventListener("click", () => {
      // Reset data
      moodData = { happy: 0, neutral: 0, sad: 0, anxious: 0, history: [] };
      localStorage.setItem("moodData", JSON.stringify(moodData));
      updateChart();
      updateHistory();
    });

    // Initial rendering
    updateChart();
    updateHistory();