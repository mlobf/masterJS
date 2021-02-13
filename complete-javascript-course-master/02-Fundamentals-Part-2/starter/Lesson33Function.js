"use strict";
// Functions

function logger() {
	console.log("My name is Marcos");
}

logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and
   ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(0, 5);
console.log(appleJuice);
