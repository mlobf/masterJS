'use strict';

/*
const jonas = {
  name: 'Jonas',
  year: 1991,
  calcAge: function () {
    return 2037 - this.year;
  },
};

console.log(jonas.calcAge());
*/

//console.log(this);

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
*/
/*
const calcAge = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
*/

//calcAge(1991);

const jonas = {
  year: 1991,
  calcAge1: function () {
    console.log(2037 - this.year);
  },
};

jonas.calcAge1();

const matilda = {
  year: 2018,
};

matilda.calcAge1 = jonas.calcAge1;

matilda.calcAge1();
