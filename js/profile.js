let username = document.querySelector(`.profile-username`);
let pass = document.querySelector(`.profile-pass`);
let showPass = document.querySelector(`.show-pass`);
let email = document.querySelector(`.profile-email`);
let cartCount = document.querySelector(`.products-in-cart`);

let avatarFrame = document.querySelector(`.avatar-frame`);
let profileAvatarImageLayer = document.querySelector(`.image-layer`);
let avatarBtn = document.querySelector(`.avatar-getter`);

let deleteBtn = document.querySelector(`.delete-account`);
let editBtn = document.querySelector(`.edit-profile`);

window.onload = () => {
  getAvatar();
  showFavSideBar();
};

username.innerHTML = `${localStorage.getItem(`u_name`)}`;
email.innerHTML = `Email: ${localStorage.getItem(`email`)}`;
pass.innerHTML = `Password:	***`;
productsInCart = storageGetter(`productsInCart`);
cartCount.innerHTML = `Products currently in cart: ${
  productsInCart ? arraySumer(productsInCart.map((p) => p.amount)) : 0
}`;

showPass.addEventListener(`change`, () => {
  pass.innerHTML = `Password: ${
    showPass.checked ? localStorage.getItem(`pass`) : "***"
  }`;
});

avatarBtn.addEventListener(`change`, readImage);

function readImage() {
  return new Promise((resolve, reject) => {
    // if (avatarBtn.files[0].size > 409600) {
    //   alert(`File too big`);
    //   return;
    // }

    let reader = new FileReader();
    reader.readAsDataURL(avatarBtn.files[0]);
    reader.onload = () => {
      resolve(reader.result);
      setAvatar(reader.result);
    };
    reader.onerror = () => {
      reject(new Error(`Error reading the image.`));
    };
  });
}

function setAvatar(e) {
  localStorage.setItem(`avatar`, e);
  getAvatar();
}
function getAvatar() {
  let temp = localStorage.getItem(`avatar`);

  if (!temp)
    profileAvatarImageLayer.innerHTML = `<i class="fa-solid fa-user-astronaut fa-2x"></i>`;
  else
    profileAvatarImageLayer.innerHTML = `<img src="${temp}" class="profile-avatar" />`;
}

deleteBtn.addEventListener(`click`, () => {
  let temp = prompt(
    "Are you sure you want to delete your account permanently? \n (Yes to confirm)"
  );
  if (temp.toLocaleLowerCase() == `yes`) {
    localStorage.clear();
    window.location = `login.html`;
  }
});
