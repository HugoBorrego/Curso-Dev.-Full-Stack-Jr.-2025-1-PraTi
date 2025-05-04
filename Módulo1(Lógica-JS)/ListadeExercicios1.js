const prompt = require('prompt-sync')()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let numero = Number(prompt('Digite um número inteiro: '))

if (numero % 2 == 0) {
    console.log('O número é PAR.')
} else if (numero % 2 == 1){
    console.log('O número é ÍMPAR.')
} else {
    console.log('Inválido. Você não digitou um número ou ele não é inteiro')
}
    
// 2. Crie um programa que classifica a idade de uma pessoa em categorias
// (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando
// uma estrutura de controle if-else.

let idade = Number(prompt('Digite sua idade: '))

if (idade < 14) {
    console.log('Você é considerado uma criança.')
} else if (idade >= 14 && idade < 18) {
    console.log('Você é considerado um adolescente.')
} else if (idade >= 18 && idade < 70) {
    console.log('Você é considerado um adulto.')
} else if ( idade >= 70) {
    console.log('Você é considerado um idoso.')
} else {
    console.log('Você não digitou uma idade válida.')
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
// "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt('Digite sua nota (0 a 10): '))

if (nota > 7) {
    console.log('Você está Aprovado.')
} else if (nota <= 7 && nota > 5) {
    console.log('Você está de Recuperação.')
} else if (nota <= 5) {
    console.log('Você está de Reprovado.')
} else {
    console.log('Você nao digitou uma nota válida.')
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const readline = require('readline-sync');

function mostrarMenu() {
    console.log("-- MENU --");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            console.log("Você escolheu a Opção 1!");
            break;
        case "2":
            console.log("Você escolheu a Opção 2!");
            break;
        case "3":
            console.log("Você escolheu a Opção 3!");
            break;
        default:
            console.log("Opção inválida!");
    }
}
mostrarMenu();

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura: '))
let imcCalculo = peso / (altura * altura)
let imc = imcCalculo.toFixed(1)

if (imc <= 18.4) {
    console.log('Você está com peso baixo. Seu IMC é ', imc)
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Você está com peso normal. Seu IMC é ', imc)
} else if (imc >= 25 && imc <= 29.9) {
    console.log('Você está com sobrepeso. Seu IMC é ', imc)
} else if (imc >= 30) {
    console.log('Você está obeso. Seu IMC é ', imc)
}else {
    console.log('Peso inválido.')
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C.Verificar se os lados 
fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

let ladoA = Number(prompt('Digite o valor do lado A: '))
let ladoB = Number(prompt('Digite o valor do lado B: '))
let ladoC = Number(prompt('Digite o valor do lado C: '))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log('Esse é um triangulo Equilátero')
    } else if (ladoA != ladoB && ladoB != ladoC) {
        console.log('Esse é um triangulo Escaleno')
    } else {
        console.log('Esse é um triangulo Isósceles')
    }
} else {
    console.log('Não existe um triângulo com esses lados.')
}

// 7. As maçãs custam R$ 0, 30 se forem compradas menos do que uma dúzia, e R$ 0, 25
// se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let qtdMaca = Number(prompt('Digite a quantida de maçãs que foram compradas: '))
let valorCompra = 0
if (qtdMaca < 12) {
    valorCompra = qtdMaca * (0.3)
    console.log(`A quantidade de maçãs foi ${qtdMaca}. E o valor total da compra foi de R$${valorCompra}`)
} else {
    valorCompra = qtdMaca * (0.25)
    console.log(`A quantidade de maçãs foi ${qtdMaca}. E o valor total da compra foi de R$${valorCompra}`)
}

// 8. Escreva um algoritmo para ler 2 valores(considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let valor1 = Number(prompt('Digite o valor 1: '))
let valor2 = Number(prompt('Digite o valor 2: '))
if (valor1 != valor2) {
    if (valor1 > valor2) {
        console.log(`A ordem crescente é ${valor2} - ${valor1}`)
    } else {
        console.log(`A ordem crescente é ${valor1} - ${valor2}`)
    }
} else {
    console.log('Os valores são iguais.')
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

for (let i = 10; i > 0; i--) {
    console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num = Number(prompt('Digite um número: '))

for (let i = 0; i < 10; i++) {
    console.log(num)
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let soma = 0
for (let i = 0; i < 5; i++) {
    let numeros = Number(prompt('Digite um número: '));
    soma += numeros
}
console.log('A soma total dos números é ', soma)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário(de 1 a 10)
// utilizando um loop for.

let numTabuada = Number(prompt('Digite um número de 1 a 10 que deseja ver sua tabuada: '))
for (let i = 0; i < 11; i++) {
    console.log(`${numTabuada} x ${i} = ${i * numTabuada}`)
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 
// e fazer a média aritmética desses números.

let numero1
let media = 0
let soma1 = 0
let qtd = 0
while (numero1 != 0) {
    let numero1 = Number(prompt('Digite um número: '))
    if (numero1 == 0) {
        break
    }
    soma1 += numero1
    qtd++
}
media = soma1 / qtd
console.log('A média aritimética dos números é ', media)

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let fatorial = 1
let numero2 = Number(prompt('Digite um valor para saber seu fatorial: '))
for (let i = 1; i <= numero2; i++) {
    fatorial *= i
}
console.log(`O fatorial de ${numero2} é ${fatorial}`)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
    let seqFibonacci = a + b;
    console.log(seqFibonacci);
    a = b;
    b = seqFibonacci;
}