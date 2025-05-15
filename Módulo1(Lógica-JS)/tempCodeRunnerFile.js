let filmes = [
    {nome: 'Deadpool', genero: 'Ação'},
    {nome: 'John Wick', genero: 'Ação'},
    {nome: 'Mad Max: Estrada da Fúria', genero: 'Ação'},
    {nome: 'Logan', genero: 'Drama'},
    {nome: 'Blade Runner 2049', genero: 'Ficção Científica'},
    {nome: 'O Exterminador do Futuro 2', genero: 'Ficção Científica'},
    {nome: 'Aliens, O Resgate', genero: 'Ficção Científica'},
    {nome: 'Halloween', genero: 'Terror'},
    {nome: 'O Iluminado', genero: 'Terror'},
    {nome: 'Clube da Luta', genero: 'Suspense'},
    {nome: 'O Poderoso Chefão', genero: 'Drama'},
    {nome: 'Batman: O Cavaleiro das Trevas', genero: 'Crime'},
    {nome: 'Senhor dos Anéis: O Retorno do Rei', genero: 'Fantasia'},
    {nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: 'Fantasia'},
    {nome: 'La La Land', genero: 'Romance'}
];

let contagemFilmes = {}
filmes.forEach((filme) => {
    if (contagemFilmes[filme.genero]) {
        contagemFilmes[filme.genero]++
    } else {
        contagemFilmes[filme.genero] = 1
    }
})

console.table(contagemFilmes)