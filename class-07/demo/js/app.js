'use strict';

console.log('I am loaded');

let bodyElement = document.getElementById('table-data');

let tableRow = document.createElement('tr');
bodyElement.appendChild(tableRow);

function createCell(value, row) {
  let cell = document.createElement('td');
  cell.textContent = value;
  row.appendChild(cell);
}

function Pokemon(name, attack, health) {
  this.name = name;
  this.attack = attack;
  this.health = health;
  this.row = document.createElement('tr');
}
Pokemon.prototype.level = 1;
// add methods to 
Pokemon.prototype.levelUp = function () {
  this.level++;
}
Pokemon.prototype.drawRow = function() {
  createCell(this.name, this.row);
  createCell(this.level, this.row);
  createCell(this.health, this.row);
  createCell(this.attack, this.row);
  bodyElement.appendChild(this.row);
}

let charizard = new Pokemon('Charizard', 100, 100);
charizard.levelUp();
charizard.levelUp();
charizard.drawRow();

let bulbasaur = new Pokemon('Bulbasaur', 30, 25);
bulbasaur.levelUp();
bulbasaur.drawRow();
let pikachu = {
  name: 'Pikachu',
  level: 20,
  attackPoints: 20,
  healthPoints: 10,
}
console.log(charizard, pikachu);

let tableCell1 = document.createElement('td');
tableRow.appendChild(tableCell1); // don't forget to append your elements to the document.
tableCell1.textContent = 'Pikachu';

// createCell('1');
// createCell('10');
// createCell('20');

let tableCell2 = document.createElement('td');
tableCell2.textContent = '1';
tableRow.appendChild(tableCell2);

let tableCell3 = document.createElement('td');
tableCell3.textContent = '10';
tableRow.appendChild(tableCell3);

let tableCell4 = document.createElement('td');
tableCell4.textContent = '20';
tableRow.appendChild(tableCell4);
