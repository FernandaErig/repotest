//ESCOPO

const num = 10

function func1(){

    const num2 =5 

    function func2( ){
        console.log(num2)
        const num = 3
    }

}

// Retorno 

function calcularArea1(altura, largura){
    const area = altura * largura 
    return area
}

const area = calcularArea1(2,3)


// outro exemplo


function calcularArea2(altura, largura){
    const area = altura * largura 
    if (3 <2 )
    return area
}
return 2

// todo codigo apos o return sera ignorado 

