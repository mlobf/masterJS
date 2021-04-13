'use strict';

// Will generate a arr where each element is separated by +

const arr = [];
//strange+string+now'.split('+')); // The element '+' is used  to create each new arr element another arr
const x = 'Marcos Leme'.split(' ');
//console.log(x);

//console.log(typeof arr);
//const [firstName, lastName] = 'Marcos Leme'.split(' ');
const [firstName, lastName] = 'Marcos Leme'.split(' ');

//console.log(firstName);// Create a new string
//console.log(lastName); // Create a new string

//console.log('-------------------------------------------------')

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

//console.log(newName); // Create a new string from an arr that each element is concat

// Great Use Case for all Stings Methods
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

//console.log('------------------------');

capitalizeName('marcos leme de oliveira');
//capitalizeName('lin de oliveira baba');
//capitalizeName('joao augusto prado caldeira');

//console.log('------------------------');

//Padding
// Means add a number of characters to a string until the string has a desired len

const message = 'Go to gate 23!';

//console.log(message.padStart(25, ' +'));
//console.log('Jonas'.padStart(25, ' +'));
// But in the end the string has also 25 characters

//console.log('Jonas'.padEnd(25, ' +'));
// Now mixing Start and End
//console.log('Jonas'.padStart(25, ' +').padEnd(50, ' +'));

// Challenge, print a credit card number showing only the first four numbers
//    the other characters must appear as '*'.

const myCreditCardNumber = '10.2102.212.2122';

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// Showing the number
//console.log(maskCreditCard(myCreditCardNumber));

// The Repeat method
const message2 = 'Bad Weather .... All Departures Delays';
//console.log(message.repeat(10));

// function planesInLine

const planesInLine = n => {
  console.log(`There are ${n} planes in line `.repeat(n));
};

//planesInLine(5);
