const valores = [1,2,3,4,5,6,7,8,9,10]

let soma = 10

const somaOsNumeros = valores.map(valor =>{
    return valor + soma
}).filter(valor =>{
    return valor >= 15
})

export default somaOsNumeros