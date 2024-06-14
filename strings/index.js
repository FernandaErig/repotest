//TEMPLATE STRINGS

const nome = "Mika"
const idade = 27
//const frase = Olá meu nome é $ {nome} e minha idade é ${idade}

const frase = `Olá meu nome é ${nome} e tenho ${idade} anos`

console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`)


// Prototipos de strings 

// Propriedades 

console.log(nome.length)
  
const propriedade = nome.length

//Metodos

console.log(nome.toLocaleUpperCase())

const metodo = nome.toLocaleUpperCase()

//LENGHT

console.log(nome.length)

console.log(`A variavel nome tem ${nome.length} caracteres`)

//toLowercase - tudo minusculo

nome.toLocaleUpperCase()

const frase1 = "OieEEEee!"
const fraseMunuscula = frase1.toLocaleLowerCase()

console.log(nome.toLocaleLowerCase())

//toUppercase tudo maiusculo

nome.toUpperCase()
console.log(nome.toUpperCase())

// metodo trim - Retira os espaços varios antes e depois da string

const email = " milka@gmail.com"

console.log(email.trim())

console.log(email.length)

//INcludes retorna true ou false 

const frase3 = "Hoje comi cenoura" 

console.log(frase3.includes("cenoura"))
console.log(frase3.includes("batata"))

const palavra2 = "mamão"
console.log(
    `Na frase a palavra ${palavra2} foi encontrada?
    ${frase.includes(palavra2)}`
)


// Metodo replaceAll  - Troca palavra por outra

const frase5 = "Hoje comi cenoura. adoro cenoura"
const novafrase5 = frase5.replaceall("cenoura", "batata")

console.log(novafrase4)



// exemplo 

const frase8 = "É tri programar"

console.log(frase8.toLocaleUpperCase())
console.log(frase8.replaceall("oi","i"))
console.log 