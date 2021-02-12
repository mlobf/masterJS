// Lets rock

/*
  Dolphins 
  Koalas
  3 times
  Winner has the higher average score.
  Draw allowed.

  BONUS 1 : Winner must be minimum score of 100 and 
            average hight then other team.
  BONUS 2: Draw only happens when both teams have the
            same score and must be greater or equal 100.
*/
let dolphinsData = [96, 108, 89];
let koalasData = [88, 91, 110];

let dolphinsData1 = [97, 112, 101];
let koalasData1 = [109, 95, 123];

let dolphinsData2 = [96, 112, 101];
let koalasData2 = [109, 95, 106];

let sampleList = [1, 2, 3];

let sum = function (list) {
	let x = 0;
	for (i = 0; i < list.length; i++) {
		x = list[i] + x;
	}
	return x;
};

let average = function (list) {
	const result = sum(list) / list.length;
	return console.log(result);
};

// First Challenge.
const first = function (list1, list2) {
	if (average(list1) > average(list2)) {
		return console.log(`Winner is ${list1}`);
	} else {
		return console.log(`Winner is ${list2}`);
	}
};

first(dolphinsData, koalasData);
// Second Challenge;


