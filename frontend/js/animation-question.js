const setinha = document.getElementById("header-img-theme");
// const header = document.querySelector("header");
const imgHeader = document.getElementById("header-img-theme");
const headerQuestion = document.getElementById("header-questions");


window.addEventListener('scroll', function () {
    console.log(scrollY)
    if (window.scrollY > 600) {
        setinha.style.display = "none";
        headerQuestion.style.display = "fixed";
        // imgHeader.style.display = "none";
        // header.style.position = 'fixed';
        // header.style.height = "20vh";
        // header.classList.remove("mandatory");
        
    } else {
        setinha.style.display = "inherit";
        headerQuestion.style.display = "none";
        // imgHeader.style.display = "inherit";
        // header.style.position = "inherit";
        // header.style.height = "inherit";
        // header.classList.add("mandatory");
        
    }
})