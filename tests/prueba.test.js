const { mockCalcularTotal } = require('../index.js');

describe('Prueba', () => {
    it('Este test pasa siempre', () => {
        expect(true).toBe(true)
    });
});

/* Simulación de la función mockCalcularTotal para asegurarnos 
que la prueba y el callback se ejecute */
const mockDatabase = jest.fn(() => {
    return [
        {
            name: 'Item 1',
            price: 10
        },
        {
            name: 'Item 2',
            price: 20
        }
    ]
});

describe('En la función mockCalcularTotal', () =>
    it('La función database que paso como parámetro debe ejecutarse al menos una vez', () => {
        mockCalcularTotal(mockDatabase);
        expect(mockDatabase).toHaveBeenCalled();
    }))