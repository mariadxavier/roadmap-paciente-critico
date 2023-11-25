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
const exibirResultado = document.getElementById("main-div-result");
const backgroundImgResultado = document.getElementById("result-div-background");
const imgResultado = document.getElementById("result-img-people");
const textoResultado = document.getElementById("result-h1-phrase");
const bntResultado = document.getElementById("result-bnt");


console.log(content[unidade]);

btnEnviar.addEventListener("click", async () => {
    //validação das respostas
    const porcentagemResultado = 20; // Utilizar esta variável como resultado da porcentagem de acertos

    // Aparição da resposta - é preciso a validação da resposta para funcionar corretamente (utlizar if).
    // Obs.: pesquisar como bloquear a tela, quando essa parte estiver ativada.
    // Acertou:
    exibirResultado.style.display = "flex";
    


    // Errou:
    backgroundImgResultado.style.background = "#FF4747";
    imgResultado.setAttribute('src', './src/img/3d-casual-life-tired-female-student-sitting-with-book-on-her-face.png');
    imgResultado.style.position = "absolute";
    imgResultado.style.left = "15px";
    textoResultado.style.fontSize = "1.875rem";
    textoResultado.style.color = "#83C5BE";
    textoResultado.innerHTML = 'Seu esforço foi<br>válido, falta pouco!<br>Acertos: <span id="result-h1-porcent">'+ porcentagemResultado +'%</span>';
    const stylePorcentagem = document.getElementById("result-h1-porcent");
    stylePorcentagem.style.fontSize = "1.875rem";
    bntResultado.style.padding = "3vh 9vw";
    bntResultado.style.fontSize = "1.7rem";
    bntResultado.innerText = "Ver matérias";
    exibirResultado.style.display = "flex";

    // Se errou, div conteúdos para estudar:




    // Teste para saber se o botão está funcionando no celular
    btnEnviar.style.background = "blue";

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
