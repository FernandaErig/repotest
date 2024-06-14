const professor = {
    nome: 'Jean', 
    idade: 28, 
    tarefas: ['Dar aula', 'Rsponde as dúvidas'], 
    contarPiada: function(){
        console.log('é pa vê ou pa comê?')
    }
}

//__________________________________________________________________________

const aluno ={
    nome: 'Claudinho',
    idade: 19,
    tarefas: ['Estudar', 'Falar as dúvidas'],
    piadocas: function(){
     console.log('e o pintinho piu')
    }
}

console.log(aluno.nome)

console.log(aluno["nome"])

//________________________________________________