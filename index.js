import listaPalavraSemIngles from './JS/1exer.js'
import listaPalavraComIngles from './JS/2exer.js'
import somarValores from './JS/3exer.js'
import arrayModificador from './JS/4exer.js'

console.log(listaPalavraSemIngles)
console.log(listaPalavraComIngles)
console.log(somarValores)
console.log(arrayModificador)


var palavra = 'casa'
const  palavras = ['carro','navio','moto','casa']

const palavrasMaiuscula = palavras.map(maiuscula => {
    return maiuscula.toUpperCase()
}).filter(maiuscula =>{
    return maiuscula !== palavra.toUpperCase()
})

console.log(palavrasMaiuscula)

const numeros = [0,1,2,3,4,5,55,6,7,54,4]

var somar = 5;

const numerosSomar = numeros.map(valor => {
    return somar + valor
})
 
console.log(numerosSomar)

// ---------------------------||--------------------

let a = ['a','b']
let b = ['c','d']

const Concat = (arreyA, arreyB) => {
    let novo = []
    arreyA.forEach( ele => {
        novo.push(ele)          
    });
   return novo}

console.log( Concat(a,b))