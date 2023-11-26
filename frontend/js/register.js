const inputApelido = document.getElementById("div-apelido");
const inputEmail = document.getElementById("div-email");
const inputSenha = document.getElementById("div-password");
const btnRegister = document.getElementById("main-btn-register");

const loading =
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
const sucesso = `<div class="main-container">
<div class="check-container">
    <div class="check-background">
        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
</div>`;

btnRegister.addEventListener("click", async () => {
    const apelido = inputApelido.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

    btnRegister.disabled = true;
    btnRegister.innerText = "";
    btnRegister.innerHTML = loading;

    const progressoZerado = [
        {
            id: "unidade1",
            liberou: true,
            fases: [true, false, false, false, false, false, false,false],
            passouNaProva: false,
        },
        {
            id: "unidade2",
            liberou: false,
            fases: [false, false, false, false, false, false],
            passouNaProva: false,
        },
        {
            id: "unidade3",
            liberou: false,
            fases: [false, false, false, false, false, false],
            passouNaProva: false,
        },
        {
            id: "unidade4",
            liberou: false,
            fases: [false, false, false, false, false],
            passouNaProva: false,
        },
        {
            id: "unidade5",
            liberou: false,
            fases: [false, false, false, false, false, false, false],
            passouNaProva: false,
        },
        {
            id: "unidade6",
            liberou: false,
            fases: [false, false, false, false, false, false, false, false],
            passouNaProva: false,
        },
        {
            id: "unidade7",
            liberou: false,
            fases: [false, false, false, false, false, false, false, false],
            passouNaProva: false,
        },
        {
            id: "unidade8",
            liberou: false,
            fases: [false, false, false, false, false, false, false, false],
            passouNaProva: false,
        },
    ];

    const userCriado = await fetch(
        "https://api-roadmap-proz.onrender.com/users",
        {
            method: "POST",
            body: JSON.stringify({
                email,
                apelido,
                senha,
            }),
            headers: { "Content-Type": "application/json" },
        }
    );

    const result = await userCriado.json();

    if (result.hasOwnProperty("novoUser")) {
        const userCriadoId = result.novoUser._id;
        const progressoNovoCriado = await fetch(
            "https://api-roadmap-proz.onrender.com/progressos",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userCriadoId,
                    progresso: progressoZerado,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
        btnRegister.innerHTML = sucesso;

        const progressoCriado = await progressoNovoCriado.json();

        // alert(`${result.message} e ${progressoCriado.message}`);
        setTimeout(() => {
            window.location.href = "./login.html";
        }, 2000);
    } else {
        alert(result.message);
        inputApelido.value = "";
        inputEmail.value = "";
        inputSenha.value = "";
        btnRegister.disabled = false;
        btnRegister.innerText = "Cadastrar";
    }
});
