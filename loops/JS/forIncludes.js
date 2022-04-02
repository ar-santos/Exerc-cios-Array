const listaDePalavras = [
    'Professor de Inglês',
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python'
]

 // index < lista.length
 // O index é menor que o tamanho da lista?

const minhFuncao =( lista, palavra ) => {
    let valorAporcurar = palavra.toUpperCase()
    let valorEncontrado = []

    for (let index = 0; index < lista.length; index++) {

        let valorDaLista = lista[index].toUpperCase()
        if(valorDaLista.includes(valorAporcurar)) {
            valorEncontrado.push(lista[index]);        
        }        
    }
    return valorEncontrado
}

const retornoMinhaFuncao = minhFuncao(listaDePalavras,"inglês")

export default retornoMinhaFuncao