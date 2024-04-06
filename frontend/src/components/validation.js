const validation = (userData) => {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if (!regexEmail.test(userData.email)) {
        errors.email = 'Debe ser un correo electrónico';

    }
    if (userData.email === "") { 
        errors.email = "el campo no puede estar vacio"
    }
    if (userData.email.length > 36) {
        errors.email = "debe  ser menor que 35 caracteres"
    }
    if (!/\d/.test(userData.password)) {
        errors.password = "tiene que contener un numero"
    }
    if (userData.password.length < 5) {
        errors.password = "la contraseña tiene que tener mayor o igual a 6 caracteres"
    }
    if(userData.password.length > 11){
        errors.password = "la contraseña tiene que tener menos de 11 caracteres"
    }
    

    return errors;
}

export default validation