"use strict";
let badge = document.querySelector(`#badge`);
badge.innerHTML = 0;
let productFrame = document.querySelector(`#product-frame`);
let miniCart = document.querySelector(`.mini-cart`);
let url = window.location.pathname;
let favoritesList = document.querySelector(`#side-bar`);
let filter = document.querySelector(`#product-filter select`);

window.onload = () => {
  if (urlSearcher(`/index.html`) || url == `/` || url == `/Tarot-Shop/`) {
    filter.selectedIndex = 0;
    productSpreader();
  }
  showFavSideBar();
};
//------------------General Functions-------------------
/* #region   */
function arraySumer(array) {
  let sum = 0;
  array.forEach((e) => {
    sum += e;
  });
  return sum;
}

function checkFav() {
  products.forEach((e) => {
    let addToFav = document.querySelector(`#add-to-favorites_${e.id}`);
    addToFav.innerHTML =
      e.fav == true
        ? `<i class="fa-solid fa-heart fa-lg" style="color: red"></i>`
        : `<i class="fa-solid fa-heart fa-lg"></i>`;
  });
}
function showFavSideBar() {
  if (favoritesList.innerHTML == ``) {
    favoritesList.style.left = `-7%`;
  } else {
    favoritesList.style.left = `0`;
  }
}
function filterFav() {
  return products.filter((e) => e.fav == true);
}
function urlSearcher(text) {
  if (url.search(text) !== -1) return true;
  return false;
}
function storageSetter(x, y = []) {
  y.sort();
  return localStorage.setItem(`${x}`, JSON.stringify(y));
}
function storageGetter(x) {
  return JSON.parse(localStorage.getItem(`${x}`));
}
/* #endregion */
//--------------------------Functions-------------------
/* #region   */
function addedToCart(title, id, price, location) {
  if (localStorage.getItem(`logged`) == `No`) {
    window.location = `login.html`;
    return;
  }
  if (!storageGetter(`productsInCart`)) {
    storageSetter(`productsInCart`);
  }
  let productsInCart = storageGetter(`productsInCart`);

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
  storageSetter(`productsInCart`, productsInCart);
}

function addedToFav(id) {
  if (localStorage.getItem(`logged`) == `No`) {
    window.location = `login.html`;
    return;
  }

  let index = products.findIndex((p) => p == products.find((p) => p.id == id));
  products[index].fav = products[index].fav == true ? false : true;
  products.sort((a, b) => a.id - b.id);
  storageSetter(`products`, products);

  checkFav();
  favSpreader();
  showFavSideBar();
  storageSetter(`productsInFav`, filterFav());
  if (filterFav() == ``) localStorage.removeItem(`productsInFav`);
}

function copiedToClip(title) {
  navigator.clipboard.writeText(title);
}

function deleteProduct(id) {
  let index = products.findIndex((e) => e.id == id);
  products.splice(index, 1);
  storageSetter(`products`, products);
  productFrame.innerHTML = ``;
  productSpreader();
  deleteFromCart(id);
}
function deleteFromCart(id) {
  let productsInCart = storageGetter(`productsInCart`);
  let index = productsInCart.findIndex((e) => e.id == id);
  productsInCart.splice(index, 1);
  storageSetter(`productsInCart`, productsInCart);
}
function passedToDetails(title) {
  localStorage.setItem(`passedCard`, title);
  window.location = `productDetails.html`;
}
function passedToCreation() {
  window.location = `productCreation.html`;
}
/* #endregion */
//-------------------------Loops------------------------
/* #region   */
//Refresh Selected products in localStorage
setInterval(() => {
  let productsInCart = storageGetter(`productsInCart`);
  if (!productsInCart) return;
  if (productsInCart.length !== 0) {
    miniCart.innerHTML = ``;
    //Add each product as an HTML div tag
    productsInCart.forEach((e) => {
      miniCart.innerHTML += `<div class="mini-cart-item">
      <h5>${e.title}</h5>
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
  } else {
    miniCart.innerHTML = `No items selected`;
    badge.innerHTML = 0;
  }
}, 1);

/* #endregion */
//------------------------Search Bar--------------------
/* #region   */
let searchBar = document.querySelector("#search");

searchBar.addEventListener(`input`, () => {
  let x = searchBar.value.toLowerCase().trim();
  let p = products.filter((e) => e.title.toLowerCase().search(x) !== -1);
  productFrame.innerHTML = ``;
  productSpreader(p);
});
/* #endregion */
//---------------------Product Spreader-----------------
/* #region   */
function productSpreader(p = products) {
  if (urlSearcher(`/index.html`) || urlSearcher(`/`)) {
    p.forEach((e) => {
      productFrame.innerHTML += `
        <div class="product-item nova">
            <img
              class="product-item-img"
              src="${e.location}"
              alt="${e.title}"
              onclick="passedToDetails('${e.title}', '${e.id}', '${
        e.price
      }', '${e.location}')"
            />
            <h4 class="product-item-title">${e.title}</h4>
            <h5 class="product-item-price">
            ${e.price == 0 ? "free" : e.price + "&dollar;"}
            </h5>
            <div class="product-action product-action-${e.id}">
            <button title="Add to the cart" class="product-action-icon" id="add-to-cart" onclick="addedToCart('${
              e.title
            }', '${e.id}', '${e.price}', '${e.location}')">
            <i class="fa-solid fa-cart-plus fa-lg"></i>
              </button>
              <button title="Add to favorites list" class="product-action-icon" id="add-to-favorites_${
                e.id
              }" onclick="addedToFav(${e.id})">
              <i class="fa-solid fa-heart fa-lg"></i>
              </button>
              <button title="Copy product title" class="product-action-icon" id="copy-link" onclick="copiedToClip('${
                e.title
              }')">
              <i class="fa-solid fa-link fa-lg"></i>
              </button>
            </div>
            <!-- ./product-actions -->
          </div>
          <!-- ./product-item - ${e.title} -->
        `;
      if (e.created == true) {
        document.querySelector(`.product-action-${e.id}`).innerHTML += `
          <br/>
          <button class="product-action-icon" id="delete-product" onclick="deleteProduct('${e.id}')">
          <i class="fa-regular fa-trash-can fa-lg"></i>
          </button>`;
      }
    });
    checkFav();
  }
}
/* #endregion */
//-----------------------Favorites Maker----------------
/* #region   */

function favSpreader() {
  favoritesList.innerHTML = ``;

  filterFav().forEach((e) => {
    favoritesList.innerHTML += `
      <div class="side-product-frame">
          <img src="${e.location}"
          alt="${e.title}"
          title="${e.title}"
          class="side-bar-products"
          onclick="passedToDetails('${e.title}', '${e.id}', '${e.price}', '${e.location}')"/>
      </div>
      `;
  });
}
favSpreader();
/* #endregion */
//-----------------------Filter-------------------------
/* #region   */
if (urlSearcher(`/index.html`) || urlSearcher(`/`)) {
  filter.addEventListener(`change`, (e) => {
    let temp = e.target.value;
    products = storageGetter(`products`);
    let tempP = products;

    switch (temp) {
      case `alphabetical`:
        tempP.sort((a, b) => a.title.localeCompare(b.title));
        productFrame.innerHTML = ``;
        productSpreader(tempP);
        break;
      case `price`:
        tempP.sort((a, b) => a.price - b.price);
        productFrame.innerHTML = ``;
        productSpreader(tempP);
        break;
      default:
        products.sort((a, b) => a.id - b.id);
        productFrame.innerHTML = ``;
        productSpreader();
        break;
    }
  });
}
/* #endregion */
