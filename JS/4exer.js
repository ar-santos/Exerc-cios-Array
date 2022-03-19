let listaDeCarros1 = ['Fusca', 'Opala', 'Gol']
let listaDeCarros2 = ['Celta', 'Honda Fit', 'Corolla']

// const juntarArray = listaDeCarros2.push(juntar =>{
//     if(juntar.forEach(listaDeCarros1)) {
//         return juntar
//     }
// })

let juntarArray = [...listaDeCarros1, ...listaDeCarros2];

export default juntarArray