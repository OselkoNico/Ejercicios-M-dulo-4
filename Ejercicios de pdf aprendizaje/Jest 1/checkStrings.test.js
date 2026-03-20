const {userEmail, genderOptions} = require('./checkStrings');

describe('Matchers para strings y arrays', () => {
    test('Formato de correo electrónico correcto',() => {
        expect(userEmail).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        expect(genderOptions).toContain('hombre');
        expect(genderOptions).toContain('mujer');
    })
    test('Opciones para género incluyen hombre y mujer', () => {
        expect(genderOptions).toContain('hombre');
        expect(genderOptions).toContain('mujer');
    })
})