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

function passedToDetails(title) {
  localStorage.setItem(`passedCard`, JSON.stringify(title));
  window.location = `productDetails.html`;
}
/* #endregion */
//------------------------Loops--------------------------
/* #region   */
//Refresh Selected products in localStorage
if (localStorage.getItem(`productsInCart`)) {
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
}
/* #endregion */
//-------------------------Product Maker-------------------------

if (window.location.href.indexOf(`index.html`) != -1) {
  products.forEach((e) => {
    productFrame.innerHTML += `
        <div class="product-item nova">
            <img
              class="product-item-img"
              src="${e.location}"
              alt="${e.title}"
              onclick="passedToDetails('${e.title}', '${e.id}', '${e.price}', '${e.location}')"
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
}
//---------------------------Events-----------------------
