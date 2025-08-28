"use strict";

function udregnMoms(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}

console.log(udregnMoms(500));

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Marius");
console.log(result);
