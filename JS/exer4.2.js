let listaDeNumeros1 = [5,6,7,8,9,10]
let listaDeNumeros2 = [11,12,13,14,15]

const concatenar3 = (array1, array2) => {
    array2.forEach( item => {
        array1.push(item)
    });
    return array1
}

let arrayModificador3 = concatenar3(listaDeNumeros1,listaDeNumeros2)
export default arrayModificador3