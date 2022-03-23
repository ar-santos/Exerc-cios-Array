const listaDeTimes = ['Guarani', 'Ituano', 'Ferroviária', 'Àgua Santa']

const listaDeTimesSemGuarani = listaDeTimes.filter(time => {
    if(!time.includes('Guarani')) {
        return time
    }
})

export default listaDeTimesSemGuarani