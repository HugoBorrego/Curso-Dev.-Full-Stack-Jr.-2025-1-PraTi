

// Escreva um algorítimo que leia a temperatura em graus Celcius e devolva em
// Fahrenheit

let celcius = Number(prompt('Digite uma temperatura em graus Celsius: '))

let fahrenheit = (celcius * 9 / 5) + 32

console.log(`A temperatura ${celcius}°C em fahrenheit é ${fahrenheit}°F`)

/* Escreva um algoritimo para ler o número de eleitores de um município, o número
de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um
representa em relação ao total de eleitores. */

let totalEleitores = Number(prompt('Digite o total de eleitores no município: '));

if (totalEleitores <= 0) {
    console.log('Valor inválido para o total de eleitores.');
}
let votoEmBranco = Number(prompt('Digite a quantidade de pessoas que votaram em branco: '))
let votoNulo = Number(prompt('Digite a quantidade de pessoas que votaram nulo: '))
let votoValido = Number(prompt('Digite a quantidade de pessoas que votaram de modo válido: '))

if (isNaN(votoEmBranco) || isNaN(votoNulo) || isNaN(votoValido) ||
    votoEmBranco < 0 || votoNulo < 0 || votoValido < 0 ||
    (votoEmBranco + votoNulo + votoValido) > totalEleitores) {
    console.log('Valores de votos inválidos.');
}

console.log(`Percentual de votos Brancos é ${(votoEmBranco / totalEleitores * 100).toFixed(2)}%`);
console.log(`Percentual de votos Nulos é ${(votoNulo / totalEleitores * 100).toFixed(2)}%`);
console.log(`Percentual de votos Válidos é ${(votoValido / totalEleitores * 100).toFixed(2)}%`);

/* A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritimo 
que leia o percentual de alunos reprovados na turma C, o percentual de aprovados 
da turma D, calcule e escreva:
a) O número de alunos reprovados na turma C.
b) O número de alunos reprovados na turma D.
c) A percentagem de alunos reprovados em relação ao total das 2 turmas. */

let turmaC = 60
let turmaD = 20
let totalalunos = turmaC + turmaD
let percentualReprovadosC = Number(prompt('Escreva o percentual de alunos reprovados na turma C: '))
let percentualAprovadosD = Number(prompt('Escreva o percentual de alunos aprovados na turma C: '))

let reprovadosC = (turmaC * percentualReprovadosC) / 100
let aprovadosD = (turmaD * percentualAprovadosD) / 100
let reprovadosD = turmaD - aprovadosD
let percentagemTotal = ((reprovadosC + reprovadosD) / totalalunos) * 100

console.log('a) N° de alunos reprovados turma C é ', reprovadosC)
console.log('b) N° de alunos reprovados turma D é ', reprovadosD)
console.log('c) Percentagem de alunos reprovados é ', percentagemTotal, '%')

/* Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, 
quinta, Sexta e Sábado). Esse dia deve ser um texto. Se for Sábado ou Domingo 
imprimir "Final de Semana", senão imprimir "Dia Útil" */
const prompt = require('prompt-sync')()
let dia = prompt('Digite um dia da semana: ')

if (dia == 'Sabado' || dia == 'Domingo') {
    console.log('Final de Semana')
} else if (dia == 'Segunda' || dia == 'Terca' || dia == 'Quarta' || dia == 'Quinta' || dia == 'Sexta') {
    console.log('Dia Útil')
} else {
    console.log('Você não digitou um dia.')
}