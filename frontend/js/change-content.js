import json from "./json/content.json" assert { type: "json" };

const unityFaseJSON = localStorage.getItem("botãoClicado");
const unityFase = JSON.parse(unityFaseJSON);
let unidade = unityFase.unidade;
let fase = unityFase.fase;

console.log(`unidade : ${unidade}, fase : ${fase}`);

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
btnNext.addEventListener("click", () => {
    // const proxFase = parseInt(fase) + 1;
    if(parseInt(fase) === content[unidade].unity.length-1){
        console.log("quiz")
        window.location.href = "./question.html";
    }else if (content[unidade].unity.length < parseInt(fase)) {
        unidade = parseInt(unidade) + 1;
        fase = 0;
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
    localStorage.setItem(
        "botãoClicado",
        JSON.stringify({
            fase: parseInt(fase) + 1,
            unidade: unidade,
        })
    );
        window.location.href = "./lesson.html";
    }
});


