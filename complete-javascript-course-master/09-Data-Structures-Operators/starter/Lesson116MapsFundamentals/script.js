'use strict';

// New Data Structure
// Maps
// Can use any data structure as key
// otherwise, Objects can use only strings

console.log('--------------- BEG --------------------');

const rest = new Map();
// How to add a element to a Map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italia');
rest.set(2, 'Lisbon, Portugal ');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// To create a arr as key, first you must create a const arr and use this arr
//    as key to a new Map element
const arr = [1, 2];
rest.set(arr, 'Test');

// Using a Object as Key on Map
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
// this is how we use Boolean as Map keys
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check if this map contain a certain key
console.log(rest.has('categories'));
// Delete some element on Maps
console.log(rest.delete(2));
// The size propertyA
console.log(rest.size);
// How to clear, remove all elements inside map.
//console.log(rest.clear);

console.log(rest.get(arr));

console.log(rest);

console.log('--------------- END --------------------');
