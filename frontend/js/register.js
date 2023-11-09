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

    const progressoZerado = {
        fase1: {
            desabilitou: true,
            "1.0": false,
            1.1: false,
            1.2: false,
            1.3: false,
            1.4: false,
            1.5: false,
            1.6: false,
            passouNaProva: false,
        },
        fase2: {
            desabilitou: false,
            "2.0": false,
            2.1: false,
            2.2: false,
            2.3: false,
            2.4: false,
            2.5: false,
            2.6: false,
            passouNaProva: false,
        },
        fase3: {
            desabilitou: false,
            "3.0": false,
            3.1: false,
            3.2: false,
            3.3: false,
            3.4: false,
            3.5: false,
            3.6: false,
            passouNaProva: false,
        },
        fase4: {
            desabilitou: false,
            "4.0": false,
            4.1: false,
            4.2: false,
            4.3: false,
            4.4: false,
            4.5: false,
            4.6: false,
            passouNaProva: false,
        },
        fase5: {
            desabilitou: false,
            "5.0": false,
            5.1: false,
            5.2: false,
            5.3: false,
            5.4: false,
            5.5: false,
            5.6: false,
            passouNaProva: false,
        },
        fase6: {
            desabilitou: false,
            "6.0": false,
            6.1: false,
            6.2: false,
            6.3: false,
            6.4: false,
            6.5: false,
            6.6: false,
            passouNaProva: false,
        },
    };

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
