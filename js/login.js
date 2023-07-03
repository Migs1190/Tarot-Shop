let logEmail = document.querySelector(`#log-email`);
let logPass = document.querySelector(`#log-password`);
let signInBtn = document.querySelector(`#signin`);
let fillAlert = document.querySelector(`#fill-alert`);
let wrongAlert = document.querySelector(`#wrong-alert`);

let keyEmail = localStorage.getItem(`email`);
let keyPass = localStorage.getItem(`pass`);

signInBtn.addEventListener(`click`, login);

function login(e) {
  e.preventDefault();
  if (logEmail.value.trim() == `` || logPass.value.trim() == ``) {
    wrongAlert.style.opacity = `0`;
    fillAlert.style.opacity = `1`;
  } else if (logEmail.value.trim() !== keyEmail || logPass.value.trim() !== keyPass) {
    fillAlert.style.opacity = `0`;
    wrongAlert.style.opacity = `1`;
  } else {
    setTimeout((e) => {
        localStorage.setItem(`logged`, `Yes`)
      window.location = `index.html`;
    }, 1000);
  }
}
