"use strict";
// Function Declaration -> Use the function key word to declare a function.
// Beg a function declaration.
function calAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);

// End a function declaration.
// -------------------------------------------------------------------------
// Now a function expression below. Produce Values.
// Lets begging.
// A function without a name, aka anonymous function.

const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
