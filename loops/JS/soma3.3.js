const valores = [1,2,3,4,5,6,7,8,9,10]

let numero = 10;

const somaOsNumeros = (valor, numero) => {
    let resultado = []

    for (let index = 0; index < valor.length; index++) {
        let numeroDaLista = valor[index]
        resultado.push(numeroDaLista + numero)
    }
    return resultado
}

const retornoDaSoma3 = somaOsNumeros(valores, numero)

export default retornoDaSoma3