// Now this is personal...

let newList = [];

let x = Math.random();

const addOnList = function (list) {
	for (i = 0; i < 100; i++) {
		list.push(Number(Math.random() * 100).toFixed(1));
	}
	return list;
};

const sumList = addOnList(newList);

let sum = function (list) {
	let x = 0;
	for (i = 0; i < list.length; i++) {
		x = list[i] + x;
	}
	return x;
};
console.log(addOnList(newList));
