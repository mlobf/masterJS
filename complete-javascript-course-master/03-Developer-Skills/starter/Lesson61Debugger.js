"use strict";

const measureKelvin = function () {
	const measurement = {
		type: "temp",
		unit: "celsius",
		value: Number(prompt("Degrees celsius: ")),
	};

	//	console.log(measurement.value);
	//  console.warn(measurement.value);
	//  console.error(measurement.value);
	console.table(measurement.value);

	const kelvin = measurement.value + 273;
	return kelvin;
};

console.log(measureKelvin());
