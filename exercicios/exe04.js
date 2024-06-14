// Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e impruma a mensagem 
// "A cor favorita é de Fulano é cor"

const nome = "Loraynne"
const corFavorita = "Branco"

const frase = `A cor favorita de ${nome} é ${corFavorita}`

console.log(`Olá meu nome é ${nome} e minha cor favorita é ${corFavorita} `)


// 2 

nome.toLocaleUpperCase()

const frase1 = "meu nome é Fernanda!"
const fraseMunuscula = frase1.toLocaleLowerCase()

console.log(frase1.toLocaleLowerCase())

//toUppercase tudo maiusculo

const frase2 = "MEU NOME É fEerNaNda"
console.log(frase2.toUpperCase())


// tamanho da frase

console.log(nome.length)

console.log(`A variavel nome tem ${nome.length} caracteres`)

//trocar todas letra O por I 

const frase6 = "Trocar as vogais O por I, impossivel "
const novafrase6 = frase6.replaceALL("o", "i")

console.log(novafrase7)
