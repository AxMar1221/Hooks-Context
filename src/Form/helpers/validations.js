
export const validateEmail = (email) => {
    const length = email.length;
    if ( length > 8 && length < 50 && email.includes("@") ) {
        return true
    } else {
        return false
    }
}

export const validatePassword = (password) => {
    const length = password.length;
    if ( length > 8 && length < 50 ) {
        return true
    } else {
        return false
    }
}

export const validateName = (name) => {
    const length = name.length;
    if ( length >= 3 && length < 50  ) {
        return true
    } else {
        return false
    }
}

export const validateLastName = (lastName) => {
    const length = lastName.length;
    if ( length >= 3 && length < 50  ) {
        return true
    } else {
        return false
    }
}

export const validatePhone = (phone) => {
    const length = phone.length;
    if ( length >= 10 && length < 11 ) {
        return true
    } else {
        return false
    }
}