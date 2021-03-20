'use strict';

const airline = 'TAP Air Portugal';

console.log('');

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());
console.log('The HEAVY METAL is uppercase'.toUpperCase());

console.log('');
// Fix capitalization in name
const jonas = 'JoNAs';
const newJonas = jonas.toLocaleLowerCase();
console.log('The newJonas ->', newJonas);
const jonasCorrect = newJonas[0].toUpperCase() + newJonas.slice(1);
console.log(jonasCorrect);

// Now doing the same using a function instead

const fixName = theName => {
  const lowerName = theName.toLocaleLowerCase();
  const finalName = lowerName[0].toUpperCase() + lowerName.slice(1);

  return console.log(finalName);
};

fixName('MaRcoS');

// Comparing Emails.

const email = 'marcos@gmail.com';
const compareEmail = '   Marcos@Gmail.COm';
const newCompare = compareEmail.toLocaleLowerCase().trim();
const result = email === newCompare;

console.log(newCompare);
console.log(result);

// ES19 has add trimStart() and trimEnd()

// Replace
const priceGB = '288,97$';
console.log(priceGB.replace(',', '.'));
// Using regular expressions

const announcement =
  'All passengers shall enter at door number 8. Dont miss the door ';

console.log(announcement.replace(/door/g, 'gate')); // Regx /xyz/g where g stands for global
// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('o'));
console.log(plane.includes('BOEING'));
console.log(plane.startsWith('A'));
console.log(plane.startsWith('o'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Air') || plane.endsWith('neo')) {
  console.log('Part of  the new Airbus family');
} else {
  console.log('Belongs to someone else');
}

// Challenge time
const checkBaggage = function (items) {
  const newItems = items.toLocaleLowerCase();
  const result = newItems.includes('gun') || newItems.includes('knife');

  if (result === true) {
    console.log('Go home now');
  } else {
    console.log('Welcome, please go on board');
  }
};

checkBaggage('gun');
