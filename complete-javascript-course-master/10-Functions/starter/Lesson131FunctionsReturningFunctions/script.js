'use strict';
/*
// This is an intro about closers
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Whats matter here is that  our function greet is stored at greeterHey variable
const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

// Some sample at real.
console.log('another view');
console.log(' ----------  ');
greet('Hey')('Ynh');

// This way is called functional programming
*/
// Now a simple challenge re write using only arrows functions

//const newGreet = newGreeting => {
//  return newName => {
// console.log(`${newGreeting} ${newName}`);
// };
//};

//const newGreeterHey = newGreet('New Hey');

//newGreeterHey(' New Jonas ');

//newGreeterHey(' New Steven ');

//newGreet('New Hey')('new Ynh');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
