"use strict";
// Calculate the temperature amplitude;
// Be aware about sensors error.

const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -24, -6, -1, "error", 9, 13, 171, 15, 14, 9, 5];

const temperature = temperatures1.concat(temperatures2);

const amplitude = (temperature) => {
	const amp = [];
	for (let i = 0; i <= temperature.length; i++) {
		if (typeof temperature[i] === "number") {
			amp.push(temperature[i]);
		}
	}
	const ampValue = Math.max(...amp) - Math.min(...amp);
	console.log(ampValue);
};

amplitude(temperature);
