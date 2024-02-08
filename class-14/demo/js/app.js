'use strict';

console.log('The localStorage object', localStorage);

// constructor function -> 'this' is the object we are creating.
function Goat(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
}
// methods will not be present on object pulled from localStorage.
Goat.prototype.sayName = function () {
  console.log(this.name);
}

function saveData(data) {
  localStorage.setItem('goatData', JSON.stringify(data));
}

function fetchData() {
  return JSON.parse(localStorage.getItem('goatData'));
}

function clearData() {
  localStorage.clear();
}