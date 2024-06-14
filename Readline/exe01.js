//somar todos os numeros que foram inseridos

const readlinesync = require('readline-sync');

let i = 0
let soma = 0
while(i < 5) {
    const pergunta1 = Number(readlinesync.question('Insira um numero'));

    soma = soma + pergunta1
    i++
}
console.log(soma)

// Number - transforma uma string em number

//FOR

for (let i = 0; i <= 10; i++){
    console.log(i)
}

