let computerChoice = 0

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
    return computerChoice;
}

function playerPlay() {
    const validChoice = ['rock', 'paper', 'scissors'];
    let playerChoice = window.prompt('Rock,Paper,Scissors');
    let passes = validChoice.find(key => key.toUpperCase() === playerChoice.toUpperCase()) != undefined; 
    if (passes) {
        return console.log(`You chose ${playerChoice}`);
    } else {
       return console.log('Invalid Choice. Try Again');
    }

}
function evaluateResult(computerChoice, playerChoice){
    let score = 0;
    switch (playerChoice) {
        case 'rock' && computerChoice == 'scissors':
        case 'scissors' && computerChoice == 'paper':
        case 'paper' && computerChoice == 'rock':
            score++;
            console.log('Winner!');
            break;
        case computerChoice:
            console.log('Tie');
            break;
        default:
            score--;
            console.log('Loser :(');
            break;
    } 

}