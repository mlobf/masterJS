"use strict";
// Objects Methods.

// Below the Object Jonas
const jonas = {
	firstName: "Jonas",
	lastName: "Schmedmann",
	birthYear: 1991,
	job: "teacher",
	friends: ["Michel", "Peter", "Steven"],
	hasDriversLicense: true,
	// Here we need a function Expression in
	//    order to create a method, any function with is attached to an,
	//    object is a method.

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.age} years old ${
			this.job
		}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
	},
};

console.log(jonas.calcAge()); // Once it run, the new property is free to be used.
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
// Other Challenge called getSummary.
// This method should return => 'Jonas is a 46 years old teacher.
