// --- Seção 1: Estruturas de Controle Avançadas ---

/* 1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. */
function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false
    }

    const diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (mes === 2 && (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0))) {
        diasDoMes[1] = 29
    }

    return dia <= diasDoMes[mes - 1];
}

/* 2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */
const prompt = require('prompt-sync')()

let numero = Math.floor(Math.random() * 100) + 1
let tentativas = 0

do {
    valorUsuario = parseInt(prompt('Digite um número: '))
    if (valorUsuario > numero) {
        console.log('Mais baixo.')
    } else {
        console.log('Mais alto.')
    }
    tentativas++
} while (numero != valorUsuario)

console.log('Parabéns, você acertou!!')
console.log('A quantidade de tentativas foi ' + tentativas)

/* 3. Palavras Únicas 
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. */
const string = 'olá olá mundo mundo'
let listaString = string.split(' ')

let palavrasUnicas = []

for(let i = 0; i < listaString.length; i++){
    if(!palavrasUnicas.includes(listaString[i])){
        palavrasUnicas.push(listaString[i])
    }
}

console.log(palavrasUnicas)


// --- Seção 2: Funções e Recursão ---

/* 4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. */
function fatorial(n) {
    if (n < 0) {
        throw new Error("Não é possível fazer o fatorial para números negativos.");
    }

    if (n === 0) {
        return 1
    } return n * fatorial(n - 1)
}

/* 5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo. */
function debounce(fn, delay) {
    let timer = null

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

/* 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. */
function memoize(fn) {
    const cache = new Map()

    return function(...args) {
        const key = JSON.stringify(args)

        if(cache.has(key)) {
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

const fastFib = memoize(function fibonacci(n) {
    if (n < 2) return n
    return fastFib(n - 1) + fastFib(n - 2)
})


// --- Seção 3: Arrays e Objetos Complexos ---

/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. */
let produtos = [
    {
        nome: String,
        preco: Number
    }
]

function nomesOrdenadosPorPreco(produtos) {
    let copia = produtos.slice()
    copia.sort((a, b) => a.preco - b.preco)

    let nomes = copia.map(prod => prod.nome)

    return nomes
}

/* 8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. */
let vendas = [
    {
        cliente: String,
        total: Number
    }
]

function agruparPorCliente(vendas) {
    return vendas.reduce((acc, { cliente, total }) => {
        acc[cliente] = (acc[cliente] || 0) + total
        return acc;
    }, {})
}

/* 9. Conversão Entre Formatos
Escreva duas funções:
- ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
- ○ objetoParaPares(obj) faz o inverso, retornando um array de pares. */
function paresParaObjeto(pares) {
    return Object.fromEntries(pares)
}

function objetoParaPares(obj) {
    return Object.entries(obj)
}

let pares = [["nome", "Hugo"], ["idade", 23], ["cidade", "Taubaté"]]

let objeto = paresParaObjeto(pares)
console.log(objeto)

let novoPares = objetoParaPares(objeto)
console.log(novoPares) 