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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let myScore = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number !!!';
    myScore--;
    document.querySelector('.score').textContent = myScore;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!!';

  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Your number is higher ';
    myScore--;
    document.querySelector('.score').textContent = myScore;

  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Your number is lower !';
    myScore--;
    document.querySelector('.score').textContent = myScore;
  }
});
