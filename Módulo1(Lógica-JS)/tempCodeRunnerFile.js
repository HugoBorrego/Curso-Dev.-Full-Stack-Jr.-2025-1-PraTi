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