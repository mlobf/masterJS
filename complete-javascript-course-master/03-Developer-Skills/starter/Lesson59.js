"use strict";
// Calculate the temperature amplitude;
// Be aware about sensors error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// Amplitude = Max value - Min value.
// Create a 3th array with to combined values of the last Arrays

const add = (arr1, arr2) => {
	const arrUnion = [];
	for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
};

const amplitude = (temperature) => {
	const amp = [];
	for (let i = 0; i <= temperatures.length; i++) {
		if (typeof temperatures[i] === "number") {
			amp.push(temperatures[i]);
		}
	}
	const ampValue = Math.max(...amp) - Math.min(...amp);
	console.log(ampValue);
};

amplitude(temperatures);
