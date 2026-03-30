const usuarios = [{
    nombre: 'Juan',
    apellidos: 'Perez',
    dni: '234'
}];

function coincidirDni(numeroDni){
    const usuario = usuarios.find(u=> u.dni === numeroDni);
    if(!usuario){
        return 'No existen coincidencias.';
    }
    return usuario;
}

module.exports = { coincidirDni };