const btnFases = document.querySelectorAll(".roadmap-div-levels");
console.log(btnFases);

btnFases.forEach((elem, i) => {
    elem.addEventListener("click", () => {
        const fase = elem.ariaValueMax;
        const unidade = elem.parentElement.ariaValueMax;
        localStorage.setItem(
            "botãoClicado",
            JSON.stringify({
                fase: fase,
                unidade: unidade,
            })
        );
        window.location.href = "./lesson.html";
    });
});
