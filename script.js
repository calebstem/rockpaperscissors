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

function playerInput() {
    const validChoice = 'rock' || 'paper' || 'scissors';
    let playerChoice = window.prompt('Rock,Paper,Scissors');
    if (validChoice.localeCompare(playerChoice, undefined, {sensitivity: 'accent' }) === 0){
        return console.log(`You chose ${playerChoice}`);
    } else {
       return console.log('Invalid Choice. Try Again');
    }

}