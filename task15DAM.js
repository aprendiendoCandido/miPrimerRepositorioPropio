/*
Your JavaScript must check:

    1)The name must have more than 5 characters.
    2)The password must have more than 8 characters.
    3)Password and confirm password must match.
    All fields are required.
*/
const refLoginForm = document.getElementById("loginForm");

const refUsername = document.getElementById("username");
const refNameError = document.getElementById("nameError")

const refPassword = document.getElementById("password");
const refPasswordError = document.getElementById("passwordError")


const refConfirmPassword = document.getElementById("confirm");
const refConfirmPasswordError = document.getElementById("confirmError")

const refMessage = document.getElementById("message")


refLoginForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(allRequired()){
        refMessage.textContent = "Datos validos!!!"
    }else{
        refMessage.textContent = "Datos invalidos"
    }
})

function validateName(){
    let valorName = refUsername.value
    if(valorName.length < 5){
        refNameError.textContent = "El nombre de usuario ha de tener al menos 5 caracteres"
        return false
    }else{
        refNameError.textContent = ""
        return true
    }
}
function validatePassword(){
    let valorPassword = refPassword.value
    if(valorPassword.length < 8){
        refPasswordError.textContent = "La passW ha de tener como minimo 8 caracteres"
        return false
    }else{
        refPasswordError.textContent = ""
        return true
    }
}
function confirmPassword(){
    let valorPassword = refPassword.value
    let valorConfirmPassword = refConfirmPassword.value
    if(valorConfirmPassword != valorPassword){
        refConfirmPasswordError.textContent = "Las passWords han de coincidir   "
        return false
    }else{
        refConfirmPasswordError.textContent = ""
        return true
    }
}
function allRequired(){
    let okName = validateName()
    let okPassword = validatePassword()
    let okConfirm = confirmPassword()
    return (okName && okPassword && okConfirm)
}