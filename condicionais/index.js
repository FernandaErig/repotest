//variavel condição
const condicao = true 

if (condicao){
    console.log(`Estrei dentro do bloco IF`)

}



// outro exemplo para pratica

const idade = 18 

const condicao1 = idade >=18

if (condicao1){
    console.log(`maior de idade`)

}

//IF e else

const condicao2 = true 

if (condicao2) {
    console.log(`condica verdadeira`)
} else {
    console.log(`condica falsa`)
}


//exemplo de uso else 

const idade2 = 15 

if (idade >=18) {
    console.log(`maior de idade`)
} else {
    console.log(`menor de idade`)
}



// else if


const condicao3 = false
const condicao4 = true

if (condicao3) {
    console.log(`estou no bloco if`)
    
} else if(condicao4){
    console.log(`estou no bloco else if`)

} else{
    console.log(`estou no bloco else`)
}

/////////////////////////////////////////


const SaborDoSuco = "goiaba"

if (SaborDoSuco === "pessego") {
    console.log(`ok! Suco bom `)
    
} else if(SaborDoSuco === "Goiaba"){
    console.log(`Obrigada não vou querer`)
}  else if(SaborDoSuco === "Goiaba"){
    console.log(`Nem sabia que tinha esse suco`)
} else{
    console.log(`Otimo finalmente um sabor diferente`)
}