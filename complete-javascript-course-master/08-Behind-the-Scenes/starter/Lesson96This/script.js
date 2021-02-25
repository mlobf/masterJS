'use strict';

const jonas = {
  name: 'Jonas',
  year: 1991,
  calcAge: function () {
    return 2037 - this.year;
  },
};

console.log(jonas.calcAge());
