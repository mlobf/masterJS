// Logical operators.
// the AND operator and JavaScript is &&
const hasDriversLicense = false;
const hasGoodVision = true;
const shouldDrive = hasDriversLicense && hasGoodVision && isTired;
const isTired = false;

// the AND operator &&
console.log(hasDriversLicense && hasGoodVision);

// the OR operator ||
console.log(hasDriversLicense || hasGoodVision);

// the NOT operator !
console.log(!hasDriversLicense);

const should = function (shouldDrive) {
	if (shouldDrive) {
		console.log(`Lets drive Sarah`);
	} else {
		console.log(`Take a bus`);
	}
};
should(shouldDrive);

console.log(hasGoodVision || hasDriversLicense || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log(`Sarah goes to Drive`);
} else {
	console.log(`Someone else should drive!!`);
}
