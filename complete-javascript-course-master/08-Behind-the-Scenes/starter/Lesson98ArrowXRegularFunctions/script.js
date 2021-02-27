'use strict' /*
const jonas = {
  name: 'Jonas',
  year: 1991,
  calcAge: function () {
    return 2037 - this.year;
  },
};

console.log(jonas.calcAge());
*/;

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

//var firstName = 'Marcos';

// Never use arrow function as a Method

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);
    const self = this; // self or that , is some pre es6 solution;
    // Marcos => Using a function inside a method , to have the this key word
    //  use an arrow function to up the this from the upper method.

    const isMillenial = () => {
      // Inside a function
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    // Inside a function
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// Argument keywords
const addExpr = function (a, b) {
  console.log(arguments); // The arguments exist only in regular functions
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 5, 5, 6);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 3, 6);
