let categorias = [
    {
        id: 1,
        nome: 'Eletrônicos',
        filhos: [ 
            { id: 2, nome: 'Celulares', filhos: [] },
            { id: 3, nome: 'Computadores', filhos: [
                {id: 4, nome: 'Tablets', filhos: []}
            ] }
        ]},
    {
        id: 5,
        nome: 'Louças',
        filhos: []
    }
]

// Função recursiva para imprimir somente os nomes
function imprimirCategorias(lista, nivel = 0) {
    for (let categoria of lista) {
        console.log(' '.repeat(nivel * 2) + categoria.nome)
        if (categoria.filhos.length > 0) {
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}

imprimirCategorias(categorias)