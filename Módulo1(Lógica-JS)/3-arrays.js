let listaNomes = ['Arthur', 'Bruno', 'Carlos', 'Daniel', 'Edurardo']

for (let i = 0; i < listaNomes.length; i++) {
    console.log(listaNomes[i])  
}

let listaFrutas = Array()
listaFrutas[0] = 'Abacate' // Adicionando no array de indice 0
listaFrutas[1] = 'Banana' // Adicionando no array de indice 1

listaFrutas.push('Caqui') // Adicionando no final do array
listaFrutas.unshift('Melancia') // Adicionando no começo do array
listaFrutas.push('pop')
listaFrutas.pop() // Excluindo o último do array
listaFrutas.unshift() // Excluindo no começo do array

for (let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i])  
}

console.table(listaFrutas) // Mostra uma tabela com todos os elementos