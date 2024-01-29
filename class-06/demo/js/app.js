'use strict';

console.log('I am loaded');

// property: a key in an object that stores a data type.
let pikachu = {
  name: 'Pikachu',
  healthPoints: 10,
  attackPoints: 10,
  level: 1,
  abilities: ['Thunder', 'Quick Attack'],
  levelUp: function() {
    console.log('Pikachu has leveled up!!');
    this.level++;
    this.addHealth();
  },
  addHealth: function() {
    this.healthPoints++;
    console.log('Pikachu has more health!!');
  }
}
pikachu.levelUp(); // invoking/calling a method;

let charizard = {
  name: 'Charizard',
  healthPoints: 20,
  attackPoints: 20,
  level: 50,
  abilities: ['Fire Breath', 'Body Slam'],
  levelUp: function () {
    console.log(`${this.name} has leveled up!!`);
    this.level++;
    this.addHealth();
  },
  addHealth: function () {
    this.healthPoints++;
    console.log(`${this.name} has more health!!`);
  }
};
charizard.levelUp();

// console.log('Here are my pokemon!!', pikachu, charizard);

// document.write(pikachu.name); // DOM method for adding text to the HTML.

// READ what elements currently exist!
let pokedex = document.getElementById('pokedex');
console.log(pokedex);

// Write new HTML elements with JS!!!
let pikachuName = document.createElement('h2');
console.log(pikachuName);
let pikachuLevel = document.createElement('p');

let charizardName = document.createElement('h2');
let charizardLevel = document.createElement('p');

// UPDATE my new HTML element with my pokemon values
pikachuName.textContent = 'Name: ' + pikachu.name;
pikachuLevel.textContent = 'Level: ' + pikachu.level;
pokedex.appendChild(pikachuName);
pokedex.appendChild(pikachuLevel);

charizardName.textContent = 'Name: ' + charizard.name;
charizardLevel.textContent = 'Level: ' + charizard.level;
pokedex.appendChild(charizardName);
pokedex.appendChild(charizardLevel);