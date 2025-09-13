loadJSON();

setInterval(loadJSON, 5000);

async function loadJSON() {
  const url = "https://kea-alt-del.dk/kata-distortion/";
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData.inQueue);
  showData(jsonData);
}

function showData(jsonData) {
  const show = document.getElementById("num");
  show.innerHTML = jsonData.inQueue;
}
