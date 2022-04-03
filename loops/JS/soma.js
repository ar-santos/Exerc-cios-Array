const valores = [10,23,34,37,42,21,55,74]

var numero = 10

const funcaoParaSoma2 = (abacaxi, numero) => {
    let resultado = []

    for (let inicio = 0; inicio < abacaxi.length; inicio++) {
        let numeroDaLista = abacaxi[inicio]
        // pega o valor do abacaxi e soma com o valor do numero
        // numeroDaLista + numero
        // pega o valor somado e joga na array resultado
        resultado.push(numeroDaLista + numero)
    }
    return resultado

}

const retornoDaSoma = funcaoParaSoma2(valores, numero)

export default retornoDaSoma