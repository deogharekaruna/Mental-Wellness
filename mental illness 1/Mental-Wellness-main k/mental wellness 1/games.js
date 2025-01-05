const gameBoard = document.getElementById("game-board");
const pairs = [
  { stressor: "Work Stress", coping: "Take a break" },
  { stressor: "Anxiety", coping: "Practice mindfulness" },
];

function createGameBoard() {
  const shuffled = [...pairs, ...pairs]
    .sort(() => 0.5 - Math.random())
    .map((pair) =>
      pair.stressor
        ? <div class="card">${pair.stressor}</div>
        : <div class="card">${pair.coping}</div>
    );

  gameBoard.innerHTML = shuffled.join(" karuna");
}

createGameBoard();
const draggables = document.querySelectorAll("[draggable='true']");
const dropzones = document.querySelectorAll("#coping-strategies div");

draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

dropzones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        zone.appendChild(dragging);
    });
});