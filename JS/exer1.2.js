const listaDeNumeros = ['10','11','12','13','14','15','16']

const listaDeNumerosSemDez = listaDeNumeros.filter(numero =>{
    if(!numero.includes('10')) {
        return numero
    }
})

export default listaDeNumerosSemDez
