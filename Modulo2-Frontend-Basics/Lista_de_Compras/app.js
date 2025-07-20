const formAdicionar = document.getElementById('form-adicionar')
const inputItem = document.getElementById('input-item')
const listaItens = document.getElementById('lista-itens')
const btnLimpar = document.getElementById('btn-limpar')
const filtroStatus = document.getElementById('filtro-status')
const ordenar = document.getElementById('ordenar')
const contadorTotal = document.getElementById('contador-total')
const contadorPendente = document.getElementById('contador-pendentes')
const contadorComprado = document.getElementById('contador-comprados')

let itens = []

window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras')
    if (dados) {
        itens = JSON.parse(dados)
        renderizarLista()
    }
})

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function renderizarLista() {

    let exibicao = [...itens]
    const status = filtroStatus.value

    if (status === 'pending') {
        exibicao = exibicao.filter(i => !i.purchased)
    } else if (status === 'purchased') {
        exibicao = exibicao.filter(i => i.purchased)
    }

    if (ordenar.value === 'alphabetical') {
        exibicao.sort((a, b) => a.text.localeCompare(b.text))
    } else if (ordenar.value === 'status') {
        exibicao.sort((a, b) => a.purchased - b.purchased)
    }

    listaItens.innerHTML = ''
    exibicao.forEach((item, index) => {

        const li = document.createElement('li')

        const span = document.createElement('span')
        span.textContent = item.text
        if (item.purchased) {
            span.classList.add('comprado')
        } else {
            span.classList.remove('comprado')
        }


        const btnToggle = document.createElement('button')
        btnToggle.textContent = item.purchased ? 'Marcar Pendente' : 'Marcar Comprado'
        btnToggle.addEventListener('click', () => {
            item.purchased = !item.purchased
            salvarDados()
            renderizarLista()
        })
        li.appendChild(btnToggle)

        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.title = 'Remover Item'

        btnRemover.addEventListener('click', () => {
            removerItem(index)
        })

        li.append(span, btnRemover)
        listaItens.appendChild(li)
    })

    const pendentes = itens.filter(i => !i.purchased).length
    const comprados = itens.filter(i => i.purchased).length

    contadorTotal.textContent = `Total: ${itens.length}`
    contadorPendente.textContent = `Pendentes: ${pendentes}`
    contadorComprado.textContent = `Comprados: ${comprados}`
}

filtroStatus.addEventListener('change', renderizarLista)
ordenar.addEventListener('change', renderizarLista)

formAdicionar.addEventListener('submit', (event) => {
    event.preventDefault()
    const novoItem = inputItem.value.trim()
    if (!novoItem) return

    const existe = itens.some(i => i.text.toLowerCase() === novoItem.toLowerCase())
    if (existe) {
        /* alert('Este item já está na lista!') */
        inputItem.value = ''
        return
    }

    itens.push({ text: novoItem, purchased: false })
    salvarDados()
    renderizarLista()
    inputItem.value = ''
})

function removerItem(indice) {
    itens.splice(indice, 1)
    salvarDados()
    renderizarLista()
}

btnLimpar.addEventListener('click', () => {
    if (confirm('Deseja limpar toda a Lista?')) {
        itens = []
        salvarDados()
        renderizarLista()
    }
})
