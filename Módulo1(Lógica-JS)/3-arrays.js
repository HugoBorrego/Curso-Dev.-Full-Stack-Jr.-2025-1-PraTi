let listaNomes = ['Arthur', 'Bruno', 'Carlos', 'Daniel', 'Edurardo']

for (let i = 0; i < listaNomes.length; i++) { console.log(listaNomes[i]) }

let listaFrutas = Array()
listaFrutas[0] = 'Abacate' // Adicionando no array de indice 0
listaFrutas[1] = 'Banana' // Adicionando no array de indice 1

listaFrutas.push('Caqui') // Adicionando no final do array
listaFrutas.unshift('Melancia') // Adicionando no começo do array
listaFrutas.push('pop')
listaFrutas.pop() // Excluindo o último do array
listaFrutas.unshift() // Excluindo no começo do array

console.table(listaFrutas) // Mostra uma tabela com todos os elementos


// Crie um array chamado 'numeros' contendo valores numéricos a sua escolha
let numeros = [1, 2, 8, 4, 9, 6, 7, 3, 5, 10]
// Use métodos de array para calcular:
// A soma de todos elementos
 
let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
// MÉTODO NORMAL for (let i = 0; i < numeros.length; i++) { soma += numeros[i] }


// Média dos elementos
let media = 0
media = soma / numeros.length

// Gere um novo array chamado pares que contenha apenas os números pares do array numeros
let pares = numeros.filter((num => num % 2 == 0))
// MÉTODO NORMAL for (let i = 0; i < numeros.length; i++) { if (numeros[i] % 2 == 0) { pares.push(numeros[i]) } }

console.log(soma)
console.log(media)
console.log(pares)

// Ordene um array numeros em ordem crescente
let ordenado = numeros.sort((a, b) => a - b)
console.log(numeros)


// MÉTODO BubbleSort 
let valores = [3, 1, -4, 6, -1]
for (let i = 0; i < valores.length; i++) {
    for (let j = 0; j < valores.length - i; j++) {
        if (valores[j] > valores[j + 1]) {
            let temp = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = temp
        }
    }
}
console.log(valores)

// Matrizes

let matriz = []
let somar = 0
for (let i = 0; i < 3; i++) {
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = 7
        // Calculo da diagonal da matriz
        if (i == j) { 
            somar += matriz[i][j] 
        }
    }
}
console.table(matriz)
console.log(somar)


let mercado = []
mercado['Fruteira'] = ['Maça', 'Pera', 'Abacaxi']
mercado['Açougue'] = ['Picanha', 'Alcatra', 'Filé']
console.table(mercado)
