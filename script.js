console.log("Hello, World!");

const options = ["rock", "papper", "scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function userPlay() {
  let userChoice = prompt("Choose rock, paper or scissors");
  return userChoice;
}

function rules(computer, user) {
  const point_1 = "computer";
  const point_2 = "user";
  if (computer === "rock" && user === "paper") {
    return point_1;
  } else if (computer === "rock" && user === "scissors") {
    return point_2;
  } else if (computer === "paper" && user === "rock") {
    return point_1;
  } else if (computer === "paper" && user === "scissors") {
    return point_2;
  } else if (computer === "scissors" && user === "rock") {
    return point_2;
  } else if (computer === "scissors" && user === "paper") {
    return point_1;
  } else {
    return "draw";
  }
}

console.log(rules("rock", "paper"));
console.log(rules("paper", "paper"));
console.log(rules("paper", "scissors"));
