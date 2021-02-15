"use strict";
// Basic Arrays Operations.

const friends = ["Michel", "Steven", "Peter"];

// Add elements
const newFriends = friends.push("Jay");
console.log(friends);
console.log(newFriends);
friends.unshift("John"); // Add John at first position.
console.log(friends); // Show John.

// Remove elements
friends.pop(); // Remove last element. - Jay

const popped = friends.pop(); // Remove last element.
console.log(friends);
console.log(popped); // Show only the removed friend. Peter
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// ES6 Methods - INCLUDES

console.log(friends.includes("Steven")); // Return a Boolean, checking if parameter is on Array
console.log(friends.includes("Bob"));

console.log(friends.push(23));

console.log(friends.includes("23")); // Checks strict equality| That means .. DO NOT  type coercion.
console.log(friends);

console.log(friends.includes(23)); // Checks strict equality| That means .. DO NOT  type coercion.
console.log(friends);

if (friends.includes("Steven")) {
	console.log("You have a friend called Steven");
}
