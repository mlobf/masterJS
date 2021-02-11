// Strings and Literal

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
	"I'am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

// Template Literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;

console.log(jonasNew);
console.log("A new string ....... \n and other line here too....");

console.log(`Add a new line without using back slash n...... 
now this is easier !!!
Bye bye`);

console.log(` oioioi oio i ooio o io oioi 
oioiooioi
oioioioioioi
oioioioi
oioioioiio`);


