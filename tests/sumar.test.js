const { sum } = require('../index.js');

// Creamos un mock de la función sumar
const mockSum = jest.fn(sum);

// Testing para la función sumar
describe('La función sumar', () => {
    it('debe sumar dos números', () => {
        expect(mockSum(1, 2)).toBe(3);
        expect(mockSum(0, 0)).toBe(0);
        expect(mockSum(-1, 1)).toBe(0);
        expect(mockSum(-1, -1)).toBe(-2);
    });
    it('debe retornar null si los argumentos no son números', () => {
        expect(mockSum(1, '2')).toBeNull();
        expect(mockSum('2', 2)).toBeNull();
        expect(mockSum('2', '2')).toBeNull();
        expect(mockSum(1, true)).toBeNull();
        expect(mockSum(false, 1)).toBeNull();
        // Consultamos la información del mock por consola
        console.log(mockSum.mock);
    });
    // Matchers
    // Verificamos si la función sumar se ha llamado con los argumentos 1 y 2
    it('debe haber registrado la suma de 1 y 2', () => {
        expect(mockSum).toHaveBeenCalledWith(1, 2);
    })
})