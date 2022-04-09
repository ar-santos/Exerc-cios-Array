const alfabeto = ['A','B','C','D','E']

const listaDoAlfabetoSomenteA = (lista, letra) => {
    let valorAporcurar = letra.toUpperCase()
    let valorEncontrado = []

    for (let index = 0; index < lista.length; index++) {

        let valorDaLista = lista[index].toUpperCase()
        if(valorDaLista.includes(valorAporcurar)) {
            valorEncontrado.push(lista[index]);
        }
    }
    return valorEncontrado
}

const retornoMinhaFuncaoComA = listaDoAlfabetoSomenteA(alfabeto,"a")

export default retornoMinhaFuncaoComA