function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getInput() {
    let playerSelection = prompt('Do you choose rock, paper, or scissors?');
    playerSelection = playerSelection.toLowerCase();
    while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        playerSelection = prompt('Please choose rock, paper, or scissors.');
    }
    return playerSelection;
}

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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        let playerSelection = getInput();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`round ${i}:` + '\n' + `your choice: ${playerSelection}` + '\n' + `computer choice: ${computerSelection}`);

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
    if (playerScore > computerScore) {
        winner = 'player';
    } else if (playerScore < computerScore) {
        winner = 'computer';
    } else {
        winner = 'nobody';
    }
    return `${winner} is the winner`;
}

console.log(game());




