let listaDeNumeros1 = [5,6,7,8,9,10]
let listaDeNumeros2 = [11,12,13,14,15]

const concatenar3 = (lista1, lista2) => {
    for (let index = 0; index < lista2.length; index++) {
        lista1.push(lista2[index])
    }
    return lista1
}

const arrayModificador3 = concatenar3(listaDeNumeros1,listaDeNumeros2)

export default arrayModificador3