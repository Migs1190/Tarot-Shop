`use strict`;
let regUsername = document.querySelector(`#reg-username`);
let regEmail = document.querySelector(`#reg-email`);
let regPass = document.querySelector(`#reg-password`);
let regPassRep = document.querySelector(`#reg-password-rep`);
let signUpBtn = document.querySelector(`#signup`);
let fillAlert = document.querySelector(`#fill-alert`);
let passAlert = document.querySelector(`#pass-alert`);
let emailAlert = document.querySelector(`#email-alert`);
let alerts = document.querySelector(`.alert`);

signUpBtn.addEventListener(`click`, register);

function register(e) {
  e.preventDefault();
  if (
    regUsername.value.trim() == `` ||
    regEmail.value.trim() == `` ||
    regPass.value.trim() == ``
  ) {
    emailAlert.style.opacity = `0`;
    passAlert.style.opacity = `0`;

    fillAlert.style.opacity = `1`;
  } else if (regPassRep.value != regPass.value) {
    fillAlert.style.opacity = `0`;
    emailAlert.style.opacity = `0`;

    passAlert.style.opacity = `1`;
  } else if (!regEmail.checkValidity()) {
    passAlert.style.opacity = `0`;
    fillAlert.style.opacity = `0`;

    emailAlert.style.opacity = `1`;
  } else {
    localStorage.setItem(`u_name`, `${regUsername.value}`);
    localStorage.setItem(`pass`, `${regPass.value}`);
    localStorage.setItem(`email`, `${regEmail.value}`);

    setTimeout((e) => {
      window.location = `login.html`;
    }, 1000);
  }
}
