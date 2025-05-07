// Matriz
let matriz = []
let somar = 0
for (let i = 0; i < 3; i++) {
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = 7
        if (i == j) {
            somar += matriz[i][j]
        }
    }
}
console.table(matriz)
// Calculo da diagonal da matriz


console.log(somar)