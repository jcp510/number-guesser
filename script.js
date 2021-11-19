let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Called at start of each new round, generates new secret target number.
// Returns random integer between 0 and 9.
let generateTarget = () => Math.ceil(Math.random() * 9);

// Called each round, determines winner, guess closest to target number wins.
// If tie, human wins.
// Three parameters, human guess, computer guess, target number.
// Return true if human wins, false if computer wins.
let compareGuesses = (human, computer, target) => {
    if (Math.abs(target - human) <= Math.abs(target - computer)) {
        return true;
    } else {
        return false;
    }
};

// To correctly update winner's score after each round.
let updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;

        case 'computer':
            computerScore++;
            break;
    }
};

// To update round number after each round.
let advanceRound = () => currentRoundNumber++;