const listaDePalavras = [
    'Professor de Inglês',
    'Professor de CSS',
    'Professor de HTML',
    'Professor de JavaScript',
    'Professor de Python'
]

const listaPalavraSemIngles= listaDePalavras.filter(frase => {
    if(!frase.includes("Inglês")) {
        return frase
    }
})

export default listaPalavraSemIngles