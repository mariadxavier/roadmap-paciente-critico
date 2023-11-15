window.addEventListener("load", async () => {
    const jsonUsuario = localStorage.getItem("logar");
    const usuarioLogado = JSON.parse(jsonUsuario);
    const spanApelido = document.getElementById("user-apelido");

    spanApelido.textContent = usuarioLogado.apelido;
    const userProgress = await fetch(
        `https://api-roadmap-proz.onrender.com/progressos/${usuarioLogado._id}`
    );

    const result = await userProgress.json();

    console.log(usuarioLogado._id);
    console.log(result);
});

// Teste-JP
const header = document.getElementById("header");
const divPrincipal = document.getElementById("header-div-profile");
const labelDivPrincipal = document.getElementById("header-label-name");
const imgDivPrincipal = document.getElementById("header-img-profile");
const iconContainer = document.getElementById("header-div-container");

const progressBar = document.getElementById("header-div-progressBar");

let progressBarNaTela = false;

window.addEventListener("scroll", () => {
    // console.log(scrollY )
    if (scrollY >= 200 && !progressBarNaTela) {
        console.log("oi");
        iconContainer.style.display = "none"; //sumindo com o container de icones
        iconContainer.style.transform = "transform: translateX(7rem);";
        imgDivPrincipal.style.order = "2"; //trocando a ordem da imagem com o label
        divPrincipal.style.width = "100%"; //aumentando a div total para fazer o efeito
        divPrincipal.style.border = "1px solid pink";
        divPrincipal.style.justifyContent = "space-between";
        labelDivPrincipal.innerHTML = `30%`; //mudando pra %
        progressBar.style.width = "30%";
        progressBar.style.background =
            "linear-gradient(270deg, rgb(255, 255, 255) -10%, #ffc5c5 60%)";
        progressBarNaTela = true;
    } else if (scrollY <= 199 && progressBarNaTela) {
        setTimeout(() => {
            iconContainer.style.display = "flex"; //aparecendo com o container de comentarios
            iconContainer.style.transform = "transform: translateX(0);";
        }, 500);
        divPrincipal.style.border = "none";
        progressBar.style.width = "0px";
        imgDivPrincipal.style.order = "0"; //trocando a ordem da imagem com o label
        divPrincipal.style.width = "11rem"; //aumentando a div total para fazer o efeito
        labelDivPrincipal.innerHTML = `Olá, ${usuarioLogado.apelido}`; //mudando pra conter o nome do usuario
        console.log("tchau");
        progressBarNaTela = false;
    }
});
