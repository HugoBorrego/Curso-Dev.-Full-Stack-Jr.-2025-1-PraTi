const prompt = require('prompt-sync')()
let dia = prompt('Digite um dia da semana: ')

if (dia == 'Sabado' || dia == 'Domingo') {
    console.log('Final de Semana')
} else if (dia == 'Segunda' || dia == 'Terca' || dia == 'Quarta' || dia == 'Quinta' || dia == 'Sexta') {
    console.log('Final de Semana')
} else {
    console.log('Você não digitou um dia.')
}