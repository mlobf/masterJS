'use strict';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openHours = {
  [weekDays[0]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[6]]: {
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
// ------------------------------------------------------------------------------------------
// Properties  NAMES
const properties = Object.keys(openHours);
//console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for (const day of Object.keys(openHours)) {
  openStr += `${day},`;
}
//console.log(openStr);

// Properties Values
const values = Object.values(openHours);
//console.log(values);

//Entire Object
const entries = Object.entries(openHours);
//console.log(entries);

//Using the key and value method
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
