document.addEventListener("mousemove", change);
const body = document.querySelector("body");

function change(mouse) {
  console.log(window.innerHeight);
  const color = Math.round((mouse.clientY / window.innerHeight) * 255);
  const newBgColor = `rgb(${color}, ${color}, ${color})`;
  body.style.setProperty("background-color", newBgColor);
}
