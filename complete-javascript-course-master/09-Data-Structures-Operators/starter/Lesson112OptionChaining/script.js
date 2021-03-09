'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openHours = {
  [weekDays[0]]: {
    open: 10,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
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
//console.log('------- BEG +++++++++');

//ES2020 Solution
//console.log(restaurant.openHours.mon?.open); // Only if mon exist, the open property will be touched

//console.log('+++++++++ END ---------');

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//
for (const day of days) {
  //console.log(day);
  // Visa executar sem dar erro o operador ?. Assim nao aparece undefined
  const open = restaurant.openHours[day]?.open ?? 'closed';
  //console.log(`On ${day} we open at ${open}`);
}

// Using optional chaining on Methods
//console.log(restaurant.orderDelivery?.(1, 1) ?? 'Method does not exist '); Nesta da Acerto
//console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist '); // Neste da erro.

// Using even on arrays
// Check if this arrays is empty
//const users = [{ name: 'Jonas' }, { email: 'hello@gmail.com' }, { age: 38 }];

//console.log(users[0]?.name ?? 'This dude does not exist');
