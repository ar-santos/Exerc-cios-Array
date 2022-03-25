const alfabeto = ['A','B','C','D','E']

const SomenteALetraA = alfabeto.filter(letra => {
    if(letra.includes('A')) {
        return letra
    }
})

export default SomenteALetraA