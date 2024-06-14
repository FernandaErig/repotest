//criar retorno RETURN

// crie uma função que receba um nome imprima o nome com uma mensagem 
// de bom dia

function bomDia(Nome) {
    const frase = `Bom dia ${Nome}!`
        
    return frase
}

const bomdia= bomDia("Jean")
console.log(bomdia)


// crie uma função que receba por parametro nome, sobrenome e idade
// e impima no console a mensagem 
// Invoque esta função 3 vezes passando 3 argumentos diferentes.

function cadastroCliente(Nome1, sobrenome, idade) {
    
    const frase = `O cliente, Nome: ${Nome1} Sobrenome: ${sobrenome} e da Idade: ${idade}`
 return frase

}
const fraseClientes = cadastroCliente ("Marta" ," Silva" , 54)
console.log(fraseClientes)
// console.log(ImprimaCadastro( "jean","castilhos", 29))

