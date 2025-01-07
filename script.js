console.log("Hello, World!");

const options = ["rock", "papper", "scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function userPlay() {
  let userChoice = prompt("Choose rock (1), paper (2) or scissors (3)");
  return userChoice;
}

function rules(computer, user) {
  const point_1 = "Computer";
  const point_2 = "User";
  if (computer === "rock" && user === 2) {
    return point_2;
  } else if (computer === "rock" && user === 3) {
    return point_1;
  } else if (computer === "paper" && user === 1) {
    return point_1;
  } else if (computer === "paper" && user === 3) {
    return point_2;
  } else if (computer === "scissors" && user === 2) {
    return point_1;
  } else if (computer === "scissors" && user === 1) {
    return point_2;
  } else {
    return computer;
  }
}
