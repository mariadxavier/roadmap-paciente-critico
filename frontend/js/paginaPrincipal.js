const jsonUsuario = localStorage.getItem("logar");
const usuarioLogado = JSON.parse(jsonUsuario);
const spanApelido = document.getElementById("user-apelido");

spanApelido.textContent = usuarioLogado.apelido;
