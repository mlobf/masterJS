'use strict';

// Write a program that receives a list of variable names written in
//  in underscore and convert it them to camelCase.

const myList = [
  'underscore_cASe',
  'first_name',
  'Some_variable',
  'calculate_AGE',
  'delayed_departure',
];

// First, step by step , variable by variable,
//    and put at second stage the loop logic.
// ok 1 - Change all arrays elements to lowerCase.
// ok 2 - Replace   the '_' to  " ".
// 3 - Create two new variables , firstName and lastName,
// 4 - At firstName, do nothing
// 5 - At lastName, split in two parts, the first will be the first
//      letter and the other part will be the rest of the letters
// 6 - At lastName, make the firstLetter UpperCase and join at lastName

/*
let testVar = 'thisIs_TheEnd';
let newTestVar = testVar.toLocaleLowerCase().replace('_', ' '); // LowerCase and Replace '_'
let splitVar = newTestVar.split(' ');
let [first, last] = splitVar;
let newLast = last.replace(last[0], last[0].toUpperCase());
let final = first + newLast;

console.log(final);
*/

const resCamel = function (arr) {
  let result = [];
  for (let a of arr) {
    let newTestVar = a.toLocaleLowerCase().replace('_', ' '); // LowerCase and Replace '_'
    let splitVar = newTestVar.split(' ');
    let [first, last] = splitVar;
    let newLast = last.replace(last[0], last[0].toUpperCase());
    let final = first + newLast;

    result.push(final);
  }
  return console.log(result);
};

resCamel(myList);
