"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const selectElement = document.getElementById("lang");

selectElement.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  header.textContent = texts[selectedLang].texts.find((t) => t.location === ".header").text;
  footer.textContent = texts[selectedLang].texts.find((t) => t.location === ".footer").text;
  // Herunder en måde man kan gøre det på med forEach og if
  // texts[selectedLang].texts.forEach(obj => {
  //   if (obj.location === ".header") {
  //     header.textContent = obj.text;
  //   }
  //   if (obj.location === ".footer") {
  //     footer.textContent = obj.text;
  //   }
});

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
