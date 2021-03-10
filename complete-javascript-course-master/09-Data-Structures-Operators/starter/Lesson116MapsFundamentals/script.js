'use strict';

// New Data Structure
// Maps

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openHours = {
  [weekDays[0]]: {
    open: 10,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Way
  openHours, // The name Must be the same.

  // Now an easy way to do the things.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], this.mainMenu[this.mainIndex];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`
    );
  },
};
console.log('--------------- BEG --------------------');

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italia');
rest.set(2, 'Lisbon, Portugal ');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
const arr = [1, 2];
rest.set(arr, 'Test');
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
