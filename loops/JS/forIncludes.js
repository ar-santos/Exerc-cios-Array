const listaDePalavras = [
    'Professor de Inglês',
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python'
]

const minhFuncao =( lista, palavra ) => {
    let valorAporcurar = palavra.toUpperCase()
    let valorEncontrado = []

    for (let index = 0; index < lista.length; index++) {

        let valorDaLista = lista[index].toUpperCase()
        if(valorDaLista.includes(valorAporcurar)) {
            valorEncontrado = lista[index];        
        }        
    }
    return valorEncontrado
}

const retornoMinhaFuncao = minhFuncao(listaDePalavras,"inglês")

export default retornoMinhaFuncao