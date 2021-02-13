// Final Section's Challenge.

// The Tip Calculator.
// Between 50 and 300 he tip is 15%
// Otherwise is 20%

// Do not use if/Else here

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

console.log(tip);

// Second part:
// Print the Bill and the tip and the bill plus tip.
console.log(`The bill is ${bill} the tips amount is ${bill * tip} and the total
amount is ${bill + bill * tip}`);
