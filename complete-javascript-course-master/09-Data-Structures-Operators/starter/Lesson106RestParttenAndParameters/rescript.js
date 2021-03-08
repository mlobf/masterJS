'use strict';

console.log('NEW');

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brusquetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 1,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = 0,
    address,
  }) {
    console.log(
      time,
      address,
      this.starterMenu[mainIndex],
      this.mainMenu[starterIndex]
    );
  },
};

// The Spread operator
//  -> 1) Build new arrays.
//  -> 2) Pass multiple values into a function.

// The REST operator
//  -> Collect multiple elements and condense them into array.
