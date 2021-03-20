'use strict';

// Will generate a arr where each element is separated by +
console.log('a+very+strange+string+now'.split('+'));
console.log('Marcos Leme'.split(' '));

const [firstName, lastName] = 'Marcos Leme'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  
  const capName = name.toUpperCase();
  return console.log(capName);
};
capitalizeName('marcos');
