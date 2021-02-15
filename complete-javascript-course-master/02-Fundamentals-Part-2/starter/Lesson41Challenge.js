"use strict";
// Codding Challenge Number Two.
// Another use for tip Calculator.

// Tip 15% between 50 and 300, other amount should be tipped at 20%.
// Write a function calcTip that takes the bill value as input and returns the corresponding tip.
//    Test this functions with a bill of 100.

// Create a Array 'bills' containing the test data below.
// Create a Array 'Tips' containing the tips for each test data.

// Create a Array  Total, containing bill + tip.
// TEST DATA: 125, 555, 44.

const testData = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = (bill) => (bill >= 50 && bill <= 300 ? 0.15 : 0.2);
const addToTotal = (bill, tip) => bill + (bill * tip);

tips.push(calcTip(testData[0]));
tips.push(calcTip(testData[1]));
tips.push(calcTip(testData[2]));

console.log(tips);

total.push(addToTotal(testData[0], tips[0]));
total.push(addToTotal(testData[1], tips[1]));
total.push(addToTotal(testData[2], tips[2]));

console.log(total);
