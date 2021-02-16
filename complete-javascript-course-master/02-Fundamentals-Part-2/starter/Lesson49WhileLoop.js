"use strict";
// While Loop

const rep = 99;
const phrase = `Lifting weight repetitions`;

for (let count = 0; count < rep; count++) {
	console.log(`${phrase} at ${count} times`);
}

let r = 1;
while (r <= 20) {
	console.log(`${phrase} at ${r} times`);
	r++;
}

let rand = Math.trunc(Math.random() * 6) + 1;

while (rand !== 6) {
	console.log(rand);
	rand = Math.trunc(Math.random() * 6) + 1;
	if (rand === 6) console.log("Loop is about to end ...!!!");
}
