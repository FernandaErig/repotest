// Faça uma contagem regressiva de 10 ate zero 
let regressivo = 10

while(regressivo >= 0 ){

    console.log(regressivo)

    regressivo = regressivo -1;
}

// Para segundo que for par mostrar a palavra "TIC" e quando por impar
// mostrar "tac" e quando por 0 mostrar a palavra BOOM 


let segundos = 10

while(segundos >= 0 ){

    if (segundos === 0) {
        console.log(`Boom`)
        
    } else if(segundos % 2=== 0 ){
        console.log(`TIC`)
    
    } else{
        console.log(`TAC`)
    }
     segundos --;

}