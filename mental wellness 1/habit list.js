


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
let streak = 0;
