let marcasDePerfumes1 = ['O Boticário', 'Carolina Herrera', 'Hinode', 'Eudora']
let marcasDePerfumes2 = ['Chanel', 'Calvin Klein', 'Natura', 'Dolce & Gabbana']

const concatenar = (lista1, lista2) => {
    for (let index = 0; index < lista2.length; index++) {
        lista1.push(lista2[index])
    }
    return lista1
}

const arrayModificador = concatenar(marcasDePerfumes1,marcasDePerfumes2)

export default arrayModificador