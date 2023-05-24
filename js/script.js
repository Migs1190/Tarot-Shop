"use strict";
let preNav = document.querySelector(`#pre-sign`);
let postNav = document.querySelector(`#post-sign`);
let navUsername = document.querySelector(`#nav-username`);
let logout = document.querySelector(`#logout`);
let loggedCart = document.querySelector(`#logged-cart`);
let badge = document.querySelector(`#badge`);
badge.innerHTML = 0;
let productFrame = document.querySelector(`#product-frame`);
let addToFav = document.querySelector(`#add-to-favorites`);
let copyLink = document.querySelector(`#copy-link`);
let miniCart = document.querySelector(`.mini-cart`);

let key = localStorage.getItem(`u_name`);
let url = window.location.href;
let productsInCart = [];

if (key && url.indexOf(`index.html`) != -1) {
  preNav.remove();
  postNav.style.opacity = `1`;
  postNav.style.visibility = `visible`;
  navUsername.innerHTML = key;
}
logout.addEventListener(`click`, () => {
  localStorage.clear();
  window.location.reload();
});
//------------------------Functions--------------------------
function arraySumer(array) {
  let sum = 0;
  array.forEach((e) => {
    sum += e;
  });
  return sum;
}

function addedToCart(title, id) {
  if (productsInCart.some((p) => p.id === id)) {
    let index = productsInCart.findIndex((p) => p.id === id);
    productsInCart[index].amount++;
  } else {
    productsInCart.push({ title: title, id: id, amount: 1 });
  }
  miniCart.innerHTML = ``;
  productsInCart.forEach((e) => {
    miniCart.innerHTML += `<div class="mini-cart-item">
    ${e.title}
    <span class="product-counter">
    (${e.amount})
    </span></div>`;
    let sum = arraySumer(productsInCart.map((p) => p.amount));
    if (sum > 1000) {
      badge.innerHTML = parseFloat(sum / 1000) + `K`;
    } else {
      badge.innerHTML = sum;
    }
  });
}
//--------------------------------------------------

let products = [
  {
    id: 1,
    title: `The Moon - 18`,
    price: 69.99,
    location: `cards/themoon.png`,
  },
  {
    id: 2,
    title: `The Devil - 15`,
    price: 69.99,
    location: `cards/thedevil.png`,
  },
  {
    id: 3,
    title: `Justice - 11`,
    price: 69.99,
    location: `cards/justice.png`,
  },
  {
    id: 4,
    title: `The Heirophant - 5`,
    price: 69.99,
    location: `cards/theheirophant.png`,
  },
  {
    id: 5,
    title: `The Hanged Man - 12`,
    price: 69.99,
    location: `cards/thehangedman.png`,
  },
  {
    id: 6,
    title: `The Magician - 1`,
    price: 69.99,
    location: `cards/themagician.png`,
  },
  {
    id: 7,
    title: `Death - 13`,
    price: 69.99,
    location: `cards/death.png`,
  },
  {
    id: 8,
    title: `The sun - 19`,
    price: 69.99,
    location: `cards/thesun.png`,
  },
  {
    id: 9,
    title: `The Star - 17`,
    price: 69.99,
    location: `cards/thestar.png`,
  },
  {
    id: 10,
    title: `Judgement - 20`,
    price: 69.99,
    location: `cards/judgement.png`,
  },
  {
    id: 11,
    title: `The Tower - 16`,
    price: 69.99,
    location: `cards/thetower.png`,
  },
  {
    id: 12,
    title: `The Emperor - 4`,
    price: 69.99,
    location: `cards/theemperor.png`,
  },
  {
    id: 13,
    title: `The Chariot - 7`,
    price: 69.99,
    location: `cards/thechariot.png`,
  },
  {
    id: 14,
    title: `The High Priestess - 4`,
    price: 69.99,
    location: `cards/thehighpriestess.png`,
  },
  {
    id: 15,
    title: `The Fool - 0`,
    price: 69.99,
    location: `cards/thefool.png`,
  },
  {
    id: 16,
    title: `Strength - 8`,
    price: 69.99,
    location: `cards/strength.png`,
  },
  {
    id: 17,
    title: `The Hermit - 9`,
    price: 69.99,
    location: `cards/thehermit.png`,
  },
];

products.forEach((e) => {
  productFrame.innerHTML += `
        <div class="product-item nova">
            <img
              class="product-item-img"
              src="${e.location}"
              alt="${e.title}"
            />
            <h3 class="product-item-title">${e.title}</h3>
            <p class="product-item-price">${e.price}&dollar;</p>
            <div class="product-action">
              <button class="product-action-icon" id="add-to-cart" onclick="addedToCart('${e.title}', ${e.id})">
              <i class="fa-solid fa-cart-plus fa-lg"></i>
              </button>
              <button class="product-action-icon" id="add-to-favorites" onclick="addedToFav(${e.id})">
              <i class="fa-solid fa-heart fa-lg"></i>
              </button>
              <button class="product-action-icon" id="copy-link">
              <i class="fa-solid fa-link fa-lg"></i>
              </button>
            </div>
            <!-- ./product-actions -->
          </div>
          <!-- ./product-item - ${e.title} -->
        `;
});
//--------------------------------------------------
let addToCart = document.querySelector(`#add-to-cart`);
addToCart.addEventListener(`click`, () => {
  if (!localStorage.getItem(`u_name`)) {
    window.location = `login.html`;
  }
});
