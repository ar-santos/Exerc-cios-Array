const alfabeto = ['A','B','C','D','E']

const listaDoAlfabetoSemA = (lista, palavra) => {
    let valorAporcurar = palavra.toUpperCase()
    let valorEncontrado = []

    for (let index = 0; index < lista.length; index++) {

        let valorDaLista = lista[index].toUpperCase()
        if(!valorDaLista.includes(valorAporcurar)) {
            valorEncontrado.push(lista[index]);
        }
    }
    return valorEncontrado
}

const retornoMinhaFuncaoSemA = listaDoAlfabetoSemA(alfabeto,"a")

export default retornoMinhaFuncaoSemA