const openEye = document.querySelector("#div-img-eye");
const closedEye = document.querySelector("#div-img-eye-slash");
const passwordTextReg = document.querySelector("#div-password");
const passwordTextLog = document.querySelector("#div-input-password");


// pagina de cadastro:
openEye.addEventListener('click', ()=> {
      if (passwordTextReg.getAttribute('type') == 'password') {
            passwordTextReg.setAttribute('type', 'text');
            closedEye.style.display = 'block';
            openEye.style.display = 'none';
      } else {
            passwordTextReg.setAttribute('type', 'password');
      }
});

closedEye.addEventListener('click', ()=> {
      if (passwordTextReg.getAttribute('type') == 'text') {
            passwordTextReg.setAttribute('type', 'password');
            openEye.style.display = 'block';
            closedEye.style.display = 'none';
      } else {
            passwordTextReg.setAttribute('type', 'password');
      }
});

// página de login:
openEye.addEventListener('click', ()=> {
      if (passwordTextLog.getAttribute('type') == 'password') {
            passwordTextLog.setAttribute('type', 'text');
            closedEye.style.display = 'block';
            openEye.style.display = 'none';
      } else {
            passwordTextLog.setAttribute('type', 'password');
      }
});

closedEye.addEventListener('click', ()=> {
      if (passwordTextLog.getAttribute('type') == 'text') {
            passwordTextLog.setAttribute('type', 'password');
            openEye.style.display = 'block';
            closedEye.style.display = 'none';
      } else {
            passwordTextLog.setAttribute('type', 'password');
      }
});