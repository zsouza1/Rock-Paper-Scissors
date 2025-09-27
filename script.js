
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    else if (random === 1) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        scoreboardMessage.textContent = `Computer also picked ${computerChoice}, it's a tie!`;
        ;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        scoreboardMessage.textContent = `Computer picks ${computerChoice}, you win!`;
        humanScore++;
    } else {
        scoreboardMessage.textContent = `Computer picks ${computerChoice}, you lose!`
        computerScore++;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log("-----------------------------------");

    checkGameOver();
}

function checkGameOver() {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            scoreboardMessage.textContent = "Game over, you win!";
        } else {
            scoreboardMessage.textContent = "Game over, you lose!";
        }

        buttons.forEach((button) => {
            button.disabled = true;
        });

        const reset = document.createElement("button");
        reset.textContent = "Play Again?";
        reset.style.padding = "20px";
        reset.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            humanScoreDisplay.textContent = humanScore;
            computerScoreDisplay.textContent = computerScore;
            scoreboardMessage.textContent = "Let's play!";
            buttons.forEach((button) => {
                button.disabled = false;
            });
            reset.remove(); // remove reset button after restarting
        });
        scoreboardArea.appendChild(reset);
    }
}    
//Begin styling via the DOM
const header = document.createElement("div");
document.body.appendChild(header);
header.textContent = "Rock Paper Scissors"
const headerStyle = {
    textAlign: "center",
    fontSize: "40px",
    background: "lightgrey",
    padding: "20px",
};
Object.assign(header.style, headerStyle);


const div = document.createElement("div");
document.body.appendChild(div);

const choices = document.createElement("div");
div.appendChild(choices);
const choicesStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: "lightgrey"
};
Object.assign(choices.style, choicesStyle);

const rockBox = document.createElement("div");
choices.appendChild(rockBox);
rockBox.style.padding = "20px";

const paperBox = document.createElement("div");
choices.appendChild(paperBox);
paperBox.style.padding = "20px";

const scissorsBox = document.createElement("div");
choices.appendChild(scissorsBox);
scissorsBox.style.padding = "20px";

//Create buttons and group into "buttons" variable for condensed event listeners
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
    button.style.padding = "20px"
    button.style.fontSize = "20px"
    button.addEventListener("click", () =>{
        playRound(button.textContent.toLowerCase(), getComputerChoice());


    });
});

const scoreboardArea = document.createElement("div");
document.body.appendChild(scoreboardArea);
scoreboardArea.style.padding = "20px";
scoreboardArea.style.background = "lightgrey";
scoreboardArea.style.textAlign = "center"

//Scoreboard styling
const scoreboard = document.createElement("div");
scoreboardArea.appendChild(scoreboard);
const scoreboardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
};
Object.assign(scoreboard.style, scoreboardStyle);

const humanScoreDisplay = document.createElement("div");
scoreboard.appendChild(humanScoreDisplay);
humanScoreDisplay.style.padding = "20px";
humanScoreDisplay.style.fontSize = "40px"
humanScoreDisplay.textContent = humanScore;

const scoreboardMessage = document.createElement("div");
scoreboard.appendChild(scoreboardMessage);
// temporary styling, change into object later
scoreboardMessage.style.padding = "20px";
scoreboardMessage.style.fontSize = "40px";

scoreboardMessage.textContent = "Let's play!"

const computerScoreDisplay = document.createElement("div");
scoreboard.appendChild(computerScoreDisplay);
computerScoreDisplay.style.padding = "20px";
computerScoreDisplay.style.fontSize = "40px"
computerScoreDisplay.textContent = computerScore;





document.body.style.backgroundColor = "black";