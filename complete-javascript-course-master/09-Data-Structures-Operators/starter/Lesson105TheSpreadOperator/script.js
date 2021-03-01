'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], this.mainMenu[this.mainIndex];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`
    );
  },
};

const arr = [7, 8, 9];
// Using the bad way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Using the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Create Shallow Copies of Arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join Two Arrays, or more of course.......
const mainMenuJoin = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mainMenuJoin);

// Iterables: arrays, strings, maps, sets. Not objects

const str = 'Jonas';
const letters = [...str, ' S.'];
console.log(letters);
// This can be only used when creating a array or passing values as a function's parameters
console.log(...str);
// Do not use this as `X lala ${...something} and etc`

//A function that accepts multiples arguments using the ... operator
