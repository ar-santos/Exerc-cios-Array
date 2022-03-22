var listaDeCarros1 = ['Fusca', 'Opala', 'Gol']
var listaDeCarros2 = ['Celta', 'Honda Fit', 'Corolla']

/**
 Construa uma função que vai usar a função forEach e Push para adiciona
 os carros da lista 2 na lista 1 e retornar uma nova lista de carros
 */

const concatenar = (array1, array2) => {
    array2.forEach( item => {
        array1.push(item)         
    })
    return array1
}

let arrayModificador = concatenar(listaDeCarros1,listaDeCarros2)
export default arrayModificador