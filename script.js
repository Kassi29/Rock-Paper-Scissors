const options = ["rock", "paper", "scissors"];
let contComputer = 0;
let contUser = 0;
let computer;
let user;
let result;

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function userPlay() {
  let userChoice = prompt("Choose rock (1), paper (2) or scissors (3)");
  switch (userChoice) {
    case "1":
      userChoice = "rock";
      break;
    case "2":
      userChoice = "paper";
      break;
    case "3":
      userChoice = "scissors";
      break;
  }
  return userChoice;
}

function rules(computer, user) {
  const point_1 = "Computer";
  const point_2 = "User";

  if (computer === "rock" && user === "paper") {
    return point_2;
  } else if (computer === "rock" && user === "scissors") {
    return point_1;
  } else if (computer === "paper" && user == "rock") {
    return point_1;
  } else if (computer === "paper" && user == "scissors") {
    return point_2;
  } else if (computer === "scissors" && user === "paper") {
    return point_1;
  } else if (computer === "scissors" && user === "rock") {
    return point_2;
  } else {
    return computer;
  }
}

function game() {
  computer = computerPlay();
  result = rules(computer, user);

  if (result === "Computer") {
    messages(computer, user, result);
    contComputer++;
  } else if (result === "User") {
    messages(computer, user, result);
    contUser++;
  } else {
    console.log("It's a draw");
    console.log(`Both choose: ${result}`);
  }
  console.log(`Puntuation: Computer ${contComputer} - User ${contUser}`);
}
function messages(computer, user, result) {
  console.log(`Computer choose: ${computer}`);
  console.log(`User choose: ${user}`);
  console.log(`${result} wins this round`);
}
