/* console.log("Tilfældigt tal " + Math.floor(Math.random() * 100));
document.querySelector("#RandomNumber").innerHTML = "Tilfældigt tal " + Math.floor(Math.random() * 100);

let RandomNum = Math.floor(Math.random() * 100);
console.log(RandomNum);

const button = document.getElementById("submitGuess");
button.addEventListener("click", checkGuess);

function checkGuess() {
  document.querySelector("#Wrong").innerHTML = "";
  document.querySelector("#Correct").innerHTML = "";
  let GuessNum = document.getElementById("numberInput").value;
  GuessNum = Number(GuessNum);
  console.log(GuessNum);
  if (GuessNum === RandomNum) {
    console.log("Correct Guess!");
    document.querySelector("#Correct").innerHTML = "Du gættede rigtigt tallet var " + RandomNum;
    document.querySelector("#Correct").classList.add("winner");
  } else if (GuessNum > RandomNum) {
    console.log("Wrong Guess!");
    document.querySelector("#Wrong").innerHTML = "Du gættede forkert dit tal var for højt";
  } else {
    console.log("Wrong Guess!");
    document.querySelector("#Wrong").innerHTML = "Du gættede forkert dit tal var for lavt";
  }
}
  */

// Herunder er hvordan vi lavede den i klassen

"use strict";

import getRandomNum from "../utils/utils.js";
const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

function getRandomNum(max) {
  Math.floor(Math.random() * max);
}

const randomNum = getRandomNum(100);

btn.addEventListener("click", klik_btn);
function klik_btn() {
  let brugerGuess = input.value;
  let feedbacktext;
  console.log("Klik", randomNum);
  console.log(brugerGuess);
  if (brugerGuess < randomNum) {
    feedbacktext = "Du gættede for lavt";
  } else if (brugerGuess > randomNum) {
    feedbacktext = "Du gættede for højt";
  } else {
    feedbacktext = "Du gættede rigtigt";
  }
  h2.textContent = feedbacktext;
}
