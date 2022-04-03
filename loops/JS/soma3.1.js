const valores = [1,2,3,4,500,600,800]

var numero = 50

const funcaoParaSoma = (valor, numero) => {
    let resultado = []

    for (let index = 0; index < valor.length; index++) {
        let numeroDaLista = valor[index]
        resultado.push(numeroDaLista + numero)
    }
    return resultado
}

const retornoDaSoma2 = funcaoParaSoma(valores, numero)

export default retornoDaSoma2