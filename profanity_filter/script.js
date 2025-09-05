const btn = document.getElementById("SFW");

const text = document.querySelector("p");

const cursewords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

btn.addEventListener("click", proFilter);

const word = "const";
const dialog = document.querySelector(".dialog");

function proFilter() {
  if (text.textContent.includes(word)) {
    dialog.innerHTML = `<dialog open> <p>Det er allerede safe for work</p> <form method="dialog"> <button class="ok_btn">OK</button> </form> </dialog>`;
    btn.classList.add("disable");
    document.querySelector(".ok_btn").addEventListener("click", enable);
  } else {
    let filtered = text.textContent;
    cursewords.forEach((word) => {
      const replacement = `<span class="highlight">${word.good}</span>`;
      filtered = filtered.replaceAll(word.bad, replacement);
    });
    text.innerHTML = filtered;
  }
}

function enable() {
  btn.classList.remove("disable");
}
