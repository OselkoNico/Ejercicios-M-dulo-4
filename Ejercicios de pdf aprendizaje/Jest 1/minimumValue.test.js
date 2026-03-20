const minimumValue = require('./minimumValue');

describe('Matchers de comprobación numérica', () =>{
    const x = 50;
    const y = 150;
    test('Valor mínimo 100', () =>{
        expect(minimumValue(x, y)).toBeGreaterThanOrEqual(100);
        expect(minimumValue(y, x)).toBeGreaterThanOrEqual(100);
        expect(minimumValue(x, x)).toBeGreaterThanOrEqual(100);
    })
})