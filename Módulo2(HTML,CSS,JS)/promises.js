function putWaterToBoil() {
    console.log('Boil the water.')
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We have boiled water')
            resolve()
        }, 5000)
    })
}

function getReadyToMakeCoffee() {
    console.log('Grind coffee beans.')
    console.log('Line the basket of your coffee maker with a filter.')
    console.log('Wet the filter, and let it drain into your cup.')
    console.log('Discard the wather in the cup.')
    console.log('Measure the ground coffee into the wet filter.')
}

function makeCoffee() {
    console.log('Pour water to wet the ground beans and drain into your cup.')
}

putWaterToBoil()
.then(getReadyToMakeCoffee)
.then(makeCoffee)
.then(() => {
    console.log('Your coffee is ready!')
})
.catch((error) => {
    console.error('Something went wrong: ', error)
})

// -------------------------------------------------------------------------

Promise.all([putWaterToBoil(), Promise.resolve(getReadyToMakeCoffee())])
.then(makeCoffee)
.then(() => {
    console.log('Your coffee is ready!')
})

/* Promise.all é uma função que executa as funções em paralelo, quando estiverem prontas ele retorna o resultado na ordem que está o código */

// -------------------------------------------------------------------------

async function makeCoffeeRoutine() {
    try {
        await putWaterToBoil()
        getReadyToMakeCoffee()
        makeCoffee()
        console.log('Your coffee is ready!')
    } catch (error) {
        console.error('Something went wrong: ', error)
    }
}
makeCoffeeRoutine()

// -------------------------------------------------------------------------

function iniciarCorrida() {
    console.log('Preparar...')
    console.log('Apontar...')
    console.log('Já')
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('O número 10 está na frente.')
            resolve()
        }, 5000)
    })
}

function naracao() {
    console.log('Iniciou a corrida.')
    console.log('O número 10 iniciou em último mas esta se recuperando.')
}

iniciarCorrida()
.then(naracao())
.then(() => {
    console.log('O número 10 ganhou.')
})
.catch((error) => {
    console.log('A corrida foi cancelada.')
})

// -------------------------------------------------------------------------