
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    else if (random === 1) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
        return result;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        humanScore++;
        return result;
    } else {
        result = "You lose!"
        computerScore++;
        return result;
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
//Begin styling via the DOM
const div = document.createElement("div");
document.body.appendChild(div);

const choices = document.createElement("div");
div.appendChild(choices);
const choicesStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: "blue"
};
Object.assign(choices.style, choicesStyle);

const rockBox = document.createElement("div");
choices.appendChild(rockBox);
rockBox.setAttribute("style", "padding: 20px; background: orange;");

const paperBox = document.createElement("div");
choices.appendChild(paperBox);
paperBox.setAttribute("style", "padding: 20px; background: green;");

const scissorsBox = document.createElement("div");
choices.appendChild(scissorsBox);
scissorsBox.setAttribute("style", "padding: 20px; background: pink;");

//Create buttons and group into buttons variable for condensed event listeners
const rock = document.createElement("button");
rock.textContent = "Rock";
rockBox.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paperBox.appendChild(paper);

const scissors = document.createElement("button")
scissors.textContent = "Scissors";
scissorsBox.appendChild(scissors);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        playRound(button.textContent.toLowerCase(), getComputerChoice());


    });
});


//Scoreboard styling
const scoreboard = document.createElement("div");
document.body.appendChild(scoreboard);
const scoreboardStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: "yellow"
};
Object.assign(scoreboard.style, scoreboardStyle);

const humanScoreDisplay = document.createElement("div");
scoreboard.appendChild(humanScoreDisplay);
humanScoreDisplay.style.padding = "20px";
humanScoreDisplay.style.backgroundColor = "cyan";
humanScoreDisplay.textContent = humanScore;

const scoreboardMessage = document.createElement("div");
scoreboard.appendChild(scoreboardMessage);
// temporary styling, change into object later
scoreboardMessage.style.padding = "20px";
scoreboardMessage.style.fontSize = "25px";
scoreboardMessage.textContent = "TEST";
scoreboardMessage.style.backgroundColor = "red";

const computerScoreDisplay = document.createElement("div");
scoreboard.appendChild(computerScoreDisplay);
computerScoreDisplay.style.padding = "20px";
computerScoreDisplay.style.backgroundColor = "white";
computerScoreDisplay.textContent = computerScore;

gameOver();



document.body.style.backgroundColor = "black";