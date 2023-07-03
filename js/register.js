`use strict`;
let regUsername = document.querySelector(`#reg-username`);
let regEmail = document.querySelector(`#reg-email`);
let regPass = document.querySelector(`#reg-password`);
let regPassRep = document.querySelector(`#reg-password-rep`);
let signUpBtn = document.querySelector(`#signup`);
let fillAlert = document.querySelector(`#fill-alert`); //0
let passAlert = document.querySelector(`#pass-alert`); //1
let emailAlert = document.querySelector(`#email-alert`); //2
let email2Alert = document.querySelector(`#email2-alert`); //3
let unameAlert = document.querySelector(`#uname-alert`); //4

let alerts = document.querySelectorAll(`.alert`);

signUpBtn.addEventListener(`click`, register);

function picking(n) {
  alerts.forEach((element, index) => {
    if (index == n) element.style.opacity = `1`;
    else element.style.opacity = `0`;
  });
}

function register(e) {
  e.preventDefault();
  if (
    regUsername.value.trim() == `` ||
    regEmail.value.trim() == `` ||
    regPass.value.trim() == ``
  ) {
    picking(0);
  } else if (regPassRep.value != regPass.value) {
    picking(1);
  } else if (!regEmail.checkValidity()) {
    picking(2);
  } else if (regEmail.value == localStorage.getItem(`email`)) {
    picking(3);
  } else if (regUsername.value == localStorage.getItem(`u_name`)) {
    picking(4);
  } else {
    localStorage.setItem(`u_name`, `${regUsername.value}`);
    localStorage.setItem(`pass`, `${regPass.value}`);
    localStorage.setItem(`email`, `${regEmail.value}`);

    setTimeout((e) => {
      window.location = `login.html`;
    }, 1000);
  }
}
