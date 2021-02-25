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

var firstName = 'Marcos';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge1: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
      isMillenial();
    };
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

//jonas.greet();
jonas.calcAge1();
