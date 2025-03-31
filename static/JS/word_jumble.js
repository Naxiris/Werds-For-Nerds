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
    express: "A minimal and flexible Node.js web application framework.",
    mongodb: "A NoSQL database that stores data in JSON-like documents.",
    postgresql: "An open-source relational database management system.",
    sqlite: "A lightweight, serverless database engine.",
    algorithm: "A step-by-step procedure for solving a problem.",
    function: "A reusable block of code that performs a specific task.",
    variable: "A named storage for data in a program.",
    constant: "A value that does not change during program execution.",
    object: "A collection of properties and methods in programming.",
    array: "A data structure used to store multiple values in a single variable.",
    string: "A sequence of characters used to represent text.",
    integer: "A whole number, positive or negative, without decimals.",
    boolean: "A data type with two possible values: true or false.",
    null: "A special value representing 'no value' or 'empty'.",
    undefined: "A variable that has been declared but not assigned a value.",
    class: "A blueprint for creating objects in object-oriented programming.",
    inheritance: "A mechanism where one class acquires properties of another.",
    polymorphism: "The ability of different objects to respond to the same method.",
    encapsulation: "The bundling of data and methods into a single unit.",
    recursion: "A function that calls itself to solve a problem.",
    iteration: "The repetition of a process in a program.",
    closure: "A function that retains access to its outer scope variables.",
    callback: "A function passed as an argument to another function.",
    promise: "An object representing the eventual completion of an asynchronous operation.",
    async: "A keyword used to define asynchronous functions.",
    await: "A keyword used to wait for a promise to resolve.",
    event: "An action or occurrence that can be handled in a program.",
    listener: "A function that waits for and responds to an event.",
    framework: "A platform for building applications with pre-written code.",
    library: "A collection of pre-written code that can be reused.",
    component: "A reusable piece of UI in modern web development.",
    state: "An object that holds data or information about a component.",
    props: "Short for 'properties', used to pass data to components.",
    context: "A way to share values between components without passing props.",
    redux: "A state management library for JavaScript applications.",
    api: "A set of functions and protocols for building software applications.",
    endpoint: "A specific URL where an API can be accessed.",
    request: "A message sent to a server to perform an action.",
    response: "The data sent back from a server after a request.",
    json: "A lightweight data format often used for APIs.",
    xml: "A markup language used for storing and transporting data.",
    authentication: "The process of verifying a user's identity.",
    authorization: "The process of granting or denying access to resources.",
    cookie: "A small piece of data stored on the user's browser.",
    session: "A way to store user data during a single interaction.",
    token: "A piece of data used for authentication and authorization.",
    encryption: "The process of converting data into a secure format.",
    hashing: "A process of converting data into a fixed-size string.",
    debugging: "The process of finding and fixing errors in code.",
    testing: "The process of verifying that code works as expected.",
    refactoring: "The process of improving code without changing its behavior.",
    deployment: "The process of making an application available for use.",
    container: "A lightweight, portable unit for running applications.",
    docker: "A platform for developing, shipping, and running containers.",
    kubernetes: "A system for automating containerized application deployment.",
    virtualization: "The creation of virtual versions of resources.",
    cloud: "A network of remote servers for storing and accessing data.",
    server: "A computer or system that provides resources to other devices.",
    frontend: "The part of a website or application that users interact with.",
    backend: "The part of a website or application that handles data and logic.",
    fullstack: "A developer skilled in both frontend and backend development.",
    developer: "A person who writes and maintains code.",
    software: "A set of instructions that tell a computer what to do.",
    engineering: "The application of scientific principles to design and build systems.",
    design: "The process of creating the look and feel of an application.",
    architecture: "The high-level structure of a software system.",
    performance: "The speed and efficiency of a software application.",
    optimization: "The process of making a system as efficient as possible.",
    scalability: "The ability of a system to handle increased workload.",
    security: "The protection of systems and data from unauthorized access.",
    accessibility: "The design of systems for use by people with disabilities.",
    usability: "The ease of use and learnability of a system.",
    responsive: "A design approach that adapts to different screen sizes.",
    mobile: "Applications or websites designed for use on smartphones.",
    desktop: "Applications or websites designed for use on computers.",
    browser: "A software application for accessing the web.",
    compatibility: "The ability of a system to work with different devices or software.",
    versioning: "The process of managing changes to software over time.",
    repository: "A storage location for software code.",
    branch: "A separate line of development in version control.",
    commit: "A saved change in version control.",
    merge: "The process of combining changes from different branches.",
    pull: "The process of fetching changes from a remote repository.",
    push: "The process of sending changes to a remote repository.",
    fork: "A copy of a repository that you can modify independently.",
    clone: "A local copy of a remote repository.",
    issue: "A task or bug tracked in a project.",
    bug: "An error or flaw in software.",
    feature: "A new functionality added to software.",
    sprint: "A set period of time for completing specific tasks in Agile.",
    agile: "A methodology for iterative and incremental software development.",
    scrum: "A framework for managing Agile projects.",
    kanban: "A visual workflow management method.",
    waterfall: "A linear approach to software development.",
    prototype: "An early model of a product.",
    wireframe: "A basic visual guide for a website or application layout."
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