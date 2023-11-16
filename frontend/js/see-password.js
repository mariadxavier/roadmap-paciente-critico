const openEye = document.querySelector("#div-img-eye");
const closedEye = document.querySelector("#div-img-eye-slash");
const passwordText = document.querySelector("#div-password");

openEye.addEventListener('click', ()=> {
      if (passwordText.getAttribute('type') == 'password') {
            passwordText.setAttribute('type', 'text');
            closedEye.style.display = 'block';
            openEye.style.display = 'none';
      } else {
            passwordText.setAttribute('type', 'password');
      }
});

closedEye.addEventListener('click', ()=> {
      if (passwordText.getAttribute('type') == 'text') {
            passwordText.setAttribute('type', 'password');
            openEye.style.display = 'block';
            closedEye.style.display = 'none';
      } else {
            passwordText.setAttribute('type', 'password');
      }
});