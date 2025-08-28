// const rock_btn = document.querySelector(".rock");
// const paper_btn = document.querySelector(".paper");
// const scissors_btn = document.querySelector(".scissors");
// const player1 = document.getElementById("player1");
// const player2 = document.getElementById("player2");
// const draw = document.getElementById("draw");
// const win = document.getElementById("win");
// const lose = document.getElementById("lose");

// rock_btn.addEventListener("click", chooseRock);
// scissors_btn.addEventListener("click", chooseScissors);
// paper_btn.addEventListener("click", choosePaper);

// function chooseRock() {
//   player1.classList = "player";
//   player2.classList = "player";
//   lose.classList.add("hidden");
//   win.classList.add("hidden");
//   draw.classList.add("hidden");
//   let computerChoice = Math.floor(Math.random() * 3) + 1;
//   console.log(computerChoice);
//   console.log("You chose rock");
//   player1.classList.add("shake");
//   player2.classList.add("shake");
//   player1.addEventListener("animationend", () => {
//     player1.classList.remove("shake");
//     player2.classList.remove("shake");
//     player1.classList.add("rock");

//     if (computerChoice === 1) {
//       player2.classList.add("rock");
//       draw.classList.remove("hidden");
//     } else if (computerChoice === 2) {
//       player2.classList.add("scissors");
//       win.classList.remove("hidden");
//     } else {
//       player2.classList.add("paper");
//       lose.classList.remove("hidden");
//     }
//   });
// }

// function chooseScissors() {
//   const computerChoice = Math.floor(Math.random() * 3) + 1;
//   console.log(computerChoice);
//   console.log("You chose scissors");
//   player1.classList.add("shake");
//   player2.classList.add("shake");
//   player1.addEventListener("animationend", () => {
//     player1.classList.remove("shake");
//     player2.classList.remove("shake");
//     player1.classList.add("scissors");

//     if (computerChoice === 1) {
//       player2.classList.add("rock");
//       lose.classList.remove("hidden");
//     } else if (computerChoice === 2) {
//       player2.classList.add("scissors");
//       draw.classList.remove("hidden");
//     } else {
//       player2.classList.add("paper");
//       win.classList.remove("hidden");
//     }
//   });
// }

// function choosePaper() {
//   const computerChoice = Math.floor(Math.random() * 3) + 1;
//   console.log(computerChoice);
//   console.log("You chose paper");
//   player1.classList.add("shake");
//   player2.classList.add("shake");
//   player1.addEventListener("animationend", () => {
//     player1.classList.remove("shake");
//     player2.classList.remove("shake");
//     player1.classList.add("paper");

//     if (computerChoice === 1) {
//       player2.classList.add("rock");
//       win.classList.remove("hidden");
//     } else if (computerChoice === 2) {
//       player2.classList.add("scissors");
//       lose.classList.remove("hidden");
//     } else {
//       player2.classList.add("paper");
//       draw.classList.remove("hidden");
//     }
//   });
// }

// Herunder er eventlisteneren på animationend tilføjet ude fra selve funktionen

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const draw = document.getElementById("draw");
const win = document.getElementById("win");
const lose = document.getElementById("lose");

rock_btn.addEventListener("click", () => startGame("rock"));
scissors_btn.addEventListener("click", () => startGame("scissors"));
paper_btn.addEventListener("click", () => startGame("paper"));

function startGame(choice) {
  player1.className = "player";
  player2.className = "player";
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");

  playerChoice = choice;
  computerChoice = Math.floor(Math.random() * 3) + 1;

  player1.classList.add("shake");
  player2.classList.add("shake");
}

// Tilføjer kun denne eventlistener en gang fordi den står for sig selv
player1.addEventListener("animationend", () => {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  // Viser player1's choice
  player1.classList.remove("rock", "paper", "scissors");
  player1.classList.add(playerChoice);

  // Viser computer's choice og viser resultatet
  player2.classList.remove("rock", "paper", "scissors");
  if (playerChoice === "rock") {
    if (computerChoice === 1) {
      player2.classList.add("rock");
      draw.classList.remove("hidden");
    } else if (computerChoice === 2) {
      player2.classList.add("scissors");
      win.classList.remove("hidden");
    } else {
      player2.classList.add("paper");
      lose.classList.remove("hidden");
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === 1) {
      player2.classList.add("rock");
      lose.classList.remove("hidden");
    } else if (computerChoice === 2) {
      player2.classList.add("scissors");
      draw.classList.remove("hidden");
    } else {
      player2.classList.add("paper");
      win.classList.remove("hidden");
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === 1) {
      player2.classList.add("rock");
      win.classList.remove("hidden");
    } else if (computerChoice === 2) {
      player2.classList.add("scissors");
      lose.classList.remove("hidden");
    } else {
      player2.classList.add("paper");
      draw.classList.remove("hidden");
    }
  }
});
