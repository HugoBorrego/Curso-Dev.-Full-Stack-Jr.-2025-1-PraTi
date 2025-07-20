console.log("Hello World 'aspas' ")
console.log('Hello World "aspas" ')

console.log(typeof("Olá, mundo!")) // A função typeof diz o tipo
console.log(typeof (1.4))

// Para comentar basta apertar (Ctrl + ;) ou (//) ou (/* */)
// Para excutar no terminal use (node 1-basic-structure.js)
// Para repetir a mesma linha aperte (Shift + Alt + seta)

let name = 'Hugo' //Declaração de variável com let (MELHOR DE USAR)
console.log(name)
var anotherName = 'João' //Declaração de variável com var
console.log(anotherName)
const city = 'São Paulo' //Declaração de variável com const (APENAS para constantes que não deseja mudar)
// city = 'mossoró' -> não é possivel alterar uma constante
console.log(city)

let numA = 4
let numB = 3

console.log(numA + numB)
console.log(numA - numB)
console.log(numA * numB)
console.log(numA / numB)
console.log(numA ** numB)
console.log(numA % numB)

/*
= - é para atribução
== - é para igualdade
=== - é para verificar se é identico
*/

let num = "10"
console.log(parseInt(num) + 1) //A função parseInt transforma a string "10" em inteiro 10

const nota = 80

if (nota < 60) {
    console.log('Reprovado')
} else if (nota > 90) {
    console.log('Brabão')
} else {
    console.log('Aprovado')
}

(nota < 60) ? console.log('Reprovado') : console.log('Aprovado') //Operador ternário

let num1 = 10
let num2 = 6
let num3 = 17

if (num1 > num2 && num1 > num3) {
    console.log('O maior número é: ' + num1)
} else if (num2 > num1 && num2 > num3) {
    console.log('O maior número é: ' + num2)
} else if (num3 > num1 && num3 > num2) {
    console.log('O maior número é: ' + num3)
} else {
    console.log('Os números são iguais.')
}

// Exercício: Faça uma calculadora simples usando entrada do usúario
// TERMINAL CMD: npm install prompt-sync

const prompt = require('prompt-sync')()  //Usado para executar a função prompt

let valor1 = Number(prompt("Insire o primeiro valor: "))
let valor2 = Number(prompt("Insire o segundo valor: "))
let operacao = prompt("Insire a operação desejada (+, -, * ou /): ")
let resultado = 0

if (operacao === '+') {
    resultado = valor1 + valor2
} else if (operacao === '-') {
    resultado = valor1 - valor2
} else if (operacao === '*') {
    resultado = valor1 * valor2
} else if (operacao === '/') {
    if (valor2 !== 0) {
        resultado = valor1 / valor2
    } else {
        console.log("Erro: não se pode dividir por zero.")
        resultado = undefined
    }
} else {
    console.log("Operação inválida!")
    resultado = undefined
}

if (resultado !== undefined) {
    console.log("Resultado da operação: ", resultado)
}


let opcao = 1
switch (opcao) {
    case 1:
        console.log("Você selecionou a primeira opção.")
        break
    case 2:
        console.log("Você selecionou a segunda opção.")
        break
    default:
        console.log("Você não selecionou nenhuma opção.")
        break
}

// Exercício 2: verificar se o número é positivo, negativo ou zero
//const prompt = require('prompt-sync')()
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
