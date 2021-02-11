// Exercise Two.

//Do the previous exercise using the most recent knowledge acquired.

let markHigherBMI = false;
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

// functions  ---------------------------------------------------
const bmi = function bmi(height, mass) {
	return mass / height ** 2;
};

// functions  ---------------------------------------------------
const higherBMI = function higherBMIEx(markBMI, johnBMI) {
	if (markBMI > johnBMI) {
		markHigherBMI = true;
	}
	return console.log(markHigherBMI);
};
// ---------------------------------------------------------------
let markBMI = bmi(markHeight, markMass);
let johnBMI = bmi(johnHeight, johnMass);
// ---------------------------------------------------------------

console.log(`Mark's BMI ${markBMI}`);
console.log(`John's BMI ${johnBMI}`);

higherBMI(markBMI, johnBMI);
