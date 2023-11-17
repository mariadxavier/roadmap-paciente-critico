// função que ao carregar a pagina traz o progresso do usuário logado do banco de dados e manda pro localStorage
window.addEventListener("load", async () => {
    const userProgress = await fetch(
        `https://api-roadmap-proz.onrender.com/progressos/${usuarioLogado._id}`
    );

    const result = await userProgress.json();

    localStorage.setItem("progressoUsuario", JSON.stringify(result));
});

//recuperando o progresso do usuario do localStorage

//escrevendo o nome do usuario
const jsonUsuario = localStorage.getItem("logar");
const usuarioLogado = JSON.parse(jsonUsuario);
const spanApelido = document.getElementById("user-apelido");

spanApelido.textContent = usuarioLogado.apelido;

// Teste-JP
const header = document.getElementById("header");
const divPrincipal = document.getElementById("header-div-profile");
const labelDivPrincipal = document.getElementById("header-label-name");
const imgDivPrincipal = document.getElementById("header-img-profile");
const iconContainer = document.getElementById("header-div-container");

const progressBar = document.getElementById("header-div-progressBar");

let progressBarNaTela = false;

const jsonProgress = localStorage.getItem("progressoUsuario");
const progress = JSON.parse(jsonProgress);

console.log(progress);

window.addEventListener("scroll", () => {
    //array que da a % que diz true pra cada fase que o usuario completou
    const progressPercent = [
        progress.progresso.fase1["10"],
        progress.progresso.fase1["11"],
        progress.progresso.fase1["12"],
        progress.progresso.fase1["13"],
        progress.progresso.fase1["14"],
        progress.progresso.fase1["15"],
        progress.progresso.fase1["16"],
        progress.progresso.fase1["passouNaProva"],
        progress.progresso.fase2["20"],
        progress.progresso.fase2["21"],
        progress.progresso.fase2["22"],
        progress.progresso.fase2["23"],
        progress.progresso.fase2["24"],
        progress.progresso.fase2["25"],
        progress.progresso.fase2["26"],
        progress.progresso.fase2["passouNaProva"],
        progress.progresso.fase3["30"],
        progress.progresso.fase3["31"],
        progress.progresso.fase3["32"],
        progress.progresso.fase3["33"],
        progress.progresso.fase3["34"],
        progress.progresso.fase3["35"],
        progress.progresso.fase3["36"],
        progress.progresso.fase3["passouNaProva"],
        progress.progresso.fase4["40"],
        progress.progresso.fase4["41"],
        progress.progresso.fase4["42"],
        progress.progresso.fase4["43"],
        progress.progresso.fase4["44"],
        progress.progresso.fase4["45"],
        progress.progresso.fase4["46"],
        progress.progresso.fase4["passouNaProva"],
        progress.progresso.fase5["50"],
        progress.progresso.fase5["51"],
        progress.progresso.fase5["52"],
        progress.progresso.fase5["53"],
        progress.progresso.fase5["54"],
        progress.progresso.fase5["55"],
        progress.progresso.fase5["56"],
        progress.progresso.fase5["passouNaProva"],
        progress.progresso.fase6["60"],
        progress.progresso.fase6["61"],
        progress.progresso.fase6["62"],
        progress.progresso.fase6["63"],
        progress.progresso.fase6["64"],
        progress.progresso.fase6["65"],
        progress.progresso.fase6["66"],
        progress.progresso.fase6["passouNaProva"],
    ];
    let percentTrue = 0;
    //contando os trues do array
    progressPercent.forEach((elem) => {
        if (elem) {
            percentTrue++;
        }
    });
    //calculo que retorna a porcentagem
    const percent = parseInt((percentTrue / progressPercent.length) * 100);
    if (scrollY >= 200 && !progressBarNaTela) {
        console.log("oi");
        iconContainer.style.display = "none"; //sumindo com o container de icones
        iconContainer.style.transform = "transform: translateX(7rem);";
        imgDivPrincipal.style.order = "2"; //trocando a ordem da imagem com o label
        divPrincipal.style.width = "100%"; //aumentando a div total para fazer o efeito
        divPrincipal.style.border = "1px solid #CACACA"; //bordar da barra de progresso
        divPrincipal.style.justifyContent = "space-between";
        divPrincipal.style.background = "rgb(255, 255, 255)"; //background quando a barra está vazia

        labelDivPrincipal.innerHTML = `${percent}%`; //mudando pra %
        labelDivPrincipal.style.marginLeft = "15px";

        if (percent < 10) {
            labelDivPrincipal.style.color = "#4e4e4e";
        } else {
            labelDivPrincipal.style.color = "white";
        }
        // labelDivPrincipal.style.color = "white"; //cor da porcentagem da barra de progresso
        progressBar.style.width = `${percent}%`;
        progressBar.style.borderRadius = "50px";
        divPrincipal.style.boxShadow = "0px 4px 10px 0px rgba(0, 0, 0, .5)";
        progressBar.style.background =
            "linear-gradient(270deg, rgb(255, 255, 255) -10%, #ffc5c5 60%)";
        progressBarNaTela = true;
    } else if (scrollY <= 199 && progressBarNaTela) {
        setTimeout(() => {
            if (scrollY <= 199) {
                iconContainer.style.display = "flex"; //aparecendo com o container de comentarios
                iconContainer.style.transform = "transform: translateX(0);";
            }
        }, 500);
        divPrincipal.style.boxShadow = "none";
        divPrincipal.style.border = "none";
        divPrincipal.style.justifyContent = "start";
        divPrincipal.style.background = "none";
        progressBar.style.width = "0px";
        imgDivPrincipal.style.order = "0"; //trocando a ordem da imagem com o label
        divPrincipal.style.width = "11rem"; //aumentando a div total para fazer o efeito
        labelDivPrincipal.innerHTML = `Olá, ${usuarioLogado.apelido}`; //mudando pra conter o nome do usuario
        labelDivPrincipal.style.color = "#4e4e4e";
        console.log("tchau");
        progressBarNaTela = false;
    }
});

// Evento abrir e fechar roadmap
// const botaoUnidades = document.querySelectorAll("units-presentation-div-container-bnt");

// botaoUnidades.forEach((botao) => {
//     botao.addEventListener('click', () => {
//         console.log("Ok")
//     })
// })

// Abrir e fechar unidades
const botoesUnidades = document.querySelectorAll(".container-bnt-img-bottom");
const unidades = document.querySelectorAll(".units");
const divRoadmap = document.querySelectorAll(".units-div-roadmap");

for (let i = 0; i < divRoadmap.length; i++) {
    console.log(i);
    divRoadmap[i].style.display = "flex";
}

botoesUnidades.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        if (divRoadmap[index].style.display === "flex") {
            divRoadmap[index].style.display = "none";
            botoesUnidades[index].style.transform = "rotate(0deg)";
        } else if (divRoadmap[index].style.display === "none") {
            divRoadmap[index].style.display = "flex";
            botoesUnidades[index].style.transform = "rotate(90deg)";
        }
    });
});
