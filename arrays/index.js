//ARRAYS

const listaDeCompras = ["batata","cenoura","tomate"]

const listaDaLoteria = [2,4,11,22,35,67]

const listaBolleans = [true, false, true]

const listaVariada = [5, "cinco", true]

listaDeCompras[2] //retorna oq tiver no indice pedido

console.log(listaDeCompras[2]) //tomate

console.log(listaVariada[2]) //"cinco"

listaVariada[0] = 1 //copiou o valor de 5 e fez + 1

const num = listaVariada[0] + 1 //num = 6

//LENGTH

console.log(listaDeCompras.length) //retorna a quantidade de caracteres

//INCLUDES()

const seriesBoas = ["Breaking Bad", "Brooklyn Nine Nine"]

seriesBoas.includes("Breaking Bad") //true
seriesBoas.includes("Game Of Thrones") //false

//PUSH()

const numeros = [1,2,3]

numeros.push(4)
console.log(numeros) //adiciona 1 elemento, neste caso [1,2,3,4]

numeros.push(5,6,7)
console.log(numeros) //adiciona 1 elemento, neste caso [1,2,3,4,5,6,7]

//POP()

const meusPeixes = ["palhaço","mandarim","esturjão"]
meusPeixes.pop()

console.log(meusPeixes)

//remove o último elemento do array, neste caso foi removido foi esturjão

//SPLICE(I,N)

const letras = ["A","B","C","D","E","F","G","H"]
//INDICES (I): 0,1,2,3,4,5,6,7

letras.splice(2,1)
//letras = ["A","B","D","E","F","G","H"]
//INDICES (I): 0,1,2,3,4,5,6

letras.splice(3,2)
//letras = ["A","B","D","G","H"]
//INDICES (I): 0,1,2,3,4

console.log(letras) //remove elementos a partir do indice que voce pede
//e a quantidade pedida

