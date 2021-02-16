"use strict";
// The final challenge;
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// Calc Tips
const calcTip = (bill) => {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bill.length; i++) {
	const tip = calcTip(bill[i]);
	tips.push(tip);
	totals.push(tip + bill[i]);
}

//console.log(bill, tips, totals);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
const calcAverage = (arr) => {
	for (let i = 0; i <= arr.length - 1; i++) {
		// Sum all elements inside.
		sum = Number(arr[i]) + sum;
	}
	let avg = sum / arr.length;
	console.log(avg);
};

calcAverage(tips);
