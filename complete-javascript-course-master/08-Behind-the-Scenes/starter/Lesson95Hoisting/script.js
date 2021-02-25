'use strict';

console.log(me);
//console.log(job);
//console.log(year);

//Variables
var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

console.log(addDecl(3, 3));
//console.log(addExpr(3, 3));
//console.log(addArrow(3, 3));

// Functions
//    Declaration
function addDecl(a, b) {
  return a + b;
}

//    Expression.
const addExpr = function (a, b) {
  return a + b;
};

//    Arrow
const addArrow = (a, b) => a + b;

// Example
//if (!numProducts) deleteShoppingCard();

let numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}
