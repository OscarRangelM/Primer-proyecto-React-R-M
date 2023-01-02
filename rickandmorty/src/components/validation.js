
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(inputs){
    let errors = {};
    if(!inputs.username) errors.username = "El nombre de usuario es requerido";
    else if(inputs.username.length > 35){ // Es un else if para que valide paso por paso y no todo de golpe.
        errors.username = "El nombre de usuario es demasiado lago";
    }else if(!regexEmail.test(inputs.username)){
        errors.username = "El nombre de usuario debe ser un email válido";
    }
    if(inputs.password.length < 6) errors.password = "La contraseña es demasiado corta";
    else if(inputs.password.length > 10){
        errors.password = "La contraseña es demasiado larga";
    }else if(!regexPassword.test(inputs.password)){
        errors.password = "La contraseña debe tener al menos un número";
    }

    return errors;
}