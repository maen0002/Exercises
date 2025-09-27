document.getElementById("cv_button").addEventListener("click", popUp);
const cv = document.getElementById("cv");

function popUp() {
  cv.style.setProperty("display", "block");
  setTimeout(() => {
    document.querySelectorAll("body > *:not(#cv)").forEach((elm) => {
      elm.addEventListener("click", closePopUp);
    });
  }, 100);
}

document.querySelector(".X").addEventListener("click", closePopUp);

function closePopUp() {
  cv.style.setProperty("display", "none");
  document.querySelectorAll("body > *:not(#cv)").forEach((elm) => {
    elm.removeEventListener("click", closePopUp);
  });
}
