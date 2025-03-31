// Word list
const words = [
    "python", "javascript", "django", "react", "angular", "bootstrap", "jquery", "flask",
    "typescript", "html", "css", "node", "express", "mongodb", "postgresql", "sqlite",
    "algorithm", "function", "variable", "constant", "object", "array", "string", "integer",
    "boolean", "null", "undefined", "class", "inheritance", "polymorphism", "encapsulation",
    "recursion", "iteration", "closure", "callback", "promise", "async", "await", "event",
    "listener", "framework", "library", "component", "state", "props", "context", "redux",
    "api", "endpoint", "request", "response", "json", "xml", "authentication", "authorization",
    "cookie", "session", "token", "encryption", "hashing", "debugging", "testing", "refactoring",
    "deployment", "container", "docker", "kubernetes", "virtualization", "cloud", "server",
    "frontend", "backend", "fullstack", "developer", "software", "engineering", "design",
    "architecture", "performance", "optimization", "scalability", "security", "accessibility",
    "usability", "responsive", "mobile", "desktop", "browser", "compatibility", "versioning",
    "repository", "branch", "commit", "merge", "pull", "push", "fork", "clone", "issue",
    "bug", "feature", "sprint", "agile", "scrum", "kanban", "waterfall", "prototype", "wireframe"
];

// Word hints
const wordHints = {
    python: "A popular programming language named after a snake.",
    javascript: "A programming language commonly used for web development.",
    django: "A Python web framework named after a jazz guitarist.",
    react: "A JavaScript library for building user interfaces.",
    angular: "A TypeScript-based web application framework.",
    bootstrap: "A CSS framework for responsive web design.",
    jquery: "A JavaScript library for DOM manipulation.",
    flask: "A lightweight Python web framework.",
    typescript: "A superset of JavaScript with static typing.",
    html: "The standard markup language for creating web pages.",
    css: "A style sheet language used for describing the presentation of a document.",
    node: "A JavaScript runtime built on Chrome's V8 engine.",
    // Add more words and hints as needed
};

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
const shuffleWord = (word) => {
    let shuffled = word;
    while (shuffled === word) {
        shuffled = word.split("").sort(() => Math.random() - 0.5).join("");
    }
    return shuffled;
};

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