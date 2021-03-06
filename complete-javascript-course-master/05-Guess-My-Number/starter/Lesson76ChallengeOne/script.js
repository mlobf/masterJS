'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '20';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
test;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let myScore = 20;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  console.log('Clicked!!!!');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number !!!';
    myScore--;
    document.querySelector('.score').textContent = myScore;

    // When guess number is greater then secret number
  } else if (guess > secretNumber) {
    if (myScore > 1) {
      document.querySelector('.message').textContent = 'Your number is higher ';
      myScore--;
      document.querySelector('.score').textContent = myScore;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !!!';
      document.querySelector('.score').textContent = 0;
    }
    // When guess number is lower than secret number
  } else if (guess < secretNumber) {
    if (myScore > 1) {
      document.querySelector('.message').textContent = 'Your number is lower !';
      myScore--;
      document.querySelector('.score').textContent = myScore;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !!!';
      document.querySelector('.score').textContent = 0;
    }
    // When the player guess the secret number.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});
