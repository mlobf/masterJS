'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Forma antiga

/*
const vitaoFunc = function (params) {
  for (let i = 0; i < params.length; i++) {
    console.log(i);
  }
};
*/

// Forma nova
//for (let x of arr) console.log(x);

// Age counter
// 2077
const bDay = 1981;
const future = 2077;

const myAgeIn2077 = (params1, params2) => {
  const result = params2 - params1;
  console.log(`My age will be ${params2 - params1}`);
  console.log(`My age will be ${result}`);
};

//myAgeIn2077(bDay, future);

// Object
const car = {
  door: 2,
  tires: 4,
  motor: 1,
  color: 'black',
  year: 1969,
  motorType: 'V8',
  owner: {
    name: 'Victor',
    age: 29,
    sex: 'Male',
    profession: 'node programer',
  },
  start: function () {
    console.log('Vrummmmm!!!');
  },

  maxSpeed: function (motor) {
    if (motor === 'V8') {
      console.log(`Max Speed 220 mph`);
    } else {
      console.log('No way Buddy');
    }
  },
};
const motor = 'V8';

car.start();
car.maxSpeed(motor);

const newArr = [1, 112];
const name = 1981;

let x = String(name);
console.log(typeof x);

console.log(`Look this my friend ${String(newArr[0]) + String(name)}`);

// for
// if
// let || const
// || or  && and

const age = 19;
const drink = age >= 18 ? 'Wine' : 'Water';

console.log(drink);
