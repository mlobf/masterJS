"use strict";

// Functions Calling Functions.

const cutFruitPieces = (fruit) => fruit * 4;

const fruitProcessor = (apples, oranges) => {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
	return juice;
};

console.log(fruitProcessor(2, 3));
