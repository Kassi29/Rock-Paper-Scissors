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
    case null:
      userChoice = null;
      break;
    default:
      userChoice = "Invalid option";
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

function start() {
  user = userPlay();
  if (user !== null) {
    if (user === "Invalid option") {
      alert("Invalid option");
      start();
    }
    initialMessages();
    game();
    bucle();
    winnercont(contComputer, contUser);
  } else {
    console.log("The game has finished before");
  }
}

function bucle() {
  while (contComputer < 3 && contUser < 3) {
    user = userPlay();
    if (user !== null) {
      console.log("+++++++++++++++++ Other round +++++++++++++++++");
      if (user === "Invalid option") {
        alert("Invalid option");
        bucle();
      }
      game();
    } else {
      console.log("The game has finished before");
      break;
    }
  }
}
function initialMessages() {
  console.log("Welcome to Rock, Paper, Scissors game");
  console.log("The first player who wins 3 rounds is the winner");
  console.log("First round");
}

function winnercont(contComputer, contUser) {
  console.log("///// Final Result /////");
  if (contComputer > contUser) {
    console.log("Computer wins!!!");
  } else if (contComputer < contUser) {
    console.log("User wins!!!");
  } else {
    console.log("It's a draw!!!");
    console.log("Computer: " + contComputer + " - User: " + contUser);
  }
}

start();
