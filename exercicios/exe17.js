for (let segundos =10 ; segundos >=0; segundos--) {
    if (segundos === 0) {
        console.log(`Boom`)
        
    } else if(segundos % 2=== 0 ){
        console.log(`TIC`)
    
    } else{
        console.log(`TAC`)
    }

}

// O for pode ser utilizado para percorrer arrays e fazer algo

const numeros = [1,8,12,20,35,99,100]

for(let i=0; i <numeros.length; i++){
    console.log(numeros[i])
}


// crie uma contagem regressiva usando for. A difereça é que o numero 
// vai ser fornecido pelo usuario atraves do comendo reaçome.

const readlinesync = require('readline-sync')

const i = readlinesync.question('Insira um numero');

for(let i = readlinesync.question('Insira um numero'); i >=0; i-- ) {
    console.log(i)

}

