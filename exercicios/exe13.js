// Escreva um laço que imprima a tabuada de um numero 

let tabuada = 7;
let contador = 1

while(tabuada <= 70){
console.log(tabuada);
contador = contador +1;

// contador pode ser feito tb 
// contador++;

tabuada = 7 * contador;
}


// esvreva uma laço array que devolva o maior dentro dele 

const numeros = [11, 15, 18, 14, 12, 13]

function develveMaiorNumero(array) {

    let maiorNumero = 0

    for(let i =0; i < numeros.length; i++){
        let numeroAtual = numeros[i]

        if(numeroAtual >= maiorNumero){
            maiorNumero = numeroAtual
        }
    }

    console.log(`O maior numero do array é ${maiorNumero}`)
}

devolveMaiorNumero(numeros)

