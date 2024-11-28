let players = []; // Start with an empty array for player names
let futureQuestions = [
    "Next year, we're all going on an adventure! Where would you like to go, and what’s the one thing you’d need to survive in that place?",
    "Imagine we take the same trip next year. What would you do differently this time? What’s one thing you’d pack or leave behind?",
    "Next year, we decide to go somewhere totally unexpected—what’s the most out-of-character destination you would choose for us? Would we thrive or get lost?",
    "Fast forward one year: what do you think your life will look like, and how would you like us to celebrate that moment together?",
    "Next year, we're creating a bucket list as a group. What’s the one thing you think should be on that list that we haven't tried yet?",
    "If we plan an epic group vacation next year, what’s one activity you absolutely want to do, even if it's a little embarrassing?",
    "Next year, imagine we’re all living in different cities. What’s the one thing we’ll still do together no matter where we are?",
    "Next year, we’re going on a new hiking adventure—what's the craziest trail you’d want us to conquer?",
    "Looking ahead, what’s one challenge or goal you want to accomplish by next year, and how can we help make it happen during our next getaway?",
    "By next year, one of us will have a life-changing experience. Who do you think it will be, and why are we all going to be there to cheer them on?"
];
let romanticQuestions = [
    "If you were planning a romantic getaway for two, where would you go, and what would you do to make it unforgettable?",
    "Imagine we are all at a scenic spot next year, and you have the chance to confess something to someone in the group. What would you say?",
    "If one of the group members were to surprise everyone with a spontaneous romantic gesture next year, who do you think would pull it off flawlessly?",
    "If you had to give a love advice to one person in this group, what would it be and why? Bonus points for humor!",
    "Romantic dinner on the trail or sunset view with candles? What’s your idea of the perfect romantic moment on a group trip?",
    "You have to plan a dream date for someone in the group, who would you pick, and what would your dream date look like?",
    "If you could choose one place in the world to go for a romantic getaway, where would it be?",
    "What’s one romantic gesture you’ve always wanted to experience on a hiking trip?",
    "What's the most romantic thing you could imagine happening on this trip?"
];
let shareOrDareChallenges = [
    "Share a love letter you’d write to your future self 5 years from now.",
    "Dare to send a text to your crush or partner, but the catch is you have to do it using emojis only!",
    "Share your most embarrassing moment that you’ve never told anyone, and why you think it still makes you laugh (or cringe).",
    "Dare to ask someone in the group for their phone number... and then make up a totally random excuse why you need it.",
    "Share your most random, funny, or romantic dream date scenario.",
    "Dare to serenade someone in the group for 30 seconds with a love song or a silly made-up tune.",
    "Share the most recent love-related or romantic meme or quote you saved and why you like it.",
    "Dare to give someone a compliment that would totally surprise them and make them smile.",
    "Share the weirdest ‘pick-up line’ you’ve ever heard or used, whether it worked or not.",
    "Dare to speak only in romantic movie quotes for the next 5 minutes. Let’s see who can guess them first!"
];
let truthOrDareQuestions = [
    "Truth: What’s one secret you’ve never told anyone in the group?",
    "Dare: Call someone and tell them you’ve just won the lottery.",
    "Truth: Who in the group do you think would be the most fun on a solo adventure?",
    "Dare: Take a silly selfie and post it on your social media!",
    "Truth: If you could change one thing about yourself, what would it be?",
    "Dare: Share the most embarrassing thing that’s ever happened to you on a trip.",
    "Truth: What’s the weirdest food you’ve ever eaten and liked?",
    "Dare: Do a random dance for 30 seconds right now!",
    "Truth: What’s your biggest fear when traveling with a group?",
    "Dare: Send a funny voice note to someone in the group."
];

// Game progress variables
let round = 1;
let currentPlayerIndex = 0;
let gameOver = false;
let questionsAsked = 0; // Track the number of questions asked in the current round
const backgroundImages = [
    'url("b.jpg")', 'url("b1.jpg")', 'url("b3.jpg")', 'url("b4.jpg")', 'url("lions.jpg")','url("b2.jpg")', 'url("b5.jpg")', 'url("b6.jpg")'
];

// Function to start the game
function startGame() {
    // Ask for player names
    const playerInput = prompt("Enter player names, separated by commas: ");
    players = playerInput.split(',').map(player => player.trim());

    if (players.length < 1) {
        alert("Please enter at least one player.");
        return;
    }

    gameOver = false;
    document.getElementById("startButton").style.display = "none";
    nextRound();
}

// Function to move to the next round
function nextRound() {
    if (gameOver) return;

    if (round === 1) {
        playRound(futureQuestions, "Future Adventures Round");
    } else if (round === 2) {
        playRound(romanticQuestions, "Romantic & Fun Round");
    } else if (round === 3) {
        playRound(shareOrDareChallenges, "Share or Dare Challenges Round");
    } else if (round === 4) {
        playRound(truthOrDareQuestions, "Truth or Dare Round");
    } else {
        endGame();
    }
}

// Function to play a round
function playRound(questions, roundTitle) {
    if (currentPlayerIndex < players.length) {
        const player = players[currentPlayerIndex];
        const question = questions[currentPlayerIndex % questions.length];
        showCard(`${roundTitle}: ${player}`, question);
        currentPlayerIndex++;
    } else {
        currentPlayerIndex = 0;
        round++;
        showCard("Round Complete!", `We're moving to the next round!`);
        setTimeout(nextRound, 2000); // Wait 2 seconds before moving to next round
    }
}

// Function to display the current question and player
function showCard(title, content) {
    document.body.style.backgroundImage = backgroundImages[Math.floor(questionsAsked / 4) % backgroundImages.length];
    
    document.body.innerHTML = `
        <div class="card">
            <h1>${title}</h1>
            <p>${content}</p>
            <button onclick="nextRound()">Next</button>
        </div>
    `;
    
    questionsAsked++;
}

// Function to end the game
function endGame() {
    gameOver = true;
    showCard("Game Over", "Thanks for playing! We hope you had a blast!");
    setTimeout(() => {
        const resetButton = document.createElement('button');
        resetButton.innerText = "Play Again";
        resetButton.onclick = resetGame;
        document.querySelector('.card').appendChild(resetButton);
    }, 2000);
}

// Function to reset the game
function resetGame() {
    round = 1;
    currentPlayerIndex = 0;
    gameOver = false;
    questionsAsked = 0;
    document.body.innerHTML = `
        <div class="card">
            <h1>Welcome to Our Weekend Away Game!</h1>
            <p>Get ready for some fun and reflective moments as we celebrate this weekend together!</p>
            <button id="startButton" onclick="startGame()">Start Game</button>
        </div>
    `;
}
