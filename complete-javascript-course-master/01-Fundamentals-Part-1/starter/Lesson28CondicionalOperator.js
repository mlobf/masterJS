// Conditional  Operators Ternary Operators. ? :
// Ternary has 3 Parts. Condition/The IF/ The Else

const age = 22;

/*
age >= 18
	? console.log("I like to drink wine!")
	: console.log("I like to drink water");
*/

const drink = age >= 18 ? "Wine" : "Water";

console.log(drink);

// The same thing using if statement
let drink2;
if (age >= 18) {
	drink2 = "wine";
} else {
	drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);
