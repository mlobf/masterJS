'use strict';

const flight = 'LH234';
const marcos = {
  name: 'Marcos Leme',
  passport: 15342342521382451,
};

const checkIn = (flightNumber, passenger) => {
  flightNumber = 'MAR8181';
  passenger.name = 'Mr' + passenger.name;

  if (passenger.passport === 15342342521382451) {
    console.log('Check In ');
  } else {
    console.log('Wrong passaport');
  }
};

checkIn(flight, marcos);
console.log('---------');
console.log(flight);
console.log(marcos);

console.log('-----Before NewPassaport----');
const newPassaport = person => {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};
console.log('----------');
newPassaport(marcos);

checkIn(flight, marcos);

// JavaScript has not passing by reference
// It has only passing by value
