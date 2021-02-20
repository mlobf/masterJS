'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let myScore = 20;
let myHighScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// When the button Again is clicked
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //myScore = 0;

  console.log('Clicked!!!!');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// When the button Check is selected
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input number
  if (!guess) {
    displayMessage('No number input');
    myScore--;
    document.querySelector('.score').textContent = myScore;
  } else if (guess !== secretNumber) {
    if (myScore > 1) {
      displayMessage(
        guess > secretNumber ? 'Your number is higher' : 'Your number is lower'
      );
      myScore--;
      document.querySelector('.score').textContent = myScore;
    } else {
      displayMessage('You lost the game !!!');
      document.querySelector('.score').textContent = 0;
    }
    // When the player guess the secret number.
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Add the high score
    if (myScore > myHighScore) {
      myHighScore = myScore;
      document.querySelector('.highscore').textContent = myHighScore;
    }
  }
});
