// comparadores são operadores que permitem comparar o valor das variaveis entre si    são els:
// identicos ===    
// igual ==
// diferente !==
// Maior e maior igual > e >=
// menor e menor igual < e <= 

// identicos (===)

// "1" === "2" // false, são diferentes
// "2" === "2" // true, são identicos
// 2 === "2" // false, são diferentes

const condicao1 = 1 === 2
console.log(condicao1)

// o valor que sai da comparação 
// pode ser guardaddo em uma variavel 
// nesse caso, condicao === false

// Igual (==) considera o valor e nao o tipo da variavel

// "1" == "2" // false, são diferentes
// "2" =="2" // true, são identicos
// 2 == "2" // true, são iguais

const condicao2 = 1 == 2
console.log(condicao2)

// o valor que sai da comparação
// pode ser guardado em uma variavel
// nesse caso, condição == false

// diferente (!==)  verifica se ovalore o tipo sao diferentes

// "1" !== "2" // true, são diferentes
// "2" !== 2" // false, são identicos
// 2 !== "2" // true, tipos diferentes 

const condicao3 = 1 !== 2 // true

// MAIOR / MAIOR IGUAL (>/>=)

// 1 > 2 // false, porque 1 é menor que 2
// 2 > 2 // false, porque 2 é igual a 2
// 3 > 2 // true, porque 3 é maior que 2

const condicao4 = 1 > 2 
console.log(condicao4)

// 1 >= 2 // false, porque 1 é menor que 2
// 2 >= 2 // true, porque 2 é igual a 2
// 3 >= 2 // true, porque 3 é maior que 2

const condicao5 = 1 >= 1
console.log(condicao5)

// MENOR OU menor IGUAL (</<=)

// 1 < 2 // true, porque 1 é menor que 2
// 2 < 2 // false, porque 2 é igual a 2
// 3 < 2 // false, porque 3 é maior que 2

const condicao6 = 1 < 2
console.log(condicao6)

// 1 <= 2 // true, porque 1 é menor que 2
// 2 <= 2 // true, porque 2 é igual a 2
// 3 <= 2 // false, porque 3 é maior que 2

const condicao7 = 2 <= 2
console.log(condicao7)



