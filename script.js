
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    else if (random === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log("-----------------------------------");
}

function gameOver() {
    if (humanScore > computerScore) {
        console.log('Game over, you win!');
    } else if (humanScore < computerScore) {
        console.log('Game over, you lose!');
    } else {
        console.log('A tie? That\'s unsatisfying...');
    }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

gameOver();
