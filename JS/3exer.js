const valores = [0,1,2,5,6,7,10,9,3,4,15,40]

var multiplicador = 2

const valoresSomar = valores.map(Valor => { 
    return multiplicador * Valor
}).filter(Valor => {
    return Valor >= 5
})

export default valoresSomar