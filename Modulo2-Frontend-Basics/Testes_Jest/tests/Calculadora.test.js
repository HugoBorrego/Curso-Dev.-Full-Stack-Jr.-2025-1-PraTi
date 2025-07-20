const Calculadora = require('../src/Calculadora')

describe('Testando a classe Calculadora', () => {
    let calc

    beforeEach(() => {
        calc = new Calculadora()
    })

    test('Deve somar dois números corretamente: ', () => {
        expect(calc.somar(2, 3)).toBe(5)
        expect(calc.somar(1, 5)).toBe(6)
        expect(calc.somar(4, 6)).toBe(10)
    })
    
    test('Deve subtrair dois números corretamente: ', () => {
        expect(calc.subtrair(2, 3)).toBe(-1)
        expect(calc.subtrair(5, 1)).toBe(4)
        expect(calc.subtrair(10, 6)).toBe(4)
    })

    test('Deve multiplicar dois números corretamente: ', () => {
        expect(calc.multiplicar(2, 3)).toBe(6)
        expect(calc.multiplicar(1, 5)).toBe(5)
        expect(calc.multiplicar(4, 2)).toBe(8)
    })

    test('Deve dividir dois números corretamente: ', () => {
        expect(calc.dividir(6, 3)).toBe(2)
        expect(calc.dividir(10, 5)).toBe(2)
        expect(calc.dividir(24, 6)).toBe(4)
    })

})