// Lesson 21

/* 
  In JS they are 5 falsy values when try to convert to a boolean.
  -> 0,'', undefined, null, NaN
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
	console.log("Dont spend it all");
} else {
	console.log("You should get a job");
}
