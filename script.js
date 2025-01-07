const options = ["rock", "paper", "scissors"];

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
