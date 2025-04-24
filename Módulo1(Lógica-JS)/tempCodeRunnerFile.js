const prompt = require('prompt-sync')()
let numero = Number(prompt("Digite um número: "))

if (numero > 0) {
    console.log("O número ", numero, " é positivo.")
} else if (numero < 0) {
    console.log("O número ", numero, " é negativo.")
} else if (numero === 0) {
    console.log("O número ", numero, " é zero.")
} else {
    console.log("Número inválido.")
}