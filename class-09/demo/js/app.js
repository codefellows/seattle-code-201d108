'use strict';

let formElement = document.getElementById('pokemon-form');
// console.log('HERE IS THE FORM ELEMENT', formElement);

const pokedex = [];

function Pokemon(name, hp, ap) {
  this.name = name;
  this.attackPoints = ap;
  this.healthPoints = hp;
}
Pokemon.prototype.render = function() {
  let pokedex = document.getElementById('pokedex');
  let nameElement = document.createElement('h2');
  nameElement.textContent = this.name;
  let hpElement = document.createElement('p');
  hpElement.textContent = this.healthPoints;
  let apElement = document.createElement('p');
  apElement.textContent = this.attackPoints;
  pokedex.appendChild(nameElement);
  pokedex.appendChild(apElement);
  pokedex.appendChild(hpElement);
}

// this method is assigned to an HTML element, when the event is trigger, we get an event object
formElement.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  console.log('HERE IS THE SUBMIT EVENT', event.target); // target is the HTML element that triggered the event.
  let name = event.target.name.value;
  let hp = event.target.hp.value;
  let ap = event.target.ap.value;
  // use parseInt to turn numbers as strings into actual numbers
  let pokemon = new Pokemon(name, parseInt(hp), parseInt(ap));
  pokedex.push(pokemon);
  pokemon.render();
}

