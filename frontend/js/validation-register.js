const formRegister = document.querySelector('#form-register');
const valInputApelido = document.querySelector('#div-apelido');
const valInputEmail = document.querySelector('#div-email');
const valInputPassword = document.querySelector('#div-password');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Adicionar e remover mensagem de erro:
function setErrorMessage(index){
    inputs[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeErrorMessage(index){
    inputs[index].style.border = '2px solid green';
    spans[index].style.display = 'none';
}

// Validações input Apelido:
function nameValidate() {
    if(valInputApelido.value.length < 3){
        setErrorMessage(0);
    } else{
        removeErrorMessage(0);
    };
}


//Validações input E-mail:

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  };

function emailValidate() {
    if(validateEmail(valInputEmail.value)){
        removeErrorMessage(1);
    } else{
        setErrorMessage(1);
        
    };
}

//Validações input senha:
function passwordValidate() {
    if(valInputPassword.value.length < 8){
        setErrorMessage(2);
    } else{
        removeErrorMessage(2);
    };
}