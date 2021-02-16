"use strict";
// Challenge, review Objects

// (mass / (height * height))
// Mark Miller  78kg 1.69.
// John Smith 92 kg 1.95

const markMiller = {
	firstName: "Mark",
	lastName: "Miller",
	mass: 78,
	height: 1.69,

	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

console.log(markMiller.calcBMI());

const johnSmith = {
	firstName: "John",
	lastName: "Smith",
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

console.log(johnSmith.calcBMI());

console.log(
	`${markMiller.firstName} 's BMI is ${markMiller.bmi} is higher than ${johnSmith.firstName}'s BMI ${johnSmith.bmi} ! `
);
