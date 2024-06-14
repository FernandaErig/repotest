//1- Crie 1 array com pelo menos 5 raças de cachorros
//Imprima no console a raça corespondente na 3 posição do array

const listaDeCaes = ["Beagle","Shitzu","Pastor Alemão", "Rottweiler", "Labrador"]

console.log(listaDeCaes[2])
 
//2- Crie 1 array com os valores 1,2,3,4,5,6 e exiba no terminal quando
//necessario: Tamanho do array; Remover o último elemento; Adc num 7;
//Verificar se existe 1 elemento de valor 6; remover 4,5; Novo tamanho do array

const numeros = [1,2,3,4,5,6]

//Tamanho do array:

console.log(`O tamanho do array é: ${numeros.length}`)

//Remover o último elemento:

numeros.pop()
console.log(numeros)

//Adc num7

numeros.push(7)
console.log(numeros)

//Verificar se existe um elemento de valor 6:

console.log(numeros.includes(6))

//Remove 4,5

numeros.splice(3,2)
console.log(numeros)

// Novo tamanho do array:
console.log(numeros.length)




