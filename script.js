let computerChoice;
let playerChoice;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log('Something is wrong');
            break;
    }
    //return console.log(computerChoice);
}

function playerPlay() {
    const validChoice = ['rock', 'paper', 'scissors'];
    let playerChoice = window.prompt('Rock,Paper,Scissors');
    let passes = validChoice.find(key => key.toUpperCase() === playerChoice.toUpperCase()) != undefined; 
    if (passes) {
        playerChoice = playerChoice.toLowerCase();
        return console.log(`You chose ${playerChoice}`);
    } else {
       return console.log('Invalid Choice. Try Again');
    }

}
function evaluateResult(computerChoice, playerChoice){
    console.log(computerChoice);
    console.log(playerChoice);
    let score = 0;
    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log('Winner!');
        return score ++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        console.log('Winner!');
        return score ++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){
        console.log('Winner!');
        return score ++;
    } else if (playerChoice === computerChoice){
        return console.log('Tie')
    } else {
        console.log('Loser');
        return score--;
    }

}