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
