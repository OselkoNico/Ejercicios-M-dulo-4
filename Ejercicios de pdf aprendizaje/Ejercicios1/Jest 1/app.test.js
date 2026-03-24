const {message, add} = require('./app');

describe('Sintaxis básica Jest', ()=> {
    test('Mensaje hola mundo',()=>{
        expect(message).toBe('Hola mundo!')
    })
    test('Función suma', () =>{
        expect(add(3,2)).toEqual(5);
    })
})