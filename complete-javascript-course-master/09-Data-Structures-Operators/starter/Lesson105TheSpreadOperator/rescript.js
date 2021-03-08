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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your past with ${ing1} plus ${ing2} and finally the last ing ....${ing3}`
    );
  },
};
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
*/

const arr = [7, 8, 9];
const newArr = [4, 5, 6, ...arr];
//console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join Two Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(menu);

// Spread on Strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
//console.log(letters);
const newLetters = [...str].reverse(); // Bonus, this is how to reverse a string
console.log(String(newLetters));

// Build a function that accepts multiple arg
const ings = ['agua', 'farinha', 'fermento'];
restaurant.orderPasta(...ings);

// Using ... on objects
const newRestaurant = {
  ...restaurant,
  founder: 'Giovanni',
};
console.log(newRestaurant.founder);

const restaurantCopy = { ...newRestaurant };
restaurantCopy.name = 'Ultimo Gole';

console.log(restaurantCopy.name);
console.log(restaurant.name);




