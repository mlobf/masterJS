'use strict';
const weekDays = ['Sun', 'Mon', 'Thu', 'Wed', 'Qui', 'Fri', 'Sat'];

const openHours = {
  [weekDays[0]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[6]]: {
    open: 0,
    close: 24,
  },
};

const question = new Map([
  ['Question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', '3'],
  [true, 'Correct'],
  [false, 'Try again'],
]);

//console.log(question);

// Easy way to convert Object to Map
//const hourMap = new Map(Object.entries(openHours));
//console.log(hourMap);
// Quiz App
// Iteration on Maps
/*
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}
*/
const answer = Number(prompt('Your answer is ...'));
if (answer === 3) {
  console.log('You Win');
} else {
  console.log('You Lose');
}
//console.log(question.get(question.get(3) === answer));

// Convert Map to Array
console.log([...question]);
console.log(question.entries()); // Keys and Values
console.log(question.keys()); // Only Keys
console.log(question.values()); // Only Values
