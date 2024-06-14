// npm install readline-sync
//  deve ser executado no terminal

const readline = require ('readline-sync');

const nome = readline.question('Qual o seu nome?');

console.log('Olá ${nome}, tudo bem?');


