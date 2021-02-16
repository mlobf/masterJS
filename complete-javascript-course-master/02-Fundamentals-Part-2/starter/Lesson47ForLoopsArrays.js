"use strict";
// For loops in Arrays.
/*
const jonasArrays = [
	"Jonas",
	"Schmedtmann",
	2037 - 1981,
	"teacher",
	["Michel", "Peter", "Steven"],
];

const types = [];
for (let i = 0; i < jonasArrays.length; i++) {
	//types[i] = typeof jonasArrays[i];
	types.push(jonasArrays[i]);
}
console.log(types);
*/
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	//ages[i] = 2037 - years[i];
	ages.push(2037 - years[i]);
}

console.log(ages);

// Now the continue and break
console.log("-----------ONLY STRINGS------------");
const jonasArrays = [
	"Jonas",
	"Schmedtmann",
	2037 - 1981,
	"teacher",
	["Michel", "Peter", "Steven"],
];

for (let i = 0; i < jonasArrays.length; i++) {
	if (typeof jonasArrays[i] !== "string") continue;
	console.log(jonasArrays[i], typeof jonasArrays[i]);
}
console.log(ages);

// BREAK Statement,;
for (let i = 0; i < jonasArrays.length; i++) {
	if (typeof jonasArrays[i] === "number") break;
	console.log(jonasArrays[i]);
}

//console.log(ages);
