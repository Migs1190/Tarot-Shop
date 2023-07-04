"use strict";
let loggedCart = document.querySelector(`#logged-cart`);
let badge = document.querySelector(`#badge`);
badge.innerHTML = 0;
let productFrame = document.querySelector(`#product-frame`);
let addToFav = document.querySelector(`#add-to-favorites`);
let copyLink = document.querySelector(`#copy-link`);
let miniCart = document.querySelector(`.mini-cart`);

//------------------------Functions--------------------------
/* #region   */
function arraySumer(array) {
  let sum = 0;
  array.forEach((e) => {
    sum += e;
  });
  return sum;
}

function addedToCart(title, id, price, location) {
  if (localStorage.getItem(`logged`) == `No`) {
    window.location = `login.html`;
    return;
  }
  if (!localStorage.getItem(`productsInCart`)) {
    localStorage.setItem(`productsInCart`, `[]`);
  }
  let productsInCart = JSON.parse(localStorage.getItem(`productsInCart`));

  if (productsInCart.some((p) => p.id == id)) {
    let index = productsInCart.findIndex((p) => p.id === id);
    productsInCart[index].amount++;
  } else {
    productsInCart.push({
      title: title,
      id: id,
      price: price,
      location: location,
      amount: 1,
    });
  }
  productsInCart.sort();
  localStorage.setItem(`productsInCart`, JSON.stringify(productsInCart));
}

function addedToFav(id) {
  alert(`Sorry, too lazy to make a favorites list`);
}

function copiedToClip(location) {
    navigator.clipboard.writeText(location);
}
/* #endregion */
//------------------------Loops--------------------------
/* #region   */
//Refresh Selected products in localStorage
setInterval(() => {
  let productsInCart = JSON.parse(localStorage.getItem(`productsInCart`));

  //Checking for products
  if (productsInCart !== null) miniCart.innerHTML = ``;
  //Add each product as an HTML div tag
  productsInCart.forEach((e) => {
    miniCart.innerHTML += `<div class="mini-cart-item">
      ${e.title}
      <span class="product-counter">
      (${e.amount})
      </span></div>`;

    let sum = arraySumer(productsInCart.map((p) => p.amount));
    //Check if greater than 1k
    //If greater than 1k write it as nK ; n is the amount
    if (sum > 1000) badge.innerHTML = parseFloat(sum / 1000) + `K`;
    //If less than 1k write it normally
    else badge.innerHTML = sum;
  });
}, 100);
/* #endregion */
//-------------------------Product Maker-------------------------

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
  {
    id: 18,
    title: `The World - 21`,
    price: 69.99,
    location: `cards/theworld.png`,
  },
  {
    id: 19,
    title: `The Empress - 3`,
    price: 69.99,
    location: `cards/theempress.png`,
  },
  {
    id: 20,
    title: `The Temperance - 14`,
    price: 69.99,
    location: `cards/temperance.png`,
  },
  {
    id: 21,
    title: `The Wheel - 10`,
    price: 69.99,
    location: `cards/thewheel.png`,
  },
  {
    id: 22,
    title: `The Lovers - 6`,
    price: 69.99,
    location: `cards/thelovers.png`,
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
            <h4 class="product-item-title">${e.title}</h4>
            <h5 class="product-item-price">${e.price}&dollar;</h5>
            <div class="product-action">
              <button class="product-action-icon" id="add-to-cart" onclick="addedToCart('${e.title}', '${e.id}', '${e.price}', '${e.location}')">
              <i class="fa-solid fa-cart-plus fa-lg"></i>
              </button>
              <button class="product-action-icon" id="add-to-favorites" onclick="addedToFav(${e.id})">
              <i class="fa-solid fa-heart fa-lg"></i>
              </button>
              <button class="product-action-icon" id="copy-link" onclick="copiedToClip('${e.location}')">
              <i class="fa-solid fa-link fa-lg"></i>
              </button>
            </div>
            <!-- ./product-actions -->
          </div>
          <!-- ./product-item - ${e.title} -->
        `;
});
//--------------------------------------------------
