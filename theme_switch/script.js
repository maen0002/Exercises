const selectElement = document.getElementById("theme");

selectElement.addEventListener("change", (event) => {
  const selectedTheme = event.target.value;
  console.log(selectedTheme);
  if (selectedTheme === "li") {
    document.querySelector("body").dataset.theme = "li";
  } else if (selectedTheme === "da") {
    document.querySelector("body").dataset.theme = "da";
  } else {
    document.querySelector("body").dataset.theme = "ha";
  }
});
