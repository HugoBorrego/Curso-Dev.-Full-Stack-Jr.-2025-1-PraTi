function MaiorNumero(arr1) {
    let maiorNumero = arr1[0]
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > maiorNumero) {
            maiorNumero = arr1[i]
        }
    }
    return maiorNumero
}
console.log(MaiorNumero([5, 8, 2, 7, 3]))