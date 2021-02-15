"use restrict";
// Dot  VS Bracket Notation.
// How to retrieve from objects and how to change data from objects

const jonas = {
	firstName: "Jonas",
	lastName: "Schmedmann",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michel", "Peter", "Steven"],
};

// Using the Dot notation
console.log(jonas.lastName); // Dot Notation

console.log(jonas["lastName"]); // Bracket Notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
	"What do you want to know about Jonas ? Choose between firstName, lastName, age, job,and friends"
);

console.log(jonas[`${interestedIn}`]);

// Hint , undefined happens when someone try to access a property from an object that does not exist.
if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
} else {
	console.log(
		"Wrong request! Please choose between fistName, lastName, age,job and friends."
	);
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";

console.log(jonas);

// Small Challenge
// Write Jonas has tree friends and his best friend is called Michel.
