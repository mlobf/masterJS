'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Cesar Salad'],
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here your delicious pasta with ${ing1}, ${ing2} and ${ing3}. `
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// 1-) Functions.
//  Looks like the Spread operator but the Rest Pattern goes to pack elements to an Array
// .....do Its to the opposite .

// SPREAD, because in right side of  =
const arr = [1, 2, ...[3, 4]];
//console.log(arr, 'The Spread');

// REST, because they are on LEFT side of  =
const [a, b, ...others] = [1, 2, 3, 4, 5];
//console.log(a, b, others, 'The REST');

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

//console.log(pizza, risotto, otherFood); // The Rest element must be the last element

// Objects - Selection of the unselect
console.log('----------Beg----------------');
const { sat, ...weekdays } = restaurant.openHours;
//console.log('Saturday', sat);
//console.log('Weekdays', weekdays);
//console.log('----------End---------------');
// 2-) Functions and Rest operator.

const add = function (...numbers) {
  // Take multiple parameters and packs into a Array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(111, 11, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2);

const x = [23, 5, 7]; // Must use spread operator otherwise only strings will return.
//add(...x);

// Order Pizza.
//restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//restaurant.orderPizza('Tomato');
