'use strict';

console.log('I am loaded!!');

let ducks = []; // create an empty array
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let totalRounds = 5;
let currentRound = 0;

// constructor function -> 'this' is the object we are creating.
function Duck(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
}

let odd1 = new Duck('img/bag.jpg', 'bag');
let odd2 = new Duck('img/banana.jpg', 'banana');
let odd3 = new Duck('img/boots.jpg', 'boots');
let odd4 = new Duck('img/breakfast.jpg', 'Breakfast');
let odd5 = new Duck('img/bubblegum.jpg', 'gum');
let odd6 = new Duck('img/cthulhu.jpg', 'green vampire');
let odd7 = new Duck('img/dog-duck.jpg', 'duck-dog');
let odd8 = new Duck('img/dragon.jpg', 'dragon');
let odd9 = new Duck('img/pen.jpg', 'pen');
let odd10 = new Duck('img/pet-sweep.jpg', 'pet');
let odd11 = new Duck('img/scissors.jpg', 'pizza scissors');
let odd12 = new Duck('img/shark.jpg', 'shark');
let odd13 = new Duck('img/sweep.png', 'sweep');
let odd14 = new Duck('img/tauntaun.jpg', 'taun');
let odd15 = new Duck('img/unicorn.jpg', 'uni');
let odd16 = new Duck('img/water-can.jpg', 'watercan');
let odd17 = new Duck('img/wine-glass.jpg', 'wine');

ducks.push(odd1, odd2, odd3, odd4, odd5, odd6, odd7, odd8, odd9, odd10, odd11, odd12, odd13, odd14, odd15, odd16, odd17);

function renderImage(image, duck) {
  image.setAttribute('src', duck.url);
  image.setAttribute('alt', duck.name);
  duck.timesShown++;
}

// setting the src attribute for all our image elements
renderImage(image1, odd1);
renderImage(image2, odd2);
renderImage(image3, odd3);

console.log(ducks);


// add an event listener that runs some code when a goat picture is clicked.
let oddImages = document.getElementById('odd');

// when might you remove the event listener from the OddImages HTML element
// oddImages.removeEventListener()

let handleClick = function (event) {
  event.preventDefault();
  console.log(event.target.alt); // event.target -> whatever element was interacted with.

  // add 1 to number of clicks
  // search our array of ducks for the goat object that matched the alt
  findDuck(event.target.alt);

  // show 2 different images after a picture is clicked.
  renderNewDucks();
  currentRound = roundCount(totalRounds, currentRound);
}
oddImages.addEventListener('click', handleClick);

function roundCount(total, current) {
  if (current < total) {
    current++;
  } else {
    oddImages.removeEventListener('click', handleClick);
    // render the voting results.
    console.log('HERE IS THE DATA!!', ducks);
    showResults();  
    alert('Voting Complete!!');
  }
  return current;
}

function showResults() {
  let list = document.getElementById('results-list');
  for (let i = 0; i < ducks.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `${ducks[i].name} had ${ducks[i].clicks} votes, and was seen ${ducks[i].timesShown} times.`
    list.appendChild(paragraph);
  }
}

function findDuck(alt) {
  for (let i =0; i< ducks.length; i++) {
    if (ducks[i].name === alt) {
      ducks[i].clicks++;
    }
  }
  console.log(ducks);
}

function renderNewDucks() {
  // generate a random index between 0 and the length of our ducks array
  let index1 = Math.floor(Math.random() * ducks.length);
  let index2 = Math.floor(Math.random() * ducks.length);
  let index3 = Math.floor(Math.random() * ducks.length);
  // we add another index for our 3rd image.
  while(index1 === index2 || index1 === index3 || index2 === index3) {
    index1 = Math.floor(Math.random() * ducks.length);
    index2 = Math.floor(Math.random() * ducks.length);
    index3 = Math.floor(Math.random() * ducks.length);
  }
  let randomDuck1 = ducks[index1];
  let randomDuck2 = ducks[index2];
  let randomDuck3 = ducks[index3];
  
  // render the goat onto the page / add the name
  renderImage(image1, randomDuck1);
  renderImage(image2, randomDuck2);
  renderImage(image3, randomDuck3);
}
