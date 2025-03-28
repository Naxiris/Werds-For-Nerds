const words = ["python", "javascript", "django", "react", "angular", "bootstrap", "jquery", "flask"];
let currentWord = "";
let score = 0;
let timeLeft = 60;
let timerInterval;

// Shuffle the letters of a word
function shuffleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

// Show the game container and start the game
function showGame() {
    document.getElementById("menu-container").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    startGame();
}

// Show instructions
function showInstructions() {
    const instructions = document.getElementById("instructions");
    instructions.classList.toggle("hidden");
}

// Start the game
function startGame() {
    score = 0;
    timeLeft = 60;
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("jumble-word").textContent = shuffleWord(currentWord);
    document.getElementById("score").textContent = score;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("guess-input").value = "";
    document.getElementById("highscore-form").classList.add("hidden");
    document.getElementById("retry-btn").classList.add("hidden");
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("guess-input").disabled = false;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Check the user's guess
function checkGuess() {
    const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
    if (userGuess === currentWord) {
        score++;
        document.getElementById("score").textContent = score;
        document.getElementById("guess-input").value = "";
        currentWord = words[Math.floor(Math.random() * words.length)];
        document.getElementById("jumble-word").textContent = shuffleWord(currentWord);
    }
}

// End the game
function endGame() {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("guess-input").disabled = true;
    document.getElementById("highscore-form").classList.remove("hidden");
    document.getElementById("retry-btn").classList.remove("hidden");
}

// Save highscore
function saveHighscore() {
    const highscoreName = document.getElementById("highscore-name").value.trim();
    if (highscoreName) {
        alert(`Highscore saved! Name: ${highscoreName}, Score: ${score}`);
        document.getElementById("highscore-name").value = "";
        document.getElementById("highscore-form").classList.add("hidden");
    } else {
        alert("Please enter your name to save the highscore.");
    }
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", showGame);
document.getElementById("instructions-btn").addEventListener("click", showInstructions);
document.getElementById("submit-btn").addEventListener("click", checkGuess);
document.getElementById("guess-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkGuess();
    }
});
document.getElementById("retry-btn").addEventListener("click", startGame);
document.getElementById("save-highscore-btn").addEventListener("click", saveHighscore);

// Initialize the game
startGame();