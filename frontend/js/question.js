import json from "./json/quiz.json" assert { type: "json" };

// number question
let numberQuestion = 1;

const divQuestions = document.getElementById("questions");

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

const faseUnidade = document.getElementById("title-span-number");
const faseUnidadeContraida = document.getElementById("header-h1-question");
faseUnidadeContraida.textContent = `Questionário ${parseInt(unidade) + 1}`;
faseUnidade.textContent = parseInt(unidade) + 1;

const btnEnviar = document.querySelector(".enviarform");

const content = json;

const criaH1 = () => {
    const h1 = document.createElement("h1");
    h1.classList.add("topic-h1-numbers-topics");
    return h1;
};

const criaQuestion = (obj) => {
    const question = obj.question;
    const optionA = obj.optionA;
    const optionB = obj.optionB;
    const optionC = obj.optionC;
    const optionD = obj.optionD;
    const fase = obj.fase;

    const section = document.createElement("section");
    section.classList.add("mandatory");
    section.classList.add("section-questions");

    const divQuestion = document.createElement("div");
    divQuestion.classList.add("questions-div-asking");
    const h1 = document.createElement("h1");
    h1.classList.add("asking-h1-number");
    h1.textContent = numberQuestion;

    const p = document.createElement("p");
    p.classList.add("asking-p-question");
    p.textContent = question;
    section.appendChild(divQuestion);
    divQuestion.appendChild(h1);
    divQuestion.appendChild(p);

    const divResponse = document.createElement("div");
    divResponse.classList.add("questions-div-response");

    const respostas = [
        `<input type='radio' name='response' id='${numberQuestion}-a'><label for='${numberQuestion}-a'>${optionA}</label>`,
        `<input type='radio' aria-valuemin='4' name='response' id='${numberQuestion}-b'><label for='${numberQuestion}-b'>${optionB}</label>`,
        `<input type='radio' name='response' id='${numberQuestion}-c'><label for='${numberQuestion}-c'>${optionC}</label>`,
        `<input type='radio' name='response' id='${numberQuestion}-d'><label for='${numberQuestion}-d'>${optionD}</label>`,
    ];

    shuffleArray(respostas, 0.5);

    const form = document.createElement("form");
    form.innerHTML = `
        ${respostas[0]}
        ${respostas[1]}
        ${respostas[2]}
        ${respostas[3]}
    `;

    divResponse.appendChild(form);
    section.appendChild(divResponse);
    return section;
};

const allQuestions = content[unidade].quiz;
shuffleArray(allQuestions, 0.4);
allQuestions.forEach((element) => {
    const section = criaQuestion(element);
    divQuestions.appendChild(section);
    numberQuestion++;
});

//função que embaralha o array

function shuffleArray(inputArray, number) {
    inputArray.sort(() => Math.random() - number);
}

// Resultado do quiz: mensagem na tela
const exibirAprovado = document.getElementById("main-div-result-approved");
const exibirDesaprovado = document.getElementById(
    "main-div-result-disapproved"
);

// console.log(content[unidade]);

btnEnviar.addEventListener("click", () => {
    let acertos = 0;
    const unitys = [];
    console.log("click");
    for (let i = 1; i <= allQuestions.length; i++) {
        const correctInput = document.getElementById(`${i}-b`);
        if (correctInput.checked) {
            acertos++;
        } else {
            unitys.push(correctInput.ariaValueMin);
        }
    }
    //validação das respostas
    const porcentagemResultado = (acertos / allQuestions.length) * 100; // Utilizar esta variável como resultado da porcentagem de acertos

    // Aparição da resposta
    if (porcentagemResultado > 75) {
        exibirAprovado.style.display = "flex";
        const percent = document.getElementById("result-h1-porcent");
        percent.textContent = `${porcentagemResultado}%`;
        const btnResultado = document.getElementById("result-bnt");
        btnResultado.addEventListener("click", async () => {
            progress.progresso[unidade].passouNaProva = true;
            if (parseInt(unidade) === 7) {
                progress.progresso[parseInt(unidade)].liberou = true;
                progress.progresso[parseInt(unidade)].fases[0] = true;
            } else {
                progress.progresso[parseInt(unidade) + 1].liberou = true;
                progress.progresso[parseInt(unidade) + 1].fases[0] = true;
            }

            const progressoAtualizado = await fetch(
                `https://api-roadmap-proz.onrender.com/progressos/${user._id}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        user: user._id,
                        progresso: {
                            ...progress.progresso,
                        },
                    }),
                    headers: { "Content-Type": "application/json" },
                }
            );

            localStorage.setItem("progressoUsuario", JSON.stringify(progress));

            //troca de pagina
            localStorage.setItem(
                "botãoClicado",
                JSON.stringify({
                    fase: 0,
                    unidade:
                        unidade == "7"
                            ? parseInt(unidade)
                            : parseInt(unidade) + 1,
                })
            );
            window.location.href = "./pagina-principal.html";
        });
    } else if (porcentagemResultado < 75) {
        const percent = document.getElementById(
            "result-h1-porcent-disapproved"
        );
        const btn = document.getElementById("result-bnt-disapproved");
        const divReview = document.getElementById("topic-div-review");
        const unitysUnicas = unitys.filter(
            (item, i) => unitys.indexOf(item) === i
        );

        unitysUnicas.forEach((elem) => {
            const h1 = criaH1();
            h1.textContent = elem;
            divReview.appendChild(h1);
        });

        percent.textContent = `${porcentagemResultado}%`;
        exibirDesaprovado.style.display = "flex";
        btn.addEventListener("click", () => {
            window.location.href = "./pagina-principal.html";
        });
    }

    //atualização do progresso
    //se passou na prova
});
