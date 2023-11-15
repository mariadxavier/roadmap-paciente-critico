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
            1_0: false,
            1_1: false,
            1_2: false,
            1_3: false,
            1_4: false,
            1_5: false,
            1_6: false,
            passouNaProva: false,
        },
        fase2: {
            desabilitou: false,
            2_0: false,
            2_1: false,
            2_2: false,
            2_3: false,
            2_4: false,
            2_5: false,
            2_6: false,
            passouNaProva: false,
        },
        fase3: {
            desabilitou: false,
            3_0: false,
            3_1: false,
            3_2: false,
            3_3: false,
            3_4: false,
            3_5: false,
            3_6: false,
            passouNaProva: false,
        },
        fase4: {
            desabilitou: false,
            4_0: false,
            4_1: false,
            4_2: false,
            4_3: false,
            4_4: false,
            4_5: false,
            4_6: false,
            passouNaProva: false,
        },
        fase5: {
            desabilitou: false,
            5_0: false,
            5_1: false,
            5_2: false,
            5_3: false,
            5_4: false,
            5_5: false,
            5_6: false,
            passouNaProva: false,
        },
        fase6: {
            desabilitou: false,
            6_1: false,
            6_1: false,
            6_2: false,
            6_3: false,
            6_4: false,
            6_5: false,
            6_6: false,
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
