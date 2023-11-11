const jsonUsuario = localStorage.getItem("logar");
const usuarioLogado = JSON.parse(jsonUsuario);
const spanApelido = document.getElementById("user-apelido");

spanApelido.textContent = usuarioLogado.apelido;

// Teste-JP
const header = document.getElementById('header');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', (event) => {
    
    console.log(scrollY);

    if (scrollY => 40) {
        header.style.display = "none";
        progressBar.style.display = "flex";
    } 
    if (scrollY <= 39) {
        header.style.display = "flex";
        progressBar.style.display = "none";
    }
});