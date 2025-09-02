import getRandomNum from "../utils/utils.js";

const list = document.querySelector("ul");

setInterval(generateStat, 1000);

const stats = [];

function generateStat() {
  console.log("generateStat");

  const li = document.createElement("li");
  const randomNum = getRandomNum(100);
  stats.push(randomNum);
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);
  console.log(stats);

  if (stats.length > 20) {
    stats.shift();
    list.removeChild(list.firstElementChild);
  }
}
