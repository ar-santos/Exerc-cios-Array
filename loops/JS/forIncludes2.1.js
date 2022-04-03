const listaDeTimes = ['Guarani', 'Ituano', 'Ferroviária', 'Àgua Santa']

const listaDeTimesSomenteGuarani = (lista, palavra) => {
    let valorAporcurar = palavra.toUpperCase()
    let valorEncontrado = []

    for (let index = 0; index < lista.length; index++)  {
        
        let valorDaLista = lista[index].toUpperCase()
        if (valorDaLista.includes(valorAporcurar)) {
            valorEncontrado.push(lista[index]);
        }
    }
    return valorEncontrado
}

const retornoMinhaFuncaoComGuarani = listaDeTimesSomenteGuarani(listaDeTimes,"guarani")

export default retornoMinhaFuncaoComGuarani