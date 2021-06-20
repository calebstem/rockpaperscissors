

function computerPlay() { //rng for computer to choose between rock paper scissors
    let computerChoice = Math.floor(Math.random() * 3); // chooses a number between 0-3
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
    return console.log(computerChoice); // returns what computer is playing for debugging
}

function playerPlay() { //function to ask what the player chooses
    const validChoice = ['rock', 'paper', 'scissors'];// array that contains the only three valid choices
    let playerChoice = window.prompt('Rock,Paper,Scissors');// prompts player to type in Rock Paper Scissors
    let passes = validChoice.find(key => key.toUpperCase() === playerChoice.toUpperCase()) != undefined; //stolen from stackoverflow. mnakes input case-insensitive. .toLowercase didn't work when I tried it
    if (passes) {//player typed Rock Paper Scissors in any case
        playerChoice = playerChoice.toLowerCase();// converts player choice to lowercase for evaluatingResults
        //combineChoices(playerChoice);// wip creating array, not important
        return console.log(`You chose ${playerChoice}`);// debugging,
    } else {// input was not rock paper scissor
       return console.log('Invalid Choice. Try Again');// i'm pretty sure playerChoice can still be invalid, will fix this in a later update
    }

}
function combineChoices(){ // wip creating array, not important
    computerPlay; // wip creating array, not important
    playerPlay; // wip creating array, not important
    let bothChoice = [computerChoice, playerChoice] // wip creating array, not important
    console.log(bothChoice); // wip creating array, not important
}

function evaluateResult(computerChoice, playerChoice){ //function that compares computer to human
    console.log(computerChoice); // debugging
    console.log(playerChoice); // debugging
    let score = 0; // initalizing score variable
    if (playerChoice == 'rock' && computerChoice == 'scissors'){ //rock beats scissors
        console.log('Winner!'); //self explanitory
        return score ++; //updates score in favor of player because of winning
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){//scissors beat paper
        console.log('Winner!');
        return score ++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){//paper beats rock
        console.log('Winner!');
        return score ++;
    } else if (playerChoice === computerChoice){//if computer and player throw the same
        return console.log('Tie')//results in tie
    } else { //was too lazy to type the losing sequence
        console.log('Loser');// the only other options are losing(losing would probably be the default i.e player attempts a non-valid string)
        return score--;// score reflects losing by subtracting a point
    }

}