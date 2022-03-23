const marcasDeRoupas = ['Lacoste', 'Adidas', 'Oakley', 'Mizuno']

const marcasDeRoupasSomenteLascoste = marcasDeRoupas.filter(marcas => {
    if(marcas.includes('Lacoste')) {
        return marcas
    }
})

export default marcasDeRoupasSomenteLascoste