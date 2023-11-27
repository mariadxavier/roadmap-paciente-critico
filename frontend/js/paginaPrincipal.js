// função que ao carregar a pagina traz o progresso do usuário logado do banco de dados e manda pro localStorage
// window.addEventListener("load", async () => {
//     const userProgress = await fetch(
//         `https://api-roadmap-proz.onrender.com/progressos/${usuarioLogado._id}`
//     );

//     const result = await userProgress.json();

//     localStorage.setItem("progressoUsuario", JSON.stringify(result));
// });

//recuperando o progresso do usuario do localStorage

//escrevendo o nome do usuario
const jsonUsuario = localStorage.getItem("logar");
const usuarioLogado = JSON.parse(jsonUsuario);
const spanApelido = document.getElementById("user-apelido");

try {
    const faseUnityJSON = localStorage.getItem("botãoClicado");
    const faseUnity = JSON.parse(faseUnityJSON);
    var unidade = faseUnity.unidade;
} catch (err) {
    var unidade = null;
}

spanApelido.textContent = usuarioLogado.apelido;

// Teste-JP
const header = document.getElementById("header");
const divPrincipal = document.getElementById("header-div-profile");
const labelDivPrincipal = document.getElementById("header-label-name");
const imgDivPrincipal = document.getElementById("header-img-profile");
const iconContainer = document.getElementById("header-div-container");

const progressBar = document.getElementById("header-div-progressBar");

let progressBarNaTela = false;

// Buscando o progresso do usuário
const jsonProgress = localStorage.getItem("progressoUsuario");
const progress = JSON.parse(jsonProgress);
console.log(progress);

const main = document.querySelector("main");

// Botão menu:
const buttonMenu = document.querySelectorAll(".header-div-background-menu");
console.log(buttonMenu)
const menu = document.getElementById("header-menu");
const sectionPresentation = document.getElementById("section-presentation");
const units = document.querySelectorAll(".units");
const buttonBars = document.querySelectorAll(".header-div-bar");

buttonMenu[0].addEventListener('click', () => {
    // Fazendo o botão girar

    buttonBars[3].style.transform = "rotate(135deg)";
    buttonBars[4].style.transform = "rotate(-135deg)";

    buttonBars[5].style.display = "none";

    buttonBars[3].style.bottom = "-3px"
    buttonBars[4].style.bottom = "5px";

    // Mudanças de style
    buttonMenu[1].style.padding = "15px 8px";
    
    menu.style.display = "flex";
    header.style.filter = "blur(2px)";
})
buttonMenu[1].addEventListener('click', () => {

    // Mudanças de style
    menu.style.display = "none";
    header.style.filter = "inherit";

})

// Botão Notificação
// const notification = document.getElementById("header-div-background-notification");
// const developing = document.getElementById("notification-h1-developing");

// notification.addEventListener('click', () => {
//     developing.style.display = "flex";
//     setTimeout(() => {
//         developing.style.display = "none";
        
//     }, 4000);
// })

// Sobre nós
const buttonAboutUs = document.getElementById("option-li-about-us");
const aboutUs = document.getElementById("contatos");
const buttonBack = document.getElementById("body-div-return-contatos");

buttonAboutUs.addEventListener('click', () => {
    contatos.style.display = "flex";
    menu.style.display = "none";
})
buttonBack.addEventListener('click', () => {
    contatos.style.display = "none";
    menu.style.display = "flex";
})

// buttonMenu.addEventListener('click', () => {
//     menu.style.display = "flex";
//     header.style.filter = "blur(2px)";
//     sectionPresentation.style.filter = "blur(2px)";
//     unitOne.style.filter = "blur(2px)";
//     // units.forEach(sections => {
//     //     sections.style.filter = "blur(2px)";
//     // })

//     // Aprender como travar o scroll

// });

window.addEventListener("scroll", () => {
    //array que da a % que diz true pra cada fase que o usuario completou
    const progressPercent = [
        ...progress.progresso[0].fases,
        progress.progresso[0].passouNaProva,
        ...progress.progresso[1].fases,
        progress.progresso[1].passouNaProva,
        ...progress.progresso[2].fases,
        progress.progresso[2].passouNaProva,
        ...progress.progresso[3].fases,
        progress.progresso[3].passouNaProva,
        ...progress.progresso[4].fases,
        progress.progresso[4].passouNaProva,
        ...progress.progresso[5].fases,
        progress.progresso[5].passouNaProva,
        ...progress.progresso[6].fases,
        progress.progresso[6].passouNaProva,
        ...progress.progresso[7].fases,
        progress.progresso[7].passouNaProva,
    ];

    let percentTrue = 0;
    //contando os trues do array
    progressPercent.forEach((elem) => {
        if (elem) {
            percentTrue++;
        }
    });

    // Trocando cor meta
    const meta = document.querySelector('meta[name="theme-color"]');


    //calculo que retorna a porcentagem
    const percent = parseInt((percentTrue / progressPercent.length) * 100);
    if (scrollY >= 200 && !progressBarNaTela) {
        iconContainer.style.display = "none"; //sumindo com o container de icones
        iconContainer.style.transform = "transform: translateX(7rem);";
        imgDivPrincipal.style.order = "2"; //trocando a ordem da imagem com o label
        divPrincipal.style.width = "100%"; //aumentando a div total para fazer o efeito
        divPrincipal.style.border = "1px solid #CACACA"; //bordar da barra de progresso
        divPrincipal.style.justifyContent = "space-between";
        divPrincipal.style.background = "rgb(255, 255, 255)"; //background quando a barra está vazia
        main.style.padding = "0px";

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
        labelDivPrincipal.style.marginLeft = "2px";
        divPrincipal.style.border = "none";
        divPrincipal.style.justifyContent = "start";
        divPrincipal.style.background = "none";
        progressBar.style.width = "0px";
        imgDivPrincipal.style.order = "0"; //trocando a ordem da imagem com o label
        divPrincipal.style.width = "11rem"; //aumentando a div total para fazer o efeito
        labelDivPrincipal.innerHTML = `Olá, ${usuarioLogado.apelido}`; //mudando pra conter o nome do usuario
        labelDivPrincipal.style.color = "#4e4e4e";
        main.style.padding = "0 3vw";
        progressBarNaTela = false;
    }

    // Trocando cor meta conforme a unidade
    if(scrollY > 300) {
        console.log(meta)
        // meta.setAttribute("content", "#FFAFAF");
        if (unidade === "0") {
            meta.setAttribute("content", "#FFAFAF");
        }
        if (unidade === "1") {
            meta.setAttribute("content", "#ffd670");
        }
        if (unidade === "2") {
            meta.setAttribute("content", "#70d6ff");
        }
        if (unidade === "3") {
            meta.setAttribute("content", "#936bff");
        }
        if (unidade === "4") {
            meta.setAttribute("content", "#fb8e8e");
        }
        if (unidade === "5") {
            meta.setAttribute("content", "#9ae770");
        }
        if (unidade === "6") {
            meta.setAttribute("content", "#fcbf49");
        }
        if (unidade === "7") {
            meta.setAttribute("content", "#f48bdb");
        }
    } else {
        meta.setAttribute("content", "#ebebeb");
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

divRoadmap.forEach((elem) => {
    if (elem.ariaValueMax === parseInt(unidade)) {
        elem.style.display = "flex";
    } else {
        elem.style.display = "none";
    }
});

//aleração para deixar a abertura das unidades dinâmicas ao ultimo acesso de unidade

// for (let i = 1; i < divRoadmap.length; i++) {
//     console.log(i);
//     divRoadmap[i].style.display = "none";
// }

botoesUnidades.forEach((botao, index) => {
    // divRoadmap[0].style.display = "flex";
    if (unidade == null) {
        divRoadmap[0].style.display = "flex";
    } else {
        divRoadmap[unidade].style.display = "flex";
    }
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


// trocando cor meta
window.addEventListener('scroll', () => {
    console.log(scrollY)
})