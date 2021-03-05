'use strict';

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

// The Call of orderDelivery with some Obj
restaurant.orderDelivery({
  address: 'Via del Sole',
});

// Mutating Variables on Objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Use parenthesis to wrap it.
//console.log(a, b);

// Default Values for Objects
const { menu = [], starterMenu: starter = [] } = restaurant;

// Nested Objects
// Show open and close only for friday
const {
  fri: { open: o, close: c },
} = restaurant.openHours;
//console.log(o, c);

//console.log(menu);
//console.log(starter);

const { name, openHours, categories } = restaurant;

// Custom name on variables
const {
  name: nome,
  openHours: horarioAbertura,
  categories: categorias,
} = restaurant;

//console.log(nome);
//console.log(horarioAbertura);
//console.log(categorias);

//console.log(name);
//console.log(openHours);
//console.log(categories);
