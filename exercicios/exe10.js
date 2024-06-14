// 1 - crie um algoritimo que receba 3 numeros em variaveis e a partir deles crie 
//uma estrutura condicional que retorne uma mensagem informando que existem dois ou mais
// numeros identicos ou no caso de todos os numero serem diferentes retorne uma mensagem informando que nao 
//fa numeros identicos; 

const num1 = 1 
const num2 = 2 
const num4 = 3 

const condicao3 = (num1 === num2) && (num1 >num4) 
if (condicao3){
    console.log(`numero identicos`)
  }  else {
        console.log(`numeros não identicos`)
    }

//2 - Crie um algoritmo que receba uma idade em variavel e a partir dela crie uma estrutura 
//condicional que retorne uma mensagem informando se é maior ou menor de idade 

const idade = 18 

const condicao1 = idade >=18

if (condicao1){
    console.log(`maior de idade`)
  }  else {
        console.log(`menor de idade`)
    }

// 3- Crie um algoritmo que receba 1 numero em uma variavel e a partir dele crie uma 
//estrutra condicional que retorne uma mensgem informando se ele é par ou impar

const num3 = 7
const rest = num3 % 2 == 0

const condicao2 = rest === 0
if (condicao2){
    console.log(`numero par`)
  }  else {
        console.log(`numero impar`)
    }


    