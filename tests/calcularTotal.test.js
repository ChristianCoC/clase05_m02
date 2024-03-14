// Ejemplo basado en TDD
/* 
Calcular el total de una factura con un solo item.
Calcular el total de una factura con varios items.
Manejar correctamente una factura sin items.
La factura tiene que ser un array de objetos.
Ejemplo:
[{
    name: 'Item 1',
    price: 10
},
{
    name: 'Item 2',
    price: 20]
*/

const { calcularTotal } = require ('../index.js');

describe('Calcular el total de una factura', () => {
    it('Debería retornar el total de una factura con un solo item', () => {
        expect(calcularTotal([{
            name: 'Item 1',
            price: 10
        }])).toBe(10);
    });
});

describe('Calcular el total de una factura', () => {
    it('Debería retornar el total de una factura con varios items', () => {
        expect(calcularTotal([{
            name: 'Item 1',
            price: 10
        }, {
            name: 'Item 2',
            price: 20
        }])).toBe(30);
    });
});

describe('Calcular el total de una factura', () => {
    it('Debería retornar un error de "Factura invalida" en caso de una factura sin items', () => {
        expect(() => calcularTotal([])).toThrowError('Factura invalida');
    });
});