// Criar tres variaveis que guardem numeros
// imprima na tela a seguinte condição

// 1 O primeiro numero é identico ao segundo e primeiro numero é maior que o terceiro ? true / false 

// 2 O primeiro numero é diferente do segundo ou o primeiro numero é menor igual do que terceiro? true / false 

// 3 O terceiro numero é maior que o segundo, eo terceiro numero é menor que o primeiro ? true / false 

const num1 = 1 
const num2 = 2 
const num3 = 3 

const condicao1 = (num1 === num2) && (num1 >num3) 

console.log(`O primeiro ${num1} identico ao segundo ${num2} primeiro numero ${num1}é maior que o terceiro ${num3}? Essa condição é true / false ? ${condicao1}`)
console.log("")

const condicao2 = (num1 !== num2) || (num1 <= num3)
console.log(`O primeiro numero ${num1} é diferente do segundo ${num2} ou o primeiro numero ${num1} é menor igual do que terceiro ${num3} Essa condição é true / false ? ${condicao2}`)
console.log("")

const condicao3 = (num3 > num2) && (num3 < num1)
console.log(`O terceiro numero ${num3} é maior que o segundo ${num2} e o terceiro numero ${num3} é menor que o primeiro ${num1}? Essa condição é true / false ?  ${condicao3}`)
console.log("")


// Obrigada a todos os envolvidos = EU MESMA!!  \o/

