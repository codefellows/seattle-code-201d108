// This is our for loop
for (let i = 0; i < 6; i++) {
  document.write('I have been repeated!!');
}

// more flexible, runs while a single condition is "truthy"
while (0) {
  console.log('while loop running');
}

let score = 0;
let questions = [
  'Do I like plants?',
  'Do I like Sushi?',
  'What\'s my favorite color?',
  'What\'s my favorite movie?',
];
let answers = [
  'no',
  'yes',
  'red',
  'Saving Private Ryan'
];

// for (let i = 0; i < questions.length; i++) {
//   let userAnswer = prompt(questions[i]);
//   if (userAnswer === answers[i]) {
//     alert('yay! you got it right');
//     score++;
//   } else {
//     alert('Sorry, no correct :(');
//   }
// }

// if (score >= 3) {
//   alert('Great job! You got ' + score + ' correct.');
// } else {
//   alert('So sorry, you only got ' + score + ' correct');
// }

// maybe nest this in a loop??
// comparing numbers
let userNumberGuess = prompt('Guess the correct number?');
let correctNumber = 10;

if (userNumberGuess > correctNumber) {
  alert('You are too high');
} else if (userNumberGuess < correctNumber) {
  alert('You are too low');
} else {
  alert('You are correct');
}

let multipleAnswerResponse = prompt('What is one of my favorite foods?');
let correctAnswers = ['mac and cheese', 'fried chicken', 'sushi', 'pizza', 'fried pickles'];

for (let i = 0; i < correctAnswers.length; i++) {
  if (multipleAnswerResponse === correctAnswers[i]) {
    alert('you got it right!!!');
  } else {
    alert('Try Again');
  }
}
