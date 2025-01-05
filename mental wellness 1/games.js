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