const listaDePalavras = [
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python',
    'Professor de Inglês',
]

const listaPalavraComIngles = listaDePalavras.filter( frase => {
    if(frase.includes("Inglês")) {
        return frase 
    }
})


export default listaPalavraComIngles