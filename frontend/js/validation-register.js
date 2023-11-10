const formRegister = document.querySelector('#form-register');
const valInputApelido = document.querySelector('#div-apelido');
const valInputEmail = document.querySelector('#div-email');
const valInputPassword = document.querySelector('#div-password');

formRegister.addEventListener('', (event)=>{
    event.preventDefault();

    //Verificação - nome vazio:
    if (valInputApelido.value === "" || valInputApelido.value === null) {
        alert('Por favor, preencha seu nome');
        return;
    }
})