'use strict';

// set and map

// set is a collection de unique values
// the order of the elements are does not matter
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rizotto', 'Pasta']);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Rizotto');
//orderSet.clear();
console.log(orderSet);
for (const order of orderSet) console.log(order);
// The main use case of set is remove duplicates of arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const newStaff = new Set(staff);
console.log(newStaff.size);
// Converting to array
const newStaffArray = [...newStaff];
console.log(newStaffArray);
console.log(newStaffArray);
