'use strict';

/*

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event 
      happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
      So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average,   
      every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
      marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'], // Unfair
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
// Create an array only with the second element

//console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())]; // the ... is the spread operator.
//console.log(events);

/*
const arr = [];
for (let x of gameEvents) {
  arr.push(x);
}

const newEvents = new Set();

for (let [key, value] of arr) {
  newEvents.add(value);
}

//console.log(gameEvents.get(76));
const events = [...newEvents];

//console.log(events);
*/
/*
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
      So remove this event from the game events log.
*/
//gameEvents.delete(64);
//console.log(gameEvents);

/*
3. Print the following string to the console: "An event happened, on average,   
      every 9 minutes" (keep in mind that a game has 90 minutes)
*/

// Calculate average
// Sum of the minutes divided by len of elements
const lenElement = gameEvents.size; // Ok

const avg = 90 / lenElement;

//console.log(`An event happened, on average, every ${avg} minutes`);

//4. Loop over the events and log them to the console,
//     marking whether it's in the first half or second half (after 45 min) of the game, like this:
//    [FIRST HALF] 17: ⚽️ GOAL
/*
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${min}:${event}`);
}
*/
// My soluction

for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`At ${min} The first half and ${event}`);
  } else {
    console.log(`At ${min} The second half and ${event}`);
  }
}
