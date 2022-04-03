let numeros1 = [100,200,300,400,500]
let numeros2 = [600,700,800,900,1000]

const concatenar4 = (lista1, lista2) => {
    for (let index = 0; index < lista2.length; index++) {
        lista1.push(lista2[index])
    }
    return lista1
}

const arrayModificador4 = concatenar4(numeros1,numeros2)

export default arrayModificador4