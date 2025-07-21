const ContaBancaria = require('../src/ContaBancaria')

describe('Testando a Conta Bancaria', () => {
    let conta1

    beforeEach(() => {
        conta1 = new ContaBancaria('Conta1')
    })

    test('Verificação de depósito', () => {
        conta1.depositar(100)
        expect(conta1.consultarSaldo()).toBe(100)
    })
    
    test('Verificação de saque', () => {
        conta1.depositar(100)
        conta1.sacar(20)
        expect(conta1.consultarSaldo()).toBe(80)
    })
    
})