`use strict`;
let regUsername = document.querySelector(`#username`);
let regEmail = document.querySelector(`#email`);
let regPass = document.querySelector(`#password`);
let signup_btn = document.querySelector(`#signup`);
let fill_alert = document.querySelector(`.alert`);

signup_btn.addEventListener(`click`, register);

function register(e) {
  e.preventDefault();
  if (
    regUsername.value.trim() == `` ||
    regEmail.value.trim() == `` ||
    regPass.value.trim() == ``
  )
    fill_alert.style.opacity = `1`;
  else {
    localStorage.setItem(`u_name`, `${regUsername.value}`);
    localStorage.setItem(`pass`, `${regPass.value}`);
    localStorage.setItem(`email`, `${regEmail.value}`);

    setTimeout((e) => {
      window.location = `login.html`;
    }, 1000);
  }
}
