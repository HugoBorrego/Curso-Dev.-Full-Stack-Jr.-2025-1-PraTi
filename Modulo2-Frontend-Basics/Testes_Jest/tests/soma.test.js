const soma = require('../src/soma')

test('Soma 2 + 3 de ser igual a 5', () => {
    expect(soma(2, 3)).toBe(5)
})

/* 
    - Entrar no terminal bash
    - Chegar a pasta "Curso-Dev.-Full-Stack-Jr.-2025-1-PraTi/Modulo2-Frontend-Basics/Testes_Jest/tests "
    - E colocar npm test
*/

/* 
    Para funcionar precisa baixar o Jest com "npm install jest"
    Alterar o package.json para ficar "test": "jest"
    E o arquivo de teste tem que ter .test.js
*/

test('Soma de 5 + 1 deve ser 6: ', () => {
    expect(soma(5, 1)).toBe(6)
})

test('Soma -1 + 1 deve ser 0: ', () => {
    expect(soma(-1, 1)).toBe(0)
})