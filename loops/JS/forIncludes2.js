const listaDePalavras = [
    'Professor de Inglês',
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python'
]

const minhFuncao = (lista) => {
    for (let index = 0; index < lista.length; index++) {
        if(!lista.includes('Inglês')) {
            return lista;        
        }        
    }
}

let retornoDaFuncao = minhFuncao('Inglês')

export default retornoDaFuncao