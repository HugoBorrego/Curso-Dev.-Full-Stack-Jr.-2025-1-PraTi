let nome = 'Julio César'

console.log(nome.length) // Conta a qtd de caractreres inclusive os espaços
console.log(nome.charAt(0)) // Mostra o caractere na posição 0
console.log(nome.indexOf('C')) // Motra a posição onde está a letra 'C'
console.log(nome.replace('Julio', 'Cleyton')) // Troca o nome Julio por Cleyton
console.log(nome.substr(6, 5)) // Extrai uma parte da string, a partir do 6 os 5 caracteres adiante 
console.log(nome.toUpperCase()) // Deixa tudo maiúsculo
console.log(nome.toLowerCase()) // Deixa tudo minúsculo

console.log("    Wesley  ".trim()) // Elimina espaços em branco

// Função para reverter uma string
function reverseString(str) {
    return str.split('').reverse().join('') // Split separa cada caractere com '', reverse reverte, e join junta tudo
}
console.log(reverseString('Julio César'))

// Função para contar quantas vogais tem na string
function qtdVogais(str1) {
    let vogais = str1.match(/[aeiou]/gi) // Match é usado para ver se as letras da string corresponde com as dele, e o g serve para continuar percorrendo e o i para ser case sensitive
    return vogais ? vogais.length : 0
}
console.log(qtdVogais('Dragon Ball'))

console.log(Math.ceil(100.2)) // Arredonda para cima
console.log(Math.floor(100.2)) // Arredonda para baixo
console.log(Math.round(100.2)) // Arredonda
console.log(Math.sqrt(81)) // Raiz quadrada
console.log(Math.cbrt(64)) // Raiz cubica
console.log(Math.pow(5, 2)) // Eleva ao quadrado
console.log(Math.abs(-110.2)) // Inverte o valor
console.log(Math.random() * 100) // Randomiza um numero entre 0 e 100

// Gerar uma função que retorne um número aleatório entre dois valores
function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomEntre(2, 7))

let date = new Date()
console.log(date.getDate())  
console.log(date.getMonth() + 1) // + 1 pq ele começa do zero
console.log(date.getFullYear())  
console.log(date.toString())  

let date1 = new Date(2014, 10, 29)
let date2 = new Date(2025, 5, 13)

console.log(date1.getTime()) // Da o valor em milisegundos

let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
let milisegundosPorDia = (24 * 60 * 60 * 1000)
console.log(`A diferença entre as datas por dia é ${(milissegundosEntreDatas / milisegundosPorDia).toFixed(0)}`)

// Função para formatar uma data
function formatarData(data) {
    let dia = data.getDate().toString().padStart(2, '0')
    let mes = data.getMonth().toString().padStart(2, '0')
    let ano = data.getFullYear().toString()
    return `${dia}/${mes}/${ano}`
}
console.log(formatarData(date1))

// Função REDUCE
notas = [7, 3, 8, 1, 5]

let somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0)
console.log(somaNotas)

// A função reduce cria o acumulador que acumula o valor e pega cada valor da lista, 
// ele soma e o ', 0' significa que ele começa do zero