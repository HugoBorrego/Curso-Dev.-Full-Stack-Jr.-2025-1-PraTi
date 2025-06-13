const prompt = require("prompt-sync")

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
numeros = [5, 8, 1, 3, 9, 2]
let ordenado = numeros.sort((a, b) => a - b)
console.log(ordenado)


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

let listaCoisas = Array()
listaCoisas['Hardware'] = ['Placa de Vídeo']
listaCoisas['Hardware'][1] = 'Smartwatch'
listaCoisas['Games'] = ['GTA VI']
listaCoisas['Games'][1] = 'The Witcher'
console.table(listaCoisas)


/*
📌 Métodos de Array em JavaScript 📌

🔹 push() - Adiciona elementos ao final do array.
🔹 pop() - Remove o último elemento.
🔹 shift() - Remove e retorna o primeiro elemento.
🔹 unshift() - Adiciona elementos no início do array.
🔹 concat() - Combina dois ou mais arrays.
🔹 slice() - Retorna uma cópia de parte do array.
🔹 splice() - Adiciona, remove ou substitui elementos.
🔹 indexOf() - Retorna o primeiro índice de um elemento.
🔹 lastIndexOf() - Retorna o último índice de um elemento.
🔹 includes() - Verifica se o array contém um elemento.
🔹 find() - Retorna o primeiro elemento que satisfaz uma condição.
🔹 findIndex() - Retorna o índice do primeiro elemento que passa em um teste.
🔹 forEach() - Executa uma função em cada elemento.
🔹 map() - Cria um novo array com os resultados de uma função.
🔹 filter() - Cria um novo array com elementos que passam em um teste.
🔹 reduce() - Reduz o array a um único valor.
🔹 reduceRight() - Reduz o array da direita para a esquerda.
🔹 some() - Verifica se ao menos um elemento satisfaz uma condição.
🔹 every() - Verifica se todos os elementos satisfazem uma condição.
🔹 sort() - Organiza os elementos do array.
🔹 reverse() - Inverte a ordem dos elementos.
🔹 join() - Junta os elementos em uma string.
🔹 toString() - Converte o array para uma string.
🔹 fill() - Preenche o array com um valor.
🔹 copyWithin() - Copia parte do array para outra posição.
🔹 flat() - Achata sub-arrays até uma profundidade.
🔹 flatMap() - Mapeia e achata o resultado em um novo array.
🔹 isArray() - Verifica se o valor é um array, retornando true ou false.
*/

