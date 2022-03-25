const alfabeto = ['A','B','C','D','E']

const listaDoAlfabetoSemA = alfabeto.filter(letra =>{
    if(!letra.includes('A')) {
        return letra
    }
})

export default listaDoAlfabetoSemA
