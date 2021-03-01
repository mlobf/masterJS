'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brusquetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Destructing Assignment
console.log(x, y, z);

//let [main, , secondary] = restaurant.categories;

//console.log(first, second);

//[main, secondary] = [secondary, main]; // Changing the elements orders

//console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Arrays:
// How to do the same return using a nested Array ?
const nested = [2, 4, [5, 6]];

//const [i, , j] = nested; // using [a, , , d] to jump elements
const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// Useful when get data from a API
console.log(p, q, r);
