const btnFases = document.querySelectorAll(".roadmap-div-levels");
const unidadesteste = document.querySelectorAll(".units-div-roadmap", );


btnFases.forEach((elem, i) => {
    elem.addEventListener("click", () => {
        const fase = elem.ariaValueMax;
        const unidade = elem.parentElement.ariaValueMax;
        if(elem.ariaValueMin == "99"){
            localStorage.setItem(
                "botãoClicado",
                JSON.stringify({
                    fase: fase,
                    unidade: unidade,
                })
            );
            window.location.href = "./question.html"
        }else{
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