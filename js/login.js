let email = document.querySelector(`#email`);
let pass = document.querySelector(`#password`);
let signin_btn = document.querySelector(`#signin`);
let fill_alert = document.querySelector(`.alert`);
let wrong_alert = document.querySelector(`.wrong-alert`);

let key_email = localStorage.getItem(`email`);
let key_pass = localStorage.getItem(`pass`);

signin_btn.addEventListener(`click`, login);

function login(e) {
  e.preventDefault();
  if (email.value.trim() == `` || pass.value.trim() == ``) {
    wrong_alert.style.opacity = `0`;
    fill_alert.style.opacity = `1`;
  } else if (
    email.value.trim() !== key_email ||
    pass.value.trim() !== key_pass
  ) {
    fill_alert.style.opacity = `0`;
    wrong_alert.style.opacity = `1`;
  } else {
    setTimeout((e) => {
      window.location = `index.html`;
    }, 1000);
  }
}
