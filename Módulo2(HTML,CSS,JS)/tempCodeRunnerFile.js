
const minhaPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true
        if (false) {
            resolve("Dados carregados com sucesso!")
        } else {
            reject(new Error("Falha ao carregar os dados."))
        }
    }, 3000)

    console.log('Teste')
})

minhaPromisse.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log('Erro: ', error)
}).finally(() => {
    console.log("Operação concluída!")
})