"use strict";
// Arrays in Js

const friends = ["Michel", "Steven", "Peter"];
const years = new Array(1991, 1984, 2008, 2020);
console.log("-----------------------------------------------------");

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length); // Property of friend Object.
console.log(friends[friends.length - 1]); // Last Element

console.log(friends[2]);
friends[2] = "Jay";
console.log(friends[2]);
console.log(friends);

console.log("-----------------------------------------------------");
// We can mutate arrays even if they are declared as const
// But we can not replace the entire array
const firstName = "Marcos";
const marcos = ["Marcos", "Leme de Oliveira Borba Filho", 2037 - 1981];
console.log(marcos);

// Playing with arrays.
const otherMarcos = [
	firstName,
	"Leme de Oliveira Borba Filho",
	2037 - 1981,
	friends,
];
console.log(otherMarcos);
console.log(otherMarcos.length);

console.log("-----------------------------------------------------");
// A little exercise .....
const calcAge = (birthYear) => 2037 - birthYear;

const newYears = [1990, 1954, 2002, 2010, 2018];

const age1 = calcAge(newYears[0]);
const age2 = calcAge(newYears[1]);
const age3 = calcAge(newYears[2]);
console.log("-----------------------------------------------------");
console.log(age1);
console.log(age2);
console.log(age3);

console.log("-----------------------------------------------------");
console.log(age1, age2, age3);
console.log("-----------------------------------------------------");

const ages = [age1, age2, age3];

console.log(ages);

console.log("-----------------------------------------------------");
