/*const habitForm = document.getElementById("habit-form");
const habitList = document.getElementById("habit-list");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

const renderHabits = () => {
  habitList.innerHTML = habits
    .map(
      (habit, index) => `
      <li class="habit ${habit.completed ? "complete" : ""}">
        ${habit.name}
        <button onclick="toggleHabit(${index})">${habit.completed ? "Undo" : "Complete"}</button>
        <button onclick="deleteHabit(${index})">Delete</button>
      </li>
    `
    )
    .join("");
};

habitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const habitInput = document.getElementById("habit").value;
  if (habitInput) {
    habits.push({ name: habitInput, completed: false });
    localStorage.setItem("habits", JSON.stringify(habits));
    renderHabits();
    habitForm.reset();
  }
});

const toggleHabit = (index) => {
  habits[index].completed = !habits[index].completed;
  localStorage.setItem("habits", JSON.stringify(habits));
  renderHabits();
};

const deleteHabit = (index) => {
  habits.splice(index, 1);
  localStorage.setItem("habits", JSON.stringify(habits));
  renderHabits();
};

renderHabits();*/
// Select form, input, and list
const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitList = document.getElementById('habit-list');

// Add event listener to the form
habitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the habit value
  const habit = habitInput.value;

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = habit;

  // Add a "Mark as Completed" button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Add a "Remove" button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    habitList.removeChild(listItem);
  });

  // Append buttons to the list item
  listItem.appendChild(completeBtn);
  listItem.appendChild(removeBtn);

  // Add the list item to the list
  habitList.appendChild(listItem);

  // Clear the input field
  habitInput.value = '';
});