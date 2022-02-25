// get computer choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// get user input
function getInput() {
    let playerSelection = prompt('Do you choose rock, paper, or scissors?');
    playerSelection = playerSelection.toLowerCase();
    // reprompt user until input is valid
    while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        playerSelection = prompt('Please choose rock, paper, or scissors.');
    }
    return playerSelection;
}

// get results of a single round
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'you win';
        } else {
            return 'you lose';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'you win';
        } else {
            return 'you lose';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'you win';
        } else {
            return 'you lose';
        }
    } 
}

// play 5 rounds and return winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // for each round
    for (let i = 1; i < 6; i++) {
        // store user selection
        let playerSelection = getInput();
        // store computer selection
        let computerSelection = computerPlay();
        // store results of this round
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`round ${i}:` + '\n' + `your choice: ${playerSelection}` + '\n' + `computer choice: ${computerSelection}`);
        // declare winner of this round and increase score of winner
        if (roundResult === 'you win') {
            playerScore++;
            console.log('you win');
        } else if (roundResult === 'you lose') {
            computerScore++;
            console.log('you lose');
        } else {
            console.log('tie');
        }
    }
    // determine overall winner (highest score)
    if (playerScore > computerScore) {
        winner = 'player';
    } else if (playerScore < computerScore) {
        winner = 'computer';
    } else {
        winner = 'nobody';
    }
    return `${winner} is the winner`;
}

// run game
console.log(game());




