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

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Lets destructing this object

restaurant.orderDelivery({ address: 'Rua dos Elements' });

const { name, openHours, categories } = restaurant;
//console.log(name, openHours, categories);

// This will be really handle when dealing with third part data.
const { name: restaurantName, openHours: hours, categories: tags } = restaurant;
//console.log(restaurantName, hours, tags);

// Defaults values
const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu, starters);

// Mutating Variables.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Using () to implement on objects.

//console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openHours;
//Changing the name variables
//console.log(o, c);
