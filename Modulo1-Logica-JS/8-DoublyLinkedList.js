class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0
    }

    inserirInicio(v) {
        let novo = new Node(v)
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }

        this.lenght++
    }

    inserirFim() {
        let novo = new Node(v)
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            this.tail = novo
        }

        this.lenght++
    }

    inserirEm(indice, valor) {
        if (indice < 0 || indice > this.lenght) throw RangeError('Índice fora dos limites')
        if (indice == 0) return this.inserirInicio(valor)
        if (indice == this, this.lenght) return this.inserirFim(valor)
        
        let atual = this.head

        for (let i = 0; i < indice.length; i++) {
            atual = atual.proximo
        }

        let novo = new Node(valor)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.lenght++
    }

    removerEm() {
        if (indice < 0 || indice > this.lenght) throw RangeError('Índice fora dos limites')
        
        let removido

        if (this.lenght == 1) {
            removido = this.head
            this.head = this.tail = null
        } else if (indice == 0) {
            removido = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if (indice == this.lenght - 1) {
            removido = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else {
            let atual = this.head
        }

        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        removido = atual
        const { proximo, anterior } = atual
        anterior.proximo = proximo
        proximo.anterior = anterior

        this.lenght--
    }

    imprimir() {
        let atual = this.head
        let str = ""
        while (atual) {
            str += atual.valor + ' -> '
            atual = atual.proximo
        }
        str += 'null'
        console.log(str)
    }
}

