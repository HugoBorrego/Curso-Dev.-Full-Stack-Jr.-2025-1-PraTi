
function nomesOrdenadosPorPreco(produtos) {
    let copia = produtos.slice()
    copia.sort((a, b) => a.preco - b.preco)

    let nomes = copia.map(prod => prod.nome)

    return nomes
}

let produtos = [
    { nome: 'Celular', preco: 4000 },
    { nome: 'Notebook', preco: 5000 },
    { nome: 'Caderno', preco: 30 }
]

console.log(nomesOrdenadosPorPreco(produtos))