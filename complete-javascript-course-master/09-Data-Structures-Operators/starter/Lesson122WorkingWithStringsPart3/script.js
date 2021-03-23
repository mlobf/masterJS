'use strict';

// Will generate a arr where each element is separated by +
console.log('a+very+strange+string+now'.split('+'));
console.log('Marcos Leme'.split(' '));

const [firstName, lastName] = 'Marcos Leme'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

// Great Use Case for all Stings Methods
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('marcos leme de oliveira');
capitalizeName('lin de oliveira baba');
capitalizeName('joao augusto prado caldeira');
