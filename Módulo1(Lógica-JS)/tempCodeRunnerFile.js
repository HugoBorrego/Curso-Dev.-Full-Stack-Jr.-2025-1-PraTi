const prompt = require('prompt-sync')()

let numero = Math.floor(Math.random() * 100) + 1
let tentativas = 0

do {
    valorUsuario = parseInt(prompt('Digite um número: '))
    if (valorUsuario > numero) {
        console.log('Mais baixo.')
    } else {
        console.log('Mais alto.')
    }
    tentativas++
} while (numero != valorUsuario)

console.log('Parabéns, você acertou!!')
console.log('A quantidade de tentativas foi ' + tentativas)