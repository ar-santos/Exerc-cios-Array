const listaDePalavras = [
    'Professor de Inglês',
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python'
]

const minhFuncao = listaDePalavras.filter(lista => {
    for (let index = 0; index < lista.length; index++) {
        if(!lista.includes('Inglês')) {
            return lista;        
        }        
    }
})

export default minhFuncao