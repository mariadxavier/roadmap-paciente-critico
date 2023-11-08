const btnLogin = document.getElementById("main-btn-enter");
const inputEmail = document.getElementById("div-input-email");
const inputPassword = document.getElementById("div-input-password");

btnLogin.addEventListener("click", async ()=>{
    console.log("clicou")
    const email = (inputEmail.value).trim();
    const password = (inputPassword.value).trim();

    const user = await fetch("https://api-roadmap-proz.onrender.com/users/logar", {
        method : "POST",
        body: JSON.stringify({
            email,
            senha : password
        }),headers :{
            "Content-Type" : "application/json"
        }
    })

    const result = await user.json()

    if(result.autorizado){
        alert("liberar login")
    }else{
        alert(result.message  )
    }

    console.log(result)

})
