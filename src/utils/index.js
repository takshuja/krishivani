function checkPassword(password, password1) {
    if (password != password1) {
        return {
            is_valid: false,
            msg: 'Passwords do not match!'
        }
    }

    else if (password.length < 6) {
        return {
            is_valid: false,
            msg: 'Password must be at least 6 characters long'
        }
    }

    return {
        is_valid: true,
        msg: 'Password is valid.'
    }
}


function validateInput(email, password) {
    const errors = {};

    // Email validation
    if (!email) {
        errors.email = "Email is required.";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = "Invalid email address.";
        }
    }

    // Password validation
    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
}




export { checkPassword, validateInput };