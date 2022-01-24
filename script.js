function computerPlay() {
    let computerNum = Math.floor(Math.random() * 3);

    // console.log(computerNum);

    switch (computerNum) {

        case 0:
            return 'Rock';

        case 1:
            return 'Paper';

        case 2:
            return 'Scissors';

        default:
            return 'Error';
    }
}



function gameRound(playerSelection, computerSelection) {

    if (playerSelection == 'Rock' && computerSelection == 'Paper') {

        return 'You lose! Paper beats Rock.';

    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {

        return 'You lose! Scissors beats Paper.';

    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {

        return 'You lose! Rock beats Scissors.';

    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {

        return 'You win! Rock beats Scissors.';

    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {

        return 'You win! Paper beats Rock.';

    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {

        return 'You win! Scissors beats Paper.';

    } else if (playerSelection == computerSelection) {

        return `Tie. You both chose ${computerSelection}.`;
    }

}

function captalizeFirstLetter(str) {

    return str[0].toUpperCase() + str.substring(1);

}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let index = 1; index <= 5; index++) {
        let computerInput = computerPlay();
        let playerInput = captalizeFirstLetter(prompt("Rock, Paper or Scissors?"));
        let result = gameRound(playerInput, computerInput);
        let playerWin = result.substring(0, 8) == 'You win!';
        let playerLose = result.substring(0, 9) == 'You lose!';
        let playerTie = result.substring(0, 4) == 'Tie.';

        if (playerWin) {

            ++playerScore;

        } else if (playerLose) {

            ++computerScore;

        } else if (playerTie) {

            ++playerScore;
            ++computerScore;
        }
        console.log(`ROUND: ${index}`)
        console.log(result)
        console.log(`${playerScore} : ${computerScore}`);

    }

    if (playerScore > computerScore) {
        console.log("You are the winner! :)")
    } else if (playerScore < computerScore) {
        console.log("You are the loser! :(")
    } else if (playerScore == computerScore) {
        console.log("Tied game.")
    }
}

game();