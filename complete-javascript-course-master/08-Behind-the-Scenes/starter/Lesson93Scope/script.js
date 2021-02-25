'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age} years old and you born in  ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1981);
