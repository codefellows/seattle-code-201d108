'use strict';

let formElement = document.getElementById('pokemon-form');

// this method is assigned to an HTML element, when the event is trigger, we get an event object
formElement.addEventListener('submit', sayName);

function sayName(event) {
  event.preventDefault();
  console.log('HERE IS THE SUBMIT EVENT', event);
  console.log('Banana!!!!');
}

