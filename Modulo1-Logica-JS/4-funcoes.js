function RetornaParImpar(valor) {
    let resultado

    if (valor % 2 == 0) {
        resultado = 'Par'
    } else {
        resultado = 'Ímpar'
    }
    return resultado
}
console.log(RetornaParImpar(17))

// Crie uma função que retorna um array ordenado
function ArrayOrdenado(valores) {
    return valores.sort((a, b) => a - b) //Coloca (a, b) => a - b pois senão o array será ordenado atravéz do code do número
}
console.log(ArrayOrdenado([5, 9, 3, 2, 8]))

function ArrayOrdenado(valores) {
    return valores.sort() //Nesse caso precisamos do code das letras para conseguir ordená-los
}
console.log(ArrayOrdenado(['a', 'u', 'r', 'v', 'i']))

let sucesso = () => console.log('Requisição foi um sucesso')
// Mesma função em diferentes formas
function sucesso() {
    console.log('Requisição foi um sucesso')
}

// Crie uma função que soma os elementos de um Array e retorna esse valor
function SomarArray(arr) {
    let soma = arr.reduce((acumulador, valor) => acumulador + valor, 0)
    return soma
}
console.log(SomarArray([5, 8, 2, 7, 3]))

// Crie uma função que retorna o maior número de um Array
function MaiorNumero(arr1) {
    let maiorNumero = arr1[0]
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > maiorNumero) {
            maiorNumero = arr1[i]
        }
    }
    return maiorNumero
}
console.log(MaiorNumero([5, 8, 2, 7, 3]))