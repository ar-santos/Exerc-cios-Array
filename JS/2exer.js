const listaDePalavras = [
    'Professor de Inglês',
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python'
]

const listaPalavras = listaDePalavras.filter(Palavras => {
    if(Palavras.includes("Inglês")) {
        return listaDePalavras
    }
})

export default listaPalavras