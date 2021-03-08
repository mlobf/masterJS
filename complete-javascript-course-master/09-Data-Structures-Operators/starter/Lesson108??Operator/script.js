'use strict';

// Defining a object to use in this lesson
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Cesar Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  numGuests: 0,
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

// NULLISH COALESCING OPERATOR

//let restaurant.numGuests = 10;
//const guests = restaurant.numGuests || 10; // Zero is Falsy value
//console.log(guests);

// Nullish: null and undefined
//const restaurant.numGuests = 100
const guestCorrect = restaurant.numGuests ?? 10; // Does not work on Node.js
console.log(guestCorrect);

//console.log(3 || 'Jonas');

// Logical Operators .....
// 1-) Can use or return Any Data Type.
//      And They do SHORT CIRCUITING.
// If the first element is Truthy the second even be evaluate.
/*
console.log(3 || 'Jonas'); // First is Truthy
console.log('' || 'Jonas'); // Second is Truthy
console.log(true || 0); // First is Truthy
console.log(undefined || null); // Second is Truthy

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // The First truthy value that appears is Hello.
*/
//console.log('----------------- OR ----------------------');

//restaurant.numGuests = 23;

//const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guest1);

//const guest2 = restaurant.numGuests || 10;
//console.log(guest2);

//console.log('----------------- AND ----------------------');
//console.log(0 && 'Jonas'); // The and operator && short circuits when the first value is Falsy
//console.log(7 && 'Jonas'); // The AND operator is true only if all operands are true
//console.log('Hello' && 23 && null && 'Jonas');
