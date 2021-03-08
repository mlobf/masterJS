'use strict';

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
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);
//for (const item of menu) console.log(item);
// Using a new method mysterious .entries()

//for (const item of menu.entries()) console.log(item);

console.log([...menu.entries()]);
