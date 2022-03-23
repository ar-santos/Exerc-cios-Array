let marcasDePerfumes1 = ['O Boticário', 'Carolina Herrera', 'Hinode', 'Eudora']
let marcasDePerfumes2 = ['Chanel', 'Calvin Klein', 'Natura', 'Dolce & Gabbana']

const concatenar2 = (array1, array2) => {
    array2.forEach(item2 => {
        array1.push(item2)
    });
    return array1
}

let arrayModificador2 = concatenar2(marcasDePerfumes1,marcasDePerfumes2)
export default arrayModificador2