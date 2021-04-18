'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const myName = 'Marcos Leme De Oliveira Borba Filho';

//console.log(oneWord(myName));

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join('');
};

// Higher Order function
const transformer = function (str, fn) {
  console.log(`Transform string: ${fn(str)}`);
};

transformer('JavaScript is the Best!!', upperFirstWord);
