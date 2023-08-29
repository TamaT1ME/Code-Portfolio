'use strict';

/*
This game app is to reinforce your knowledge and skills with DOM and Events.

Demo:  https://pig-game-v2.netlify.app/

This is a two player game.

The current Player rolls the dice, an image of a random die face is shown, and the value on the die is added to the player's current score

which is shown by the number in the 'CURRENT' box.

The player may roll as many times as they choose.

Whenever the player rolls a one, the player's current score is reset to 

zero and the game play passes to the other player.

This is the motivation for a player selecting "HOLD". 

When the player selects "HOLD", the current score is added to the total score

which is shown as a large number under 'PLAYER 1' or 'PLAYER 2.

The current score is reset to zero.And the game passes to the other player.

The first player to reach 100 points then wins the game.

There is also a way of resetting the game. If the 'NEW GAME' button is pressed, the dice will disappear and all the scores are set back to zero.

Included in this starter is a flowchart which is a not-too-detailed

visualization of the structure of the application.

On left side of the flowchart, the yellow represents the possible 

actions that the user can take.

Flowing from each action is the representation of what happens in the application.
*/

// Element variables

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const scoreE1 = document.getElementById('score--0');
const scoreE2 = document.getElementById('score--1');
const currentE1 = document.getElementById('current--0');
const currentE2 = document.getElementById('current--1');

const diceE = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

let scores;
let currentScore;
let activePlayer;
let playing;

// Start game function

const game = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreE1.textContent = '0';
  scoreE2.textContent = '0';
  currentE1.textContent = '0';
  currentE2.textContent = '0';

  diceE.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

game();

// Switch player function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = '0';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Make dice roll with an event listener

rollDiceButton.addEventListener('click', () => {
  if (playing) {
    // Generate a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display the updated dice

    diceE.classList.remove('hidden');
    diceE.src = `dice-${dice}.png`;

    // Check for if 1 is rolled

    if (dice !== 1) {
      // Add the roll to current score

      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player

      switchPlayer();
    }
  }
});

// Add event listener for when hold is clicked

holdButton.addEventListener('click', () => {
  if (playing) {
    // Add the current score to the active player's score

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if the player's score is above 100

    if (scores[activePlayer] >= 100) {
      // If so, finish the game

      playing = false;
      diceE.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // if not, switch to the next player

      switchPlayer();
    }
  }
});

// Game initiation

newGameButton.addEventListener('click', game);
