const formRegister = document.querySelector("#form-register");
const valInputApelido = document.querySelector("#div-apelido");
const valInputEmail = document.querySelector("#div-email");
const valInputPassword = document.querySelector("#div-password");
const inputs = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const buttonRegister = document.querySelector("#main-btn-register");
const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Adicionar e remover mensagem de erro:
function setErrorMessage(index) {
    inputs[index].style.border = "2px solid red";
    spans[index].style.display = "block";
}

function removeErrorMessage(index) {
    inputs[index].style.border = "2px solid green";
    spans[index].style.display = "none";
}

// Validações input Apelido:
function nameValidate() {
    let validated = false;
    if (valInputApelido.value.length < 3 || valInputApelido.value.length > 10) {
        setErrorMessage(0);
        buttonRegister.disabled = true;
        validated = false;
    } else {
        removeErrorMessage(0);
        buttonRegister.disabled = false;
        validated = true;
    }
    return validated;
}

//Validações input E-mail:

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
};

function emailValidate() {
    let validated = false;
    if (validateEmail(valInputEmail.value.trim())) {
        removeErrorMessage(1);
        buttonRegister.disabled = false;
        validated = true;
    } else {
        setErrorMessage(1);
        buttonRegister.disabled = true;
        validated = false;
    }
    return validated;
}

//Validações input senha:
function passwordValidate() {
    let validated = false;
    if (valInputPassword.value.length < 8) {
        setErrorMessage(2);
        buttonRegister.disabled = true;
        validated = false;
    } else {
        removeErrorMessage(2);
        buttonRegister.disabled = false;
        validated = true;
    }
    return validated;
}

//Validar se todos os campos estão corretos antes do envio:
inputs.forEach(function (input) {
    if (input.value == "") {
        buttonRegister.disabled = true;
    }
    input.addEventListener("keyup", () => {
        if (
            nameValidate() == true &&
            emailValidate() == true &&
            passwordValidate() == true
        ) {
            buttonRegister.disabled = false;
        } else {
            buttonRegister.disabled = true;
        }
    });
});
