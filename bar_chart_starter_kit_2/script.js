const list = document.querySelector("ul");

const barArr = [];

setInterval(generateBars, 500);

function generateBars() {
  barArr.push(Math.round(Math.random() * 100));

  if (barArr.length > 6) {
    barArr.shift();
  }
  render();
}

function render() {
  document.querySelectorAll("li").forEach((elm, i) => {
    console.log("i", i);
    elm.style.setProperty("--height", barArr[i]);
  });
}
