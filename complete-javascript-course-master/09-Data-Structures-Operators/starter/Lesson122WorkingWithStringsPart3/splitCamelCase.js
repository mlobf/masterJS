'use strict';

const camelCase = 'CrimeDramaThriller';

var str = camelCase;

const listaPalavras = str.replace(/([A-Z])/g, ',$1').split(',');
listaPalavras.shift();

console.log(listaPalavras);
