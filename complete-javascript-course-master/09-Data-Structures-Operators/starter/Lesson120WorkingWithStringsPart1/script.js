'use strict';

// Tip
// Strings are also zero index based

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('');

console.log('B737'[0]);

console.log('');

console.log(plane.length);
console.log('B737'.length);

console.log('');

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));

// Slice Method
//  -> To extract part of a string...

console.log(airline.slice(4, 10)); // All theses methods return new strings.

// Vem Nasa Vem
// Now this is how we use the real propose of .inderOf/.lastIndexOf/.slice

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-1)); // Now this is starting counting from the end. From the  last letter to the first letter. Z -> A
console.log(airline.slice(1, -1)); // Now this is beg at second letter and stops at -1 last letter

// Challenge time
// Write a function that receives an airplane seat and lock to the console
//      if is a middle seat or not.
console.log(' --------------------- ');

const checkMiddleSeat = seat => {
  // if the seat's code finish with B or E,
  //  the seat belongs to the middle seat class.
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') {
    console.log(
      `The seat number ${seat} belongs to middle seat class!!. No good view for you !!`
    );
  } else {
    console.log(
      `The seat number ${seat} do not belongs to middle seat class!!. Have a nice view for you !!`
    );
  }
};

checkMiddleSeat('12B');
//const seat = '12A';

//console.log(seat.lastIndexOf('A'));