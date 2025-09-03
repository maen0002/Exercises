const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${isUndefined(each.type)}</td>
  <td>${isUndefined(each.fuel)}</td>
  <td>${isUndefined(each.passengers)}</td> 
  <td>${isUndefined(each.stops)}</td>
  <td>${isUndefined(each.ownedBy)}</td>
  <td>${isUndefined(each.isElectric)}</td>
  <td>${isUndefined(each.isTandem)}</td>
</tr>`;
  });
}

function isUndefined(val) {
  return val ? val : "";
}

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  console.log("klik");
  const filter = this.dataset.filter;
  if (filter === "alle") {
    showTheseVehicles(vehicles);
  } else if (filter === "eldrevne") {
    showTheseVehicles(electricVehicles);
  } else if (filter === "over2") {
    showTheseVehicles(manyseater);
  } else if (filter === "eldrevneJonas") {
    showTheseVehicles(jonas);
  } else if (filter === "rugbrød") {
    showTheseVehicles(ryebread);
  }
}

const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true);
// showTheseVehicles(electricVehicles);

const manyseater = vehicles.filter((vehicle) => vehicle.passengers > 2);
// showTheseVehicles(manyseater);

const jonas = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas" && vehicle.isElectric === true);
// showTheseVehicles(jonas);

function ryebreadmore(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  }
}
const ryebread = vehicles.filter(ryebreadmore);
// showTheseVehicles(ryebread);
