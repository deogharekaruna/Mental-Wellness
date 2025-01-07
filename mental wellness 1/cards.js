 
      document.addEventListener("DOMContentLoaded", () => {
        const gameGrid = document.getElementById("game-grid");
        const scoreDisplay = document.getElementById("memory-score");
        const startButton = document.getElementById("start-memory-game");
    
        let cards = [];
        let flippedCards = [];
        let score = 0;
    
        // Create the cards dynamically
        function createCards() {
            const cardValues = ["Anxiety", "Sad", "Happy", "Depression", "Netural", "Frustrated", "Confused", "Angry"];
            const allValues = [...cardValues, ...cardValues]; // Two of each card
    
            // Shuffle the card values
            allValues.sort(() => Math.random() - 0.5);
    
            // Generate the cards
            gameGrid.innerHTML = "";
            allValues.forEach(value => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.dataset.value = value;
                card.innerText = "?";
                gameGrid.appendChild(card);
                cards.push(card);
            });
        }
        function flipCard(card) {
            if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
                card.classList.add("flipped");
                card.innerText = card.dataset.value;
                flippedCards.push(card);
    
                // Check for a match
                if (flippedCards.length === 2) {
                    checkMatch();
                }
            }
        }
    
        function checkMatch() {
            const [card1, card2] = flippedCards;
            if (card1.dataset.value === card2.dataset.value) {
                // Match found
                score++;
                scoreDisplay.textContent = score;
                flippedCards = [];
            } else {
                // No match, flip back after a short delay
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card1.innerText = "?";
                    card2.classList.remove("flipped");
                    card2.innerText = "?";
                    flippedCards = [];
                }, 1000);
            }
        }
    
        function resetGame() {
            score = 0;
            scoreDisplay.textContent = score;
            flippedCards = [];
            cards = [];
            createCards();
    
            // Add click event listeners to the cards
            cards.forEach(card => {
                card.addEventListener("click", () => flipCard(card));
            });
        }
    
        startButton.addEventListener("click", resetGame);
    });
    
    