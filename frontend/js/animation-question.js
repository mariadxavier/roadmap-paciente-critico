const setinha = document.getElementById("header-img-theme");
// const header = document.querySelector("header");
const imgHeader = document.getElementById("header-img-theme");
const headerQuestion = document.getElementById("header-questions");


window.addEventListener('scroll', function () {
    console.log(scrollY)
    if (window.scrollY > 600) {
        setinha.style.display = "none";
        headerQuestion.style.display = "flex";
        headerQuestion.style.position = "fixed";
    
        
    } else {
        setinha.style.display = "inherit";
        headerQuestion.style.display = "none";
        
    }
})