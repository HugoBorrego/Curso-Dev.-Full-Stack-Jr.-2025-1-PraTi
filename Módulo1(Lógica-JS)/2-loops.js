// COMANDO WHILE
let contadora = 0

while (contadora <= 10) {
    console.log(contadora)
    contadora++
}

// COMANDO WHILE
let contador = 0

for ( contador = 0; contador <= 10; contador++) {
    console.log(contador)
}

// COMANDO DO-WHILE
let value;
do {
    value = parseInt(prompt("Digite um valor positivo: "));
} while (value >= 0);
console.log('O valor digitado é negativo.')

// Exercício: Faça uma média aritimética de números inseridos até que o usuário digite zero
const prompt = require('prompt-sync')()
let valor
let soma = 0
let media
let i = 0

while (valor !== 0) {
    valor = Number(prompt("Insira um valor: "))
    soma += valor
    if (valor == 0) {
        break
    }
    i++
}

media = soma / i
console.log('A média aritimética é ', media)

//Para mostrar a formatação é necessario colocar `(acento invertido) o ${}
// Tabuada
let multiplier = 5
let counter

for (counter = 0; counter <= 10; counter++) {
    console.log(`${multiplier} * ${counter} =`, multiplier*counter);
}