"use restrict";
// Loop inside Loop

const jonas = [
	"Jonas",
	"Schmedtmann",
	2037 - 1981,
	"teacher",
	["Michel", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
	console.log(jonas[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
	console.log(`Starting Exercise ${exercise}  `);
	for (let repetition = 1; repetition <= 8; repetition++) {
		console.log(`Starting repetition ${repetition}  `);
	}
}
