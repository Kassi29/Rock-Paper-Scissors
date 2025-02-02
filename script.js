const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;
let computer, userChoice;
let result;

const results = document.querySelector("#results");
const puntation = document.querySelector("#puntation");
const btnRestart = document.querySelector("#restart");
const all = document.getElementById("all");
const winner = document.getElementById("winner");

btnRestart.addEventListener("click", () => {
  computerScore = 0;
  humanScore = 0;
  puntation.textContent = `0 : 0`;
  clearMessages();
  all.style.display = "block";
  winner.textContent = "";
});

const btnGame = document.querySelector("#buttons");

btnGame.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "papper":
      userChoice = "paper";
      break;
    case "rock":
      userChoice = "rock";
      break;
    case "scissors":
      userChoice = "scissors";
      break;
  }
  game();
});

function computerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(computer, userChoice) {
  if (computer === userChoice) {
    return userChoice;
  }

  if (
    (computer === "rock" && userChoice === "paper") ||
    (computer === "paper" && userChoice === "scissors") ||
    (computer === "scissors" && userChoice === "rock")
  ) {
    return "User";
  }

  return "Computer";
}

function game() {
  clearMessages();

  computer = computerChoice();
  result = playRound(computer, userChoice);

  if (result === "Computer") {
    messages(computer, userChoice, result);
    computerScore++;
  } else if (result === "User") {
    messages(computer, userChoice, result);
    humanScore++;
  } else {
    const icon = document.createElement("i");

    icon.classList.add(...getIconClass(result).split(" "));
    results.textContent = `It's a draw!! Both choose:`;
    results.appendChild(icon);
  }
  puntation.textContent = `${computerScore} : ${humanScore}`;

  checkWinner();
}

function checkWinner() {
  if (computerScore >= 3) {
    all.style.display = "none";
    winner.textContent = `COMPUTER WINS :(`;
    setTimeout(() => {
      btnRestart.click();
    }, 4000);
  } else if (humanScore >= 3) {
    all.style.display = "none";

    winner.textContent = `YOU WIN :)`;
    setTimeout(() => {
      btnRestart.click();
    }, 4000);
  }
}

function messages(computer, user, result) {
  const line1 = document.createElement("span");
  const line2 = document.createElement("span");
  const line3 = document.createElement("span");

  const compIcon = document.createElement("i");
  const userIcon = document.createElement("i");

  compIcon.classList.add(...getIconClass(computer).split(" "));
  userIcon.classList.add(...getIconClass(user).split(" "));

  line1.textContent = `Computer: `;
  line1.appendChild(compIcon);
  line2.textContent = `You:`;
  line2.appendChild(userIcon);
  line3.textContent = `${result} wins this round`;

  results.appendChild(line1);
  results.appendChild(line2);
  results.appendChild(line3);
}

function getIconClass(choice) {
  switch (choice) {
    case "rock":
      return "fas fa-hand-rock";
    case "paper":
      return "fas fa-hand-paper";
    case "scissors":
      return "fas fa-hand-scissors";
  }
}
function clearMessages() {
  results.textContent = "";
}
