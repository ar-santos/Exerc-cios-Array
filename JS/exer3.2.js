const valores = [10,11,12,13,14,15,16,17,18,19,20]

let multiplicar = 5

const multiplicarOsNumeros = valores.map(valor =>{
    return multiplicar * valor
}).filter(valor =>{
    return valor >= 70
})

export default multiplicarOsNumeros