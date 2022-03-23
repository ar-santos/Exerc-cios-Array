const valores = [1,2,3,4,500,600,800]

var adiciona = 50

const somarOsValores = valores.map(quantidade =>{
    return adiciona + quantidade
}).filter(quantidade =>{
    return quantidade >= 100
})

export default somarOsValores