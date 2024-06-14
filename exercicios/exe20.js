// crie uma função que receba um nome imprima o nome com uma mensagem 
// de bom dia

// chame / invoque a função

function ImprimaBomDia(Nome) {
    
    console.log(`Bom Dia, ${Nome}`)
}

ImprimaBomDia()
ImprimaBomDia("Coração")

// crie uma função que receba por parametro nome, sobrenome e idade
// e impima no console a mensagem 
// Invoque esta função 3 vezes passando 3 argumentos diferentes.

function ImprimaCadastro(Nome1, sobrenome, idade) {
    
    console.log(`O cliente, Nome: ${Nome1} Sobrenome: ${sobrenome} e da Idade: ${idade}`)
}
ImprimaCadastro("Marta" ," Silva" , 54)
ImprimaCadastro("Enzo" ," Silva" , 4)
ImprimaCadastro("Pedro" ," Silva" , 34)
