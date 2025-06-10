const string = 'olá olá mundo mundo'
let listaString = string.split(' ')

let palavrasUnicas = []

for(let i = 0; i < listaString.length; i++){
    if(!palavrasUnicas.includes(listaString[i])){
        palavrasUnicas.push(listaString[i])
    }
}

console.log(palavrasUnicas)
console.log(listaString)