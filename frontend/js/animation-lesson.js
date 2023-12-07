const header = document.querySelector("header");
const title = document.querySelector("#header-h1-title");
const img = document.querySelector("#header-img-theme");
const main = document.querySelector("main");
const larguraDaJanela =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

window.addEventListener("scroll", function () {
    if (window.scrollY > 360) {
        img.style.display = "none";
        title.style.position = "inherit";
        title.style.top = "unset";
        title.style.fontSize = "1.2rem";
        title.style.lineHeight = "2rem";
        title.style.letterSpacing = "3px";
        title.style.alignSelf = "center";
        title.style.width = "unset";
        title.style.height = "unset";
        title.style.justifyContent = "center";
        header.style.justifyContent = "center";
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.height = "8vh";
        header.style.borderRadius = "0 0 40px 40px";
        main.style.marginTop = "58vh";
    } else {
        img.style.display = "block";
        title.style.position = "absolute";
        title.style.top = "21rem";
        title.style.fontSize = "2rem";
        title.style.lineHeight = "2rem";
        title.style.letterSpacing = "3px";
        title.style.alignSelf = "unset";
        title.style.width = "100%";
        title.style.height = "39px";
        title.style.justifyContent = "center";
        header.style.position = "relative";
        header.style.top = "unset";
        header.style.width = "100%";
        header.style.height = "26rem";
        header.style.borderRadius = "0 0 40px 40px";
        main.style.marginTop = "unset";

        // Responsividade - 320px
        if (larguraDaJanela <= 325) {
            img.style.width = "12rem";
            header.style.height = "65vh";
            title.style.top = "52vh";
            title.style.fontSize = "1.7rem";
        }
    }
});
