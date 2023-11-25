import json from "./json/quiz.json" assert { type: "json" };

// pegando a fase e a unidade do localStorage
const unityFaseJSON = localStorage.getItem("botãoClicado");
const unityFase = JSON.parse(unityFaseJSON);
const unidade = unityFase.unidade;

//trazendo o progresso do usuario do localStorage
const progressJSON = localStorage.getItem("progressoUsuario");
const progress = JSON.parse(progressJSON);

//trazendo os dados do usuário do localStorage
const userJSON = localStorage.getItem("logar");
const user = JSON.parse(userJSON);

const btnEnviar = document.querySelector(".btn");
const content = json;

// Resultado do quiz: mensagem na tela
const exibirAprovado = document.getElementById("main-div-result-approved");
const exibirDesaprovado = document.getElementById("main-div-result-disapproved");

console.log(content[unidade]);


btnEnviar.addEventListener("click", async () => {
    //validação das respostas
    const porcentagemResultado = 90; // Utilizar esta variável como resultado da porcentagem de acertos

    // Aparição da resposta 
    if (porcentagemResultado > 75) {
        exibirAprovado.style.display = "flex";
    } else if (porcentagemResultado < 75) {
        exibirDesaprovado.style.display = "flex";
    }



    //atualização do progresso
    //se passou na prova
    console.log("click");
    // progress.progresso[unidade].passouNaProva = true;
    // progress.progresso[parseInt(unidade) + 1].liberou = true;
    // progress.progresso[parseInt(unidade) + 1].fases[0] = true;
    // console.log(progress.progresso[parseInt(unidade) + 1]);

    // const progressoAtualizado = await fetch(
    //     `https://api-roadmap-proz.onrender.com/progressos/${user._id}`,
    //     {
    //         method: "PUT",
    //         body: JSON.stringify({
    //             user: user._id,
    //             progresso: {
    //                 ...progress.progresso,
    //             },
    //         }),
    //         headers: { "Content-Type": "application/json" },
    //     }
    // );

    // localStorage.setItem("progressoUsuario", JSON.stringify(progress));

    // //troca de pagina
    // localStorage.setItem(
    //     "botãoClicado",
    //     JSON.stringify({
    //         fase: 0,
    //         unidade: parseInt(unidade) + 1,
    //     })
    // );
    // window.location.href = "./pagina-principal.html";
});
