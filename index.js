const { database } = require('./dataBase.js');

// Función suma para testing
const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return null; {
        const suma = a + b;
        return suma;
    }
};

// Función para calcular el total
const calcularTotal = (items) => {
    if (!items.length) throw Error('Factura invalida');
    let total = 0;
    for (const item of items) {
        total += item.price;
    }
    return total;
}

// Función para mockear el total
const mockCalcularTotal = (database) => {
    const items = database();
    let total = 0;
    for (const item of items) {
        total += item.price;
    }
    return total;
}

console.log(mockCalcularTotal(database));

module.exports = {
    sum,
    calcularTotal,
    mockCalcularTotal
}