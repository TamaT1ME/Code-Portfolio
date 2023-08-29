'use strict';

/*
This project is called Guess My Number!

This game app is to help you deepen your knowledge and skills with DOM and Events.

The goal of this project is to guess a secret number which is between 1 and 20.

In the input box, the user can type a number and click Check. On the right side, the user gets a message that the guess was Too Low or Too High.

The game starts with a Score of 20 and decreases by one for each failed attempt.

When the user gets the correct number, there is a Correct number message and the screen turns green

There is a Highscore feature which keeps track of the user's high score 

The user can click the Again! button which resets everything except for the Highscore.
*/

// Generate a random secret number between 1 and 20

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

// Get the form, input, and message elements from the HTML file

const form = document.querySelector('main');
let input = document.querySelector('input');
let message = document.querySelector('.message');
let checkId = document.getElementById('check');
let number = document.querySelector('.number');

// Set the initial score and high score

let score = 20;
let highScore = 0;
let guess = '';

// Add an event listener to the button for when the user submits the guess

checkId.addEventListener('click', () => {
  // Get the user's guess from the input field

  guess = Number(input.value); // Check if the guess is correct

  if (guess === secretNumber) {
    // Display a winning message and update the score and highscore

    message.textContent = '🎉 Correct number!';
    number.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
    }
  } else {
    // Display a message indicating if the guess was too low or too high

    if (score <= 0) {
      message.textContent = '😭 Game over!';
    } else {
      if (!guess) {
        message.textContent = 'Please enter a number.';
      } else {
        score--;
        message.textContent =
          guess < secretNumber ? '📉 Too low!' : '📈 Too high!';
      }
    }
  }
  // Update the score and highscore displays in the HTML file

  form.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  form.querySelector(
    '.label-highscore'
  ).textContent = `🥇 Highscore: ${highScore}`;
});

// If user clicks again! button, it will update the previous text and background

const againId = document.getElementById('again');

againId.addEventListener('click', () => {
  score = 20;
  document.body.style.backgroundColor = '#13156d';

  form.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  form.querySelector(
    '.label-highscore'
  ).textContent = `🥇 Highscore: ${highScore}`;

  message.textContent = 'Start guessing...';
  number.textContent = '?';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
});
