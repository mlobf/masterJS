'use strict';

// Creating functions that accepts others functions as params

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//const myName = 'Marcos Leme De Oliveira Borba Filho';

//console.log(oneWord(myName));

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join('');
};

// Higher-order function
//  That uses fn as params
//    where fn can be any function

const transformer = function (str, fn) {
  console.log(`Transform string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the Best!!', upperFirstWord);
transformer('JavaScript is the Best!!', oneWord);

const hight5 = () => {
  console.log(' Hi hight five bro!!');
};

// Call back functions allow us up abstraction.
// Attention on the arch
['John', 'Marcos', 'Lin'].forEach(hight5);
