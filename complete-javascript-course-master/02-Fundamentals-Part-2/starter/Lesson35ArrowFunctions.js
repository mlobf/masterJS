"use strict";
// Arrow Functions.
// Are a Special form of functions expressions.

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Another example of arrow functions.

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	return `${firstName} will retirement in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "John"));
console.log(yearsUntilRetirement(1981, "Marcos"));
