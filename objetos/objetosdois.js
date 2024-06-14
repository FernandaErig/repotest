// 1 O jogador deve escolher entre pedra, papel e tesoura
// 2 um segundo valor deve ser selecionado para que o jogo seja realizado ( Um segundo valor de entrada ou valor sorteado)
// 3 O sistema irá comparar os valores e deteminar o vencedor 
// 4 O sistema deverá perguntar se o (s) jogador (s) quem joga novamente. Se sim jogo recomeçará 

//1

let jogador = prompt('Você escolhe [0]Pedra, [1]Papel e [2]Tesoura')
let valores = ['Pedra,Papel,Tesoura']

let bot = Math.floor(math.random()*3)
console.log(bot)
alert(bot)

bot = valores[bot]
jogador = valores[Number(jogador)]



