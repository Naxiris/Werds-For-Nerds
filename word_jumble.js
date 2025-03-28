// Word list
const words = ["python", "javascript", "django", "react", "angular", "bootstrap", "jquery", "flask"];

// Game state variables
let currentWord = "";
let score = 0;
let timeLeft = 60;
let timerInterval;

// Cached DOM elements
const menuContainer = document.getElementById("menu-container");
const gameContainer = document.getElementById("game-container");
const jumbleWordElement = document.getElementById("jumble-word");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const guessInput = document.getElementById("guess-input");
const highscoreForm = document.getElementById("highscore-form");
const retryButton = document.getElementById("retry-btn");
const submitButton = document.getElementById("submit-btn");
const highscoreNameInput = document.getElementById("highscore-name");

// Utility function to shuffle a word
const shuffleWord = (word) => word.split("").sort(() => Math.random() - 0.5).join("");

// Reset game state
const resetGameState = () => {
    score = 0;
    timeLeft = 60;
    currentWord = words[Math.floor(Math.random() * words.length)];
    jumbleWordElement.textContent = shuffleWord(currentWord);
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    guessInput.value = "";
    highscoreForm.classList.add("hidden");
    retryButton.classList.add("hidden");
    submitButton.disabled = false;
    guessInput.disabled = false;
};

// Start the game
const startGame = () => {
    resetGameState();

    // Clear any existing timer interval
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Start the timer
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            endGame();
        }
    }, 1000);
};

// Check the user's guess
const checkGuess = () => {
    const userGuess = guessInput.value.trim().toLowerCase();
    if (userGuess === currentWord) {
        score++;
        scoreElement.textContent = score;
        guessInput.value = "";
        currentWord = words[Math.floor(Math.random() * words.length)];
        jumbleWordElement.textContent = shuffleWord(currentWord);
    }
};

// End the game
const endGame = () => {
    submitButton.disabled = true;
    guessInput.disabled = true;
    highscoreForm.classList.remove("hidden");
    retryButton.classList.remove("hidden");
};

// Save highscore
const saveHighscore = () => {
    const highscoreName = highscoreNameInput.value.trim();
    if (highscoreName) {
        alert(`Highscore saved! Name: ${highscoreName}, Score: ${score}`);
        highscoreNameInput.value = "";
        highscoreForm.classList.add("hidden");
    } else {
        alert("Please enter your name to save the highscore.");
    }
};

// Show the game container
const showGame = () => {
    menuContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    startGame();
};

// Toggle instructions visibility
const showInstructions = () => {
    const instructions = document.getElementById("instructions");
    instructions.classList.toggle("hidden");
};

// Event listeners
document.getElementById("start-btn").addEventListener("click", showGame);
document.getElementById("instructions-btn").addEventListener("click", showInstructions);
submitButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkGuess();
    }
});
retryButton.addEventListener("click", startGame);
document.getElementById("save-highscore-btn").addEventListener("click", saveHighscore);

// Initialize the game