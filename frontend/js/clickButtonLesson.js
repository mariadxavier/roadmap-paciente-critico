const btnFases = document.querySelectorAll(".roadmap-div-levels");
const unidadesteste = document.querySelectorAll(".units-div-roadmap");

// Buscando o progresso do usuário
const progressJSON = localStorage.getItem("progressoUsuario");
const fases = JSON.parse(progressJSON);

const progressoFases = [
    ...fases.progresso[0].fases,
    ...fases.progresso[1].fases,
    ...fases.progresso[2].fases,
    ...fases.progresso[3].fases,
    ...fases.progresso[4].fases,
    ...fases.progresso[5].fases,
    ...fases.progresso[6].fases,
    ...fases.progresso[7].fases,
];

console.log(btnFases);
console.log(progressoFases);

btnFases.forEach((elem, i) => {
    // if (progressoFases[i] === false) {
    //     elem.disabled = true;
    // }

    if (elem.disabled) {
        elem.style.backgroundColor = "black";
    }

    elem.addEventListener("click", () => {
        const fase = elem.ariaValueMax;
        const unidade = elem.parentElement.ariaValueMax;
        if (elem.ariaValueMin == "99") {
            localStorage.setItem(
                "botãoClicado",
                JSON.stringify({
                    fase: fase,
                    unidade: unidade,
                })
            );
            window.location.href = "./question.html";
        } else {
            localStorage.setItem(
                "botãoClicado",
                JSON.stringify({
                    fase: fase,
                    unidade: unidade,
                })
            );
            window.location.href = "./lesson.html";
        }
    });
});

/**
 * <>p content[unidade].quiz[0].questo<>
 * <>p content[unidade].quiz[0].opa<>
 * <>p content[unidade].quiz[0].opa<>
 * <>p content[unidade].quiz[0].opa<>
 *
 *<>p content[unidade].quiz[1].questao<>*/
