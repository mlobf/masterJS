// Change Types Variables.

// I'm JS there is type convert and type coercion.

// So type convert happens when you manually make the type changing.
// So type coercion happens when you automatic make the type changing.

// Type conversion.

const inputYear = "1991";
console.log(Number(inputYear) + 18);
// try to convert a Nan ...
console.log(Number("Jonas"));

console.log(String(223), 99);
console.log(" This is type conversion example");
// End of Type Conversion.

// Beg Type Coercion
console.log("Im " + 23 + " years old");
console.log(" This is type coercion example");

// Lets game the output.

let n = "1" + 1;
n = n - 1; // this means 11 - 1 that result 10
console.log(n);
