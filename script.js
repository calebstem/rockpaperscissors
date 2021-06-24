let computerChoice = 0;
let playerChoice = 0;
let playerScore = 0;
let computerScore =0;
let playerEmoji = '';
let computerEmoji = '';
let scoreArrow = '';

let computerPlay = function() { //rng for computer to choose between rock paper scissors
    computerChoice = Math.floor(Math.random() * 3); // chooses a number between 0-3
    switch(computerChoice) {
        case 0: // if num = 0, computer plays rock
            computerChoice = 'rock';
            break;
        case 1: // number 1, play paper
            computerChoice = 'paper';
            break;
        case 2: // number 2, play scissors
            computerChoice = 'scissors';
            break;
        default: // don't believe is neccessary but it's good practice for case switches
            console.log('Something is wrong');
            break;
    }
    //combineChoices(computerChoice); // wip creating array, not important
    //return console.log(computerChoice); // returns what computer is playing for debugging
}

let playerPlay = function(clicked_id) {
    playerChoice = clicked_id;
    console.log(playerChoice);
    computerPlay();
    console.log(`Computer chose ${computerChoice}`)
    evaluateResult();
    displayResult();
    if (playerScore == 5 || computerScore == 5){
        if (playerScore == 5){
            document.getElementById('player').textContent = 'Winner';
        } else {
            document.getElementById('computer').textContent = 'Winner';
        }
        playerScore = 0;
        computerScore = 0; 
        return;
    }
    }

/*let playerPlay = function() { //function to ask what the player chooses
    const validChoice = ['rock', 'paper', 'scissors'];// array that contains the only three valid choices
    playerChoice = window.prompt('Rock,Paper,Scissors');// prompts player to type in Rock Paper Scissors
    let passes = validChoice.find(key => key.toUpperCase() === playerChoice.toUpperCase()) != undefined; //stolen from stackoverflow. mnakes input case-insensitive. .toLowercase didn't work when I tried it
    if (passes) {//player typed Rock Paper Scissors in any case
        playerChoice = playerChoice.toLowerCase();// converts player choice to lowercase for evaluatingResults
        //combineChoices(playerChoice);// wip creating array, not important
        return console.log(`You chose ${playerChoice}`);// debugging,
    } else {// input was not rock paper scissor
       return console.log('Invalid Choice. Try Again');// i'm pretty sure playerChoice can still be invalid, will fix this in a later update
    }

}*/


function evaluateResult(){ //function that compares computer to human
    //console.log(computerChoice); // debugging
    //console.log(playerChoice); // debugging
    if (playerChoice == 'rock' && computerChoice == 'scissors'){ //rock beats scissors
        scoreArrow = '>';
        return playerScore ++; //updates score in favor of player because of winning
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){//scissors beat paper
        scoreArrow = '>';
        return playerScore ++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){//paper beats rock
        scoreArrow = '>';
        return playerScore ++;
    } else if (playerChoice === computerChoice){//if computer and player throw the same
        return scoreArrow = '=';
    } else { //was too lazy to type the losing sequence
        scoreArrow = '<';
        return computerScore++;// score reflects losing by subtracting a point
    }

}

function displayResult(){
    document.getElementById('playerScore').textContent = `Player:${playerScore}`;
    document.getElementById('computerScore').textContent = `Computer:${computerScore}`;
    translateEmoji();
    document.getElementById('player').textContent = playerEmoji;
    document.getElementById('scoreArrow').textContent = scoreArrow;
    document.getElementById('computer').textContent = computerEmoji;
}

function translateEmoji(){
   if (playerChoice == 'rock'){
        playerEmoji = '🪨';
   } else if (playerChoice == 'paper'){
       playerEmoji = '📋';
   } else if (playerChoice == 'scissors'){
       playerEmoji = '✂️';
   }

   if (computerChoice == 'rock'){
    computerEmoji = '🪨';
    } else if (computerChoice == 'paper'){
   computerEmoji = '📋';
    } else if (computerChoice == 'scissors'){
   computerEmoji = '✂️';
    }
   
}