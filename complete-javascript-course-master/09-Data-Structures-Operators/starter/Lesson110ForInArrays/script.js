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

console.log('======== Beg of Script ===========');
// A new way to Loops throw arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]; // Union Arrays
//console.log(menu);

for (const item of menu) console.log(item); // Looping arrays
// Now with the current index

// Using the new way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//console.log(menu.entries());

/*
for (let i = 0; i < menu.length; i++) {
  console.log(i);
}
*/

console.log('======== End of Script ===========');
