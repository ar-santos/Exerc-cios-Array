const valores = [10,11,12,13,14,15,16,17,18,19,20]

let numero = 5

const multiplicarOsNumeros = (valor, numero) => {
    let resultado = []

    for (let index = 0; index < valor.length; index++) {
        let numeroDaLista = valor[index]
        resultado.push(numeroDaLista * numero)
    }
    return resultado
}

const retornoDaSoma3 = multiplicarOsNumeros(valores, numero)

export default retornoDaSoma3