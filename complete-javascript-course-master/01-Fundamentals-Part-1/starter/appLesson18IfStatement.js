// Lesson 18 If statements

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log("Sarah can start driving license ");
} else {
	console.log("Maybe Later");
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	// IMPORTANT NOTE
	// ANY VARIABLE DECLARED INSIDE OF
	// CODE BLOCK WILL NOT BE ACCESSIBLE
	// OUT SIDE IT.
	// aka let century
	century = 21;
}

console.log(century);
