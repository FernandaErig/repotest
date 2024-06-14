// considere que vc tem um array com varias palavras. Nossa
// tarefa é criar um laço para imprimir em uma so msg. 

// Ex Pra este array ["oi", "sumido", "tudo", "bem","?"" "saudades"]

const frase = ["oi", "sumido", "tudo", "bem","?", "saudades"]
let resultado = ""
for (let palavra of frase) {
    resultado = resultado + " " + palavra;
   
}
console.log(resultado)



