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

//Nested
const nested = [2, 3, [4, 5]];
const [first, , second] = nested;
console.log(first, second);

const [f, , [s, t]] = nested;
console.log(f, s, t);

// Using Default Values
const [pr = 1, se = 1, te = 1] = [8, 9];
console.log(pr, se, te);

//console.log(nested[0], nested[2]);

//const [starter, main] = restaurant.order(2, 0);

//console.log(starter, main);

//const arr = [2, 3, 4];

//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);

//const [a, b, c] = arr;
//console.log(a, b, c);

//let [main, , secondary] = restaurant.categories;
//console.log(main);
//console.log(secondary);

//[main, secondary] = [secondary, main];
//console.log(main, secondary);
