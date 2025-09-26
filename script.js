
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

const rock = document.createElement("button");
rock.textContent = "Rock";
document.body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
document.body.appendChild(paper);

const scissors = document.createElement("button")
scissors.textContent = "Scissors";
document.body.appendChild(scissors);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        
        return button.textContent;


    });
});

let buttonClicked = buttons.textContent

document.getElementById(buttons).onclick = playRound(buttonClicked, computerChoice) {};


gameOver();



