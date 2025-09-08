const btn = document.querySelector("button");

btn.addEventListener("click", changeColor);

function changeColor() {
  if (document.querySelector("h1").dataset.filter === "bat") {
    document.querySelector("h1").dataset.filter = "fox";
  } else {
    document.querySelector("h1").dataset.filter = "bat";
  }
}
