let livro = {
    nome: "Assassin's Creed: Bandeira Negra",
    anoLancamento: "2013",
    autor: "Oliver Bowden",
    nrPaginas: "336",
    genero: "Ação",
    protagonista: "Edward Kenway",

    mostrarCaracteristicas: function () {
        return `${this.nome} é um livro que conta a história de ${this.protagonista}.`
    }
}

console.log(livro.mostrarCaracteristicas())
console.log(`Foi lançado em ${livro.anoLancamento}`)

function Anime(nome, maisForte, maisFraco, nota) {
    return {
        nome,
        maisForte,
        maisFraco,
        nota
    }
}

let anime1 = Anime('Naruto', 'Kakashi', 'Sakura', 5)
console.log(anime1)

// Estrutura FOR-IN
let jogadores = ['Neymar', 'Messi', 'CR7', 'Kaka', 'Pelé']

for (let key in jogadores) {
    console.log(jogadores[key])
}

// Estrutura FOR-OF
let time = 'Grêmio'
let times = ['Corinthians', 'Palmeiras', 'São Paulo']

for (let value of time) {
    console.log(value)
}

for (let value of times) {
    console.log(value)
}

// Calcular as médias das notas dos alunos de um professor e diga se a turma do professor está na média

let professor = {
    nome: 'Stark Parker',
    materia: 'Física',
    notas: {
        aluno1: [5, 2, 8],
        aluno2: [10, 7]
    }
}

let somaNotas = 0
let nrAlunos = 0

for (let aluno in professor.notas) {
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]
    nrAlunos++
}

let mediaProfessor = somaNotas / nrAlunos

if (mediaProfessor > 6) {
    console.log(`A média do professor é ${mediaProfessor}, ele está acima do padrão`)
} else {
    console.log(`A média do professor é ${mediaProfessor}, ele está abaixo do padrão`)
}



let livraria = [
    {titulo: '1984', autor: 'George Orwell', ano: 1984},
    {titulo: 'O profeta', autor: 'Endrew Berthold', ano: 2001},
    {titulo: 'Código Limpo', autor: 'Martin', ano: 2010},
    {titulo: 'O Velho e o Mar', autor: 'Hemmingway', ano: 1910},
    {titulo: 'O Príncipe', autor: 'Maquiável', ano: 2002}
]

// Usando FOR-IN
for (let livros in livraria) {
    if (livraria[livros].ano < 2000) {
        console.log(livraria[livros])
    }
}

// Usando FOR-OF
for (let livros of livraria) {
    if (livros.ano > 2000) {
        console.log(livros)
    }
}

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

// Função Recursiva
function fatorial(n) {
    if (n == 0) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

function somatorio(num) {
    if (num == 1) {
        return 1
    } else {
        return num + somatorio(num-1)
    }
}
console.log(somatorio(5))

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