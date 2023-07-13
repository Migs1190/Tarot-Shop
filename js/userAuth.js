if (window.location == `index.html`) {
  let addToCart = document.querySelector(`#add-to-cart`);
  addToCart.addEventListener(`click`, () => {
    if (!localStorage.getItem(`u_name`)) {
      window.location = `login.html`;
    }
  });
}
//--------------------------------------------

let preNav = document.querySelector(`#pre-sign`);
let postNav = document.querySelector(`#post-sign`);
let navUsername = document.querySelector(`#nav-username`);
let logout = document.querySelector(`#logout`);

let logged = localStorage.getItem(`logged`);
let url = window.location.pathname;

if (logged == `No` && (url == `/register.html` || url == `/login.html`)) {
} else {
  preNav.remove();
  postNav.style.opacity = `1`;
  postNav.style.visibility = `visible`;
  navUsername.innerHTML = localStorage.getItem(`u_name`);
}
//Log Out
logout.addEventListener(`click`, () => {
  localStorage.setItem(`logged`, `No`);
  window.location.reload();
});
