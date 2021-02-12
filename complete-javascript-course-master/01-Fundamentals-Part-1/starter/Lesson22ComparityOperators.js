// Lets compare them all!!!

const age = 18;

if (age === 18) {
	console.log("Yes, 18 allowed !");
}

// Important
// the == perform type coercion.

if (age == "18") {
	console.log("yes, 18 allowed ! == ");
}

if (age === "18") {
	console.log("yes, 18 allowed ! === ");
}
// As matter to Clean Code, avoid == as much you can.

const favorite = prompt("Whats your favorite number ?");

console.log(favorite);
console.log(typeof favorite);
if (favorite == 23) {
	console.log(`Cool! The number is 23 ${typeof favorite}`);
}
