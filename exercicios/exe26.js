// Crie uma função que receba um objeto de pessoa (Exercício2) e crie um novo objeto mantendo as propriedades
// originais e acrescentando:
//Uma propriedade com a lista de suas comidas preferidas 
//Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo da pessoa 

//Ainda na funçãoo, imprima no console as propriedades desse objeto seguindo o modelo abaixo: 

// "O nome da pessoa é _____ e sua comida prederida são ____,_____ e _____. Seu melhor amigo se chama ____
//e tem ____ anos"


const pessoa = {
    nome: "Maria ",
idade: 16,
ComidaPreferida:"Arroz"

}

const nomePessoa ={
    ...Pessoa,
    nome: 'João',
    idade: 15

};


console.log(`O nome da pessoa é ${pessoa.nome}`)