'use strict'; // Why????? keeps us in strict mode, prevents us from cutting corners

// global scope - accessible everywhere
let name = 'Jacob';

function banana() {
  // function scope - only accessible within the function.
  let functionName = 'Steve';
  console.log(functionName);
}
console.log(name);
banana();

// declare a function!!!
function charizard(ability) {
  console.log(ability);
}

// invocation! - using the function, must have the parens at the end.
charizard('I breathe fire');
charizard('I breathe lava');

// parameters / arguments
function askQuestion(question, answer) { // parameter - variable defined in declaration.
  let response = prompt(question);
  if (response == answer) {
    alert('You are correct!');
    return true;
  } else {
    alert('You are wrong :(');
    return false;
  }
}

let correct1 = askQuestion('How old am I?', 34); // argument - value passed into invocation
let correct2 = askQuestion('What is my favorite pizza topping', 'pepperoni');
if (correct1) {
  console.log('you get a point!');
}
if (correct2) {
  console.log('you get another point');
}