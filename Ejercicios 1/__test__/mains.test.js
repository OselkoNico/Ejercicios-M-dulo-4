const { coincidirDni } = require('../mains.js');

describe('Función de comprobación de DNI', ()=>{
    test('Encuentra usuario por DNI', () => {
        const resultado = coincidirDni('234');
        expect(resultado.dni).toBe('234');
    });
    test('devuelve mensaje si no existe', () => {
        const resultado = coincidirDni('000');
        expect(resultado).toBe('No existen coincidencias.')
    });
});