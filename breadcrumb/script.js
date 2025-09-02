const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const list = document.querySelector("ul");

document.querySelector("button").addEventListener("click", klik);
list.style.setProperty("display", "flex");

list.style.setProperty("list-style-type", "none");

function klik() {
  let str = "";

  bc.forEach((elm, i) => {
    if (i === bc.length - 1) {
      str += `<li>${elm.name}</li>`;
    } else str += `<li><a href="">${elm.name}</a>&nbsp;/&nbsp;</li>`;
  });

  list.innerHTML = str;

  //   const last = bc[bc.length - 1];
  //   list.lastElementChild.innerHTML = `<li>${last.name}</li>`;
}
