
const notEmpty = (inputValue) => {
    return /^\s*$/.test(inputValue) ? 'Campo vacio' : null;
};

const checkError = (inputName, inputValue) => {

    switch (inputName) {

        case 'userName':
            // eslint-disable-next-line
            if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(inputValue)){
                return 'El nombre solo puede contener letras' || notEmpty(inputValue);
            };
            break;
        case 'email':
            
            if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(inputValue) ){
                return 'Porfavor escriba un email valido' || notEmpty(inputValue);
            };    
            break;
        case 'password':
        
            // eslint-disable-next-line
            if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(inputValue)){
                return 'La contraseña debe contener 8 caracteres, mayúsculas, minúsculas, números y caracteres especiales' || notEmpty(inputValue);
            };
            break;    
        default:
            break;
    }
};

const validateFields = (dataState) => {
    let results = {};

    for (let field in dataState) {
        results[field] = checkError(field, dataState[field]);
    }
    return results;
}

const isValid = (validation) => {
    for (const field in validation) {
        const error = validation[field];
        if (error) {
            return false;
        }
    }
    return true;
}
export { checkError, validateFields, isValid };