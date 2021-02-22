'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Implement the Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1 Generation Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2 Display the Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // 3 Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score.
    currentScore += dice;
    current0el.textContent = currentScore; // Change Later
  } else {
    // Switch to next player
    currentScore = 0;
  }
});
