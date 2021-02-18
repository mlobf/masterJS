"use strict";

// Create a function printForecast witch takes  an Array and logs the a string
//    like above to the console.

const testDataOne = [17, 21, 23];
const testDataTwo = [12, 5, -5, 0, 4];
// The basic structure is
// I will return one string.
// Witch contains......
/*
    '...' At beginning of the sentence.
    '...' In the end of the sentence.
    In the middle, for each element inside of array,
    '17' Celsius in '1' days 
*/

const printForecast = (arr) => {
	let sentence = "...";
	for (let i = 0; i < arr.length; i++) {
		sentence = sentence + ` ${arr[i]} Celsius in ${i} days ...`;
	}
	console.log(sentence);
};

printForecast(testDataOne);
printForecast(testDataTwo);
