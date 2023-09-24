
export const validateEmail = (email) => {
    const length = email.length;
    return ( length > 8 && length < 50 && email.includes("@") ) ? true : false
}

export const validatePassword = (password) => {
    const length = password.length;
    return ( length > 8 && length < 50 ) ? true : false;
}

export const validateName = (name) => {
    const length = name.length;
    return ( length >= 3 && length < 50  ) ? true : false;
}

export const validateLastName = (lastName) => {
    const length = lastName.length;
    return ( length >= 3 && length < 50  ) ? true : false;
}

export const validatePhone = (phone) => {
    const length = phone.length;
    return ( length === 10 && length < 11 ) ? true : false
}