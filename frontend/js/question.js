import json from "./json/quiz.json" assert { type: "json" };

//pegando a fase e a unidade do localStorage
const unityFaseJSON = localStorage.getItem("botãoClicado");
const unityFase = JSON.parse(unityFaseJSON);
const unidade = unityFase.unidade;

//trazendo o progresso do usuario do localStorage
const progressJSON = localStorage.getItem("progressoUsuario");
const progress = JSON.parse(progressJSON);

//trazendo os dados do usuário do localStorage
const userJSON = localStorage.getItem("logar");
const user = JSON.parse(userJSON);

// const btnEnviar = document.getElementById("btn-teste");
const content = json;

console.log(content[unidade]);

// btnEnviar.addEventListener("click", async () => {
//validação das respostas

//atualização do progresso
//se passou na prova
//     progress.progresso[unidade].passouNaProva = true;""
//     progress.progresso[parseInt(unidade) + 1].liberou = true;
//     console.log(progress.progresso[parseInt(unidade) + 1]);

//     const progressoAtualizado = await fetch(
//         `https://api-roadmap-proz.onrender.com/progressos/${user._id}`,
//         {
//             method: "PUT",
//             body: JSON.stringify({
//                 user: user._id,
//                 progresso: {
//                     ...progress.progresso,
//                 },
//             }),
//             headers: { "Content-Type": "application/json" },
//         }
//     );

//     localStorage.setItem("progressoUsuario", JSON.stringify(progress));

//     //troca de pagina
//     localStorage.setItem(
//         "botãoClicado",
//         JSON.stringify({
//             fase: 0,
//             unidade: parseInt(unidade) + 1,
//         })
//     );
//     window.location.href = "./pagina-principal.html";
// });
