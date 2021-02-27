'use strict';

// The Primitive type
let age = 30;
let oldAge = age; // At this point here age is still 30
age = 31;

console.log(age);
console.log(oldAge);

// The Object type
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me :', me);
