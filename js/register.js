`use strict`;
let regUsername = document.querySelector(`#reg-username`);
let regEmail = document.querySelector(`#reg-email`);
let regPass = document.querySelector(`#reg-password`);
let signUpBtn = document.querySelector(`#signup`);
let fillAlert = document.querySelector(`#fill-alert`);

signUpBtn.addEventListener(`click`, register);

function register(e) {
  e.preventDefault();
  if (
    regUsername.value.trim() == `` ||
    regEmail.value.trim() == `` ||
    regPass.value.trim() == ``
  )
    fillAlert.style.opacity = `1`;
  else {
    localStorage.setItem(`u_name`, `${regUsername.value}`);
    localStorage.setItem(`pass`, `${regPass.value}`);
    localStorage.setItem(`email`, `${regEmail.value}`);

    setTimeout((e) => {
      window.location = `login.html`;
    }, 1000);
  }
};