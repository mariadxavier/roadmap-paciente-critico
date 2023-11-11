const btnLogin = document.getElementById("main-btn-enter");
const inputEmail = document.getElementById("div-input-email");
const inputPassword = document.getElementById("div-input-password");

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

btnLogin.addEventListener("click", async () => {
    btnLogin.disabled = true;
    btnLogin.textContent = "";
    btnLogin.innerHTML = loading;

    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    const user = await fetch(
        "https://api-roadmap-proz.onrender.com/users/logar",
        {
            method: "POST",
            body: JSON.stringify({
                email,
                senha: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const result = await user.json();

    if (result.autorizado) {
        localStorage.setItem("logar", JSON.stringify(result.usuarioEncontrado));
        alert("liberar login");
        btnLogin.innerHTML = sucesso;
        setTimeout(() => {
            window.location.href = "./pagina-principal.html";
        }, 2000);
    } else {
        alert(result.message);
        btnLogin.disabled = false;
        btnLogin.textContent = "Entrar";
        inputEmail.value = "";
        inputPassword.value = "";
    }

    console.log(result);
});
