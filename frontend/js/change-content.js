import json from "./json/content.json" assert { type: "json" };

//trazendo o progresso do usuario do localStorage
const progressJSON = localStorage.getItem("progressoUsuario");
const progress = JSON.parse(progressJSON);

//trazendo os dados do usuário do localStorage
const userJSON = localStorage.getItem("logar");
const user = JSON.parse(userJSON);

//pegando a fase e a unidade do localStorage
const unityFaseJSON = localStorage.getItem("botãoClicado");
const unityFase = JSON.parse(unityFaseJSON);
let unidade = unityFase.unidade;
let fase = unityFase.fase;

console.log(`unidade : ${unidade}, fase : ${fase}`);

console.log(progress.progresso[unidade].fases[fase])

const content = json;
const imgHeader = document.querySelector("#header-img-theme");
const titleHeader = document.querySelector("#header-h1-title");
const divExplication = document.querySelectorAll(".main-div-explication");
const explicationP = document.querySelectorAll(".explication-p-text");
const divSeparator = document.querySelectorAll(".main-div-separator");
const separatorTitle = document.querySelectorAll(".separator-h3-title");
const divImages = document.querySelector(".main-div-images");
const imgItem = document.querySelectorAll(".main-img-themeImg");
const mainVideo = document.querySelector("#main-video-1");
const mainUl = document.querySelector("#main-ul-complement");
const btnNext = document.querySelector("#main-btn-nextLesson");

// Troca de conteúdo:
imgHeader.src = content[unidade].unity[fase].imgHeader;
titleHeader.textContent = content[unidade].unity[fase].title.toUpperCase();
explicationP[0].textContent = content[unidade].unity[fase].p1;
separatorTitle[0].textContent = content[unidade].unity[fase].subtitle;
explicationP[1].textContent = content[unidade].unity[fase].p2;
mainVideo.src = content[3].unity[0].video;
mainUl.innerHTML = content[3].unity[0].mainUl;
divImages.innerHTML = content[0].unity[0].imgMain;

// console.log(content[0]);
btnNext.addEventListener("click", async () => {
    // const proxFase = parseInt(fase) + 1;
    if(parseInt(fase) === content[unidade].unity.length-1){
        console.log("quiz")
        window.location.href = "./question.html";
    }else if (content[unidade].unity.length < parseInt(fase)) {
        
        unidade = parseInt(unidade) + 1;
        fase = 0;

        progress.progresso[unidade].fases[fase] = true;
        if(progress.progresso[unidade].passouNaProva === false){
            progress.progresso[unidade].passouNaProva = true
        }

        localStorage.setItem("progressoUsuario" , JSON.stringify(progress))

        localStorage.setItem(
            "botãoClicado",
            JSON.stringify({
                fase: parseInt(fase),
                unidade: unidade,
            })
        );
        window.location.href = "./lesson.html";
    }
    else{

        progress.progresso[unidade].fases[fase] = true;
        progress.progresso[unidade].fases[parseInt(fase)+1] = true;

        localStorage.setItem("progressoUsuario" , JSON.stringify(progress))

        localStorage.setItem(
            "botãoClicado",
            JSON.stringify({
                fase: parseInt(fase) + 1,
                unidade: unidade,
            })
        );

        const progressoAtualizado = await fetch(
            `https://api-roadmap-proz.onrender.com/progressos/${user._id}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    user: user._id,
                    progresso : {
                        ...progress.progresso
                    },
                }),
                headers: { "Content-Type": "application/json" },
            }
        );

        window.location.href = "./lesson.html";
    }
});


