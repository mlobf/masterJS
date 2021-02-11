let js = "amazing";
console.log(40 + 33 + 2);

console.log("Jonas");
console.log(23);

//let firstName = "Jonas";

//console.log(firstName);

//To use a reserved name to name something, its possible put a _ $ in front of variable name.
// function -> Error
// _function -> ok
// $function -> ok

// Do not start a variable with an Upperletter

// Variables constants shall be written in uppercase

let PI = 3.1421;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myCurrentJob);
console.log(myFirstJob);
console.log(typeof true);
console.log(typeof myFirstJob);

myFirstJob = "Janitor";

console.log(typeof myFirstJob);

console.log(typeof null);

// Now how to declare Variables.

const age = 22;
console.log(age);
//const age = 33;
console.log(age);

// As matter of fact, to write a clean code , user first const and let only if is strict necessary.
// Have as little variables changes/mutations as possible.

meuNome = "marcos";
console.log(meuNome);

// Operators Lesson 14
const now = 2037;
const ageJonas = now - 1981;
const ageSarah = now - 2018;

console.log(ageJonas * 2, ageSarah / 2, 3 ** 5);

// How to concatenate two o more strings.

const firstName = "Marcos";
const lastName = "Filho";

console.log(firstName + " " + lastName);

//let x = 15;
//x += 10;
//console.log(x);

//x++; // means -> x = x + 1
//x--; // means -> x = x - 1
//x--; // means -> x = x - 1

//console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah);

console.log(ageSarah >= 18);

const resultAgeSarah = ageSarah >= 18;

console.log(resultAgeSarah);

// Lesson 15
// Operators Precedence

let x, y;

x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);
