let numeros1 = [100,200,300,400,500]
let numeros2 = [600,700,800,900,1000]

const concatenar = (array1, array2) => {
    array2.forEach(item => {
        array1.push(item)
    });
    return array1
}

let arrayJuntos = concatenar(numeros1,numeros2)
export default arrayJuntos