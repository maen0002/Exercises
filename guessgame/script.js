const startBtn = document.getElementById("start");
const lowBtn = document.getElementById("low");
const highBtn = document.getElementById("high");
const correctBtn = document.getElementById("correct");

const tekst = document.getElementById("ComputerTekst");

startBtn.addEventListener("click", gameStart);

let guess = 50;
let lower = 0;
let upper = 100;
let guesses = 1;

function gameStart() {
  guess = 50;
  lower = 0;
  upper = 100;
  guesses = 1;
  console.log("StartSpillet");
  tekst.innerHTML = `Jeg gætter på ${guess}`;
  startBtn.classList.add("disabled");
  startBtn.removeEventListener("click", gameStart);
  lowBtn.addEventListener("click", tooLow);
  highBtn.addEventListener("click", tooHigh);
  correctBtn.addEventListener("click", correct);
}

function findMedian(number1, number2) {
  return `${(number1 + number2) / 2}`;
}

function tooLow() {
  lower = guess;
  const median = findMedian(lower, upper);
  guess = Math.floor(median);
  tekst.innerHTML = `Jeg gætter på ${guess}`;
  guesses++;
  console.log(guesses);
}

function tooHigh() {
  upper = guess;
  const median = findMedian(lower, upper);
  guess = Math.floor(median);
  tekst.innerHTML = `Jeg gætter på ${guess}`;
  guesses++;
  console.log(guesses);
}

function correct() {
  tekst.innerHTML = `Jeg gættede rigtigt tallet var ${guess} og det tog kun ${guesses} forsøg`;
  startBtn.classList.remove("disabled");
  startBtn.addEventListener("click", gameStart);
}
