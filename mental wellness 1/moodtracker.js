 // Mood Tracker Functionality
 document.getElementById('moodForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const moodInput = document.getElementById('moodInput').value;
  const moodResponse = document.getElementById('moodResponse');
  moodResponse.innerHTML = `<p>Your mood today: <strong>${moodInput}</strong></p>`;
  document.getElementById('moodInput').value = ''; // Clear input field
});