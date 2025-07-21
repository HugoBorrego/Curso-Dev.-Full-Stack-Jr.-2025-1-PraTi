class ContaBancaria {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor do depósito menor ou igual a zero.");
        }
        this.saldo += valor
    }

    sacar(valor) {
        if (valor <= 0 || valor > this.saldo) {
            throw new Error("Não é possivel sacar")
        }
        this.saldo -= valor
    }

    consultarSaldo() {
        return this.saldo
    }
}

module.exports = ContaBancaria