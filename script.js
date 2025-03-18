function getComputerChoice() {
    return Math.floor(Math.random() *  3);
}

const computerSelection = Math.floor(getComputerChoice());

let computerChoice;

if (computerSelection === 0) {
    computerChoice = "rock";
} else if (computerSelection === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log(computerChoice);

let humanChoice;

function getHumanChoice() {
    humanChoice = prompt("rock, paper or scissors?").toLowerCase;
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

let result;
// gives result a variable which can be used to define a winner
if (humanChoice === computerChoice) {
    console.log("It's a tie!")
    result = 0;
} else if ( 
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
) {  console.log("You lose!");
    result = 1;
} else {
    console.log("You win!");
    result = 2;
}
console.log(result);

if (result === 2) {
    humanScore++;
} else if (result === 1) {
    computerScore++;
}   else {
    // No score change on tie
}

let round;

console.log(humanScore);
console.log(computerScore);