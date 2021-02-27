'use strict';

// Primitives Types
let lastName = ' Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Objects Types
/*
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
*/

/*
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
*/

//marriedJessica = {} // This will not work !!!
// Coping Objects

const jessica2 = {
  fistName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // Assign merge two objects in a new one object
// ASSIGN technic only works at first lever. This is a shallow copy. Not a deep one.

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessicaCopy);
console.log('After marriage', jessica2); // The family property points to the same memory Heap
