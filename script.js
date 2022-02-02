function computerPlay() {
    let computerNum = Math.floor(Math.random() * 3);


    switch (computerNum) {

        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissors';

        default:
            return 'Error';
    }
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {

        return 'You lose! Paper beats Rock.';

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {

        return 'You lose! Scissors beats Paper.';

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {

        return 'You lose! Rock beats Scissors.';

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {

        return 'You win! Rock beats Scissors.';

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {

        return 'You win! Paper beats Rock.';

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {

        return 'You win! Scissors beats Paper.';

    } else if (playerSelection == computerSelection) {

        return `Tie. You both chose ${computerSelection}.`;
    }

}


// function game() {
// let playerScore = 0;
// let computerScore = 0;
//     let computerInput = computerPlay();
//    let playerInput = captalizeFirstLetter(prompt("rock, paper or scissors?"));
//     let result = playRound(playerInput, computerInput);
//     let playerWin = result.substring(0, 8) == 'You win!';
//     let playerLose = result.substring(0, 9) == 'You lose!';
//     let playerTie = result.substring(0, 4) == 'Tie.';

//     if (playerWin) {

//         ++playerScore;

//     } else if (playerLose) {

//         ++computerScore;

//     } else if (playerTie) {

//         ++playerScore;
//         ++computerScore;
//     }
//     console.log(`ROUND: ${index}`)
//     console.log(result)
//     console.log(`${playerScore} : ${computerScore}`);

function checkScore (playerScore, computerScore) {
    if (playerScore == 5) {
        document.querySelector('.game-text').innerHTML = "You are the winner! :)";
    } else if (computerScore == 5) {
        document.querySelector('.game-text').innerHTML = "You are the loser! :("
    }
}

function unPressButton(className) {
    let pressedButton = document.getElementsByClassName(className)[0];
    if (pressedButton != undefined) {
        pressedButton.classList.remove(className);
    }
}


const gameButtons = document.querySelectorAll('.game-button');

let playerScore = 0;

let computerScore = 0;



for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener("click", function () {

        unPressButton('play-pressed');
        unPressButton('cpu-pressed');
        unPressButton('tie');
        

        let playerInput = this.classList;
        playerInput.add("play-pressed");
        let computerInput = computerPlay();
        let computerButton = document.getElementsByClassName(computerInput)
        computerButton[0].classList.add('cpu-pressed');

        let result = playRound(playerInput[0], computerInput);

        let playerWin = result.substring(0, 8) == 'You win!';
        let playerLose = result.substring(0, 9) == 'You lose!';
        let playerTie = result.substring(0, 4) == 'Tie.';

        if (playerWin) {

            ++playerScore;

        } else if (playerLose) {

            ++computerScore;

        } else if (playerTie) {

            document.getElementsByClassName('play-pressed')[0].classList.remove("play-pressed");
            document.getElementsByClassName('cpu-pressed')[0].classList.add('tie');
            document.getElementsByClassName('cpu-pressed')[0].classList.remove("cpu-pressed");

        }

        console.log(playerScore);
        console.log(computerScore);
        document.querySelector('.game-text').innerHTML = result;
        document.querySelector('.player.score').innerHTML = playerScore;
        document.querySelector('.computer.score').innerHTML = computerScore;
        checkScore(playerScore, computerScore);
        if (playerScore == 5 || computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
        }
    });
    
}

