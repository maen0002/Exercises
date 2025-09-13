const timer = document.getElementById("timer");

timer.addEventListener("animationend", timerDone);

function timerDone() {
  console.log("timer er færdig");
  document.getElementById("background").style.setProperty("background-color", "white");
}

document.addEventListener("mousemove", () => {
  console.log("end");
  timer.removeEventListener("animationend", timerDone);
  timer.style.setProperty("animation", "timeout 0s");
});

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  document.getElementById("background").style.setProperty("background-color", "white");
});
