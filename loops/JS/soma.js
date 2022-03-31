const valores = [10,23,34,37,42,21,55,74]

var soma = 10

const funcaoParaSoma = valores.map(valor => { 
    for (let index = 0; index < valor; index++){
    return soma + valor
}
}).filter(valor => {
    return valor >= 5
})

export default funcaoParaSoma