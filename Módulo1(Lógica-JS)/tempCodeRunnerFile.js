
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