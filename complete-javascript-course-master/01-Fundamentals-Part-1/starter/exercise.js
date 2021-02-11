// Mark , 78 kg, 1.69 m .
// John , 92 kg, 1.95 m.
// BMI = mass / height ** 2
// Boolean variable markHigherBMI

let markHigherBMI = false;
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const bmi = function bmi(height, mass) {
	return mass / height ** 2;
};

const higherBMI = function higherBMIEx(markBMI, johnBMI) {
	if (markBMI > johnBMI) {
		markHigherBMI = true;
	}
	return console.log(markHigherBMI);
};

let markBMI = bmi(markHeight, markMass);
let johnBMI = bmi(johnHeight, johnMass);

console.log("Mark's BMI " + markBMI);
console.log("John's BMI " + johnBMI);

higherBMI(markBMI, johnBMI);
