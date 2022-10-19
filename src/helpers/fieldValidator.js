
function userNameValidator(userName) {
    if (!userName) return "userName can't be empty."
    if (userName.length < 5) return 'userName must be at least 5 characters long.'
    return ''
}

function passwordValidator(password) {
    if (!password) return "Password can't be empty."
    if (password.length < 5) return 'Password must be at least 5 characters long.'
    return ''
}

export { 
  userNameValidator, 
  passwordValidator
}