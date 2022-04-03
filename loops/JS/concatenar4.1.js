var listaDeCarros1 = ['Fusca', 'Opala', 'Gol']
var listaDeCarros2 = ['Celta', 'Honda Fit', 'Corolla']

const concatenar2 = (lista1, lista2) => {
    for (let index = 0; index < lista2.length; index++) {
        lista1.push(lista2[index])
    }
    return lista1
}

const arrayModificador2 = concatenar2(listaDeCarros1,listaDeCarros2)

export default arrayModificador2