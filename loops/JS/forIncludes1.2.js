const listaDeNumeros = ['10','11','12','13','14','15','16']

const listaDeNumerosSemDez = (lista, palavra) => {
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

const retornoMinhaFuncaoSemDez = listaDeNumerosSemDez(listaDeNumeros, '10')

export default retornoMinhaFuncaoSemDez