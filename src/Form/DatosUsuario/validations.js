
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
