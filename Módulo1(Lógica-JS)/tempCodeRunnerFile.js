let date1 = new Date(2014, 10, 29)
let date2 = new Date(2025, 5, 13)

console.log(date1.getTime()) // Da o valor em milisegundos

let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
let milisegundosPorDia = (24 * 60 * 60 * 1000)
console.log(`A diferença entre as datas por dia é ${(milissegundosEntreDatas/milisegundosPorDia).toFixed(0)}`)