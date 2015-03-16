////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /move = move || "getInput()"/;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /move = move || "randomPlay()"/;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";}
    }   if (computerMove === "paper") {
            winner = "computer";
    }   if (computerMove === "rock")  {
            winner = "tie";}

    if (playerMove === "scissors" ) {
        if (computerMove === "paper") {
            winner = "player"; 
    }   if ( computerMove = "rock") {
            winner = "computer";
    }   if (computerMove === "scissors"){
            winner = "tie"
    
    } if (playerMove === "paper" ) {
        if (computerMove === "rock") {
            winner = "player";
    }   if (computerMove === "scissors") {
            winner = "computer";
    }   if (computerMove === "paper") {
            winner = "tie";
    }
        
    }    /
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /*
    if (winner === "player") {
            playerWins = 1;
    } else if (winner === "computer") {
            computerWins = 1;
    }
    I thought I would want to add this in to define "winner"
1. To get it to play in the console type in playToFive().
2. It will spout - "Let's play Rock, Paper, Scissors".
3. First code it should read is the "while loop" which reads if playerwins or computerwins are less than 5, continue to get the players input. It looks like this (playerWins < 5) || (computerWins < 5) { getInput } -  then "getInput" will spit on the consolelog ("Please choose either 'rock', 'paper', ' or 'scissors'. ") 
4. So what should happen after the prompt - I want the console to run the "function randomPlay()" for the computer to pick rock, paper or scissors. 
5. After it's gotten it's random selection I want "function getPlayerMove ()" and "function getComputerMove" to play. (what this does is identify the moves of the player and computer. (so they will probably be stacked on top of each other).
6. I then want the console/computer to read "function getWinner". What this will do is compare the players move to the computers move and decide the winner from that.
7. After the winner has been decided, I need the computer to then proclaim who was the winner of the match and to spout to restart the loop.
    */
    while (playerWins < 5) || (computerWins < 5) {
         return "getInput";
    } /
    return [playerWins, computerWins];
}

