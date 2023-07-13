"use strict";
let badge = document.querySelector(`#badge`);
badge.innerHTML = 0;
let productFrame = document.querySelector(`#product-frame`);
let miniCart = document.querySelector(`.mini-cart`);

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
function filterFav() {
  return products.filter((e) => e.fav == true);
}
/* #endregion */
//--------------------------Functions-------------------
/* #region   */
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
  if (localStorage.getItem(`logged`) == `No`) {
    window.location = `login.html`;
    return;
  }

  let index = products.findIndex((p) => p == products.find((p) => p.id == id));
  products[index].fav = products[index].fav == true ? false : true;
  localStorage.setItem(`products`, JSON.stringify(products));

  checkFav();
  favSpreader();

  localStorage.setItem(`productsInFav`, JSON.stringify(filterFav()));
  console.log(filterFav());
  if (filterFav() == ``) localStorage.removeItem(`productsInFav`);
}

function copiedToClip(title) {
  navigator.clipboard.writeText(title);
}

function passedToDetails(title) {
  localStorage.setItem(`passedCard`, JSON.stringify(title));
  window.location = `productDetails.html`;
}
function passedToCreation(){
    window.location = `productCreation.html`;
}
/* #endregion */
//-------------------------Loops------------------------
/* #region   */
//Refresh Selected products in localStorage
setInterval(() => {
  let productsInCart = JSON.parse(localStorage.getItem(`productsInCart`));

  //Checking for products
  if (productsInCart !== null) {
    miniCart.innerHTML = ``;
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
  } else {
    miniCart.innerHTML = `No items selected`;
    badge.innerHTML = 0;
  }
}, 1);

/* #endregion */
//------------------------Product Maker-----------------
/* #region   */
let searchBar = document.querySelector("#search");

productSpreader(products);
searchBar.addEventListener(`input`, () => {
  let x = searchBar.value.toLowerCase().trim();
  let p = products.filter((e) => e.title.toLowerCase().search(x) !== -1);
  productFrame.innerHTML = ``;
  productSpreader(p);
});

function productSpreader(p) {
  if (
    window.location.pathname == `/index.html` ||
    window.location.pathname == `/`
  ) {
    p.forEach((e) => {
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
              <button class="product-action-icon" id="add-to-favorites_${e.id}" onclick="addedToFav(${e.id})">
              <i class="fa-solid fa-heart fa-lg"></i>
              </button>
              <button class="product-action-icon" id="copy-link" onclick="copiedToClip('${e.title}')">
              <i class="fa-solid fa-link fa-lg"></i>
              </button>
            </div>
            <!-- ./product-actions -->
          </div>
          <!-- ./product-item - ${e.title} -->
        `;
    });
    checkFav();
  }
}
/* #endregion */
//-----------------------Favorites Maker----------------
/* #region   */
let favoritesList = document.querySelector(`#side-bar`);

function favSpreader() {
  favoritesList.innerHTML = ``;

  filterFav().forEach((e) => {
    favoritesList.innerHTML += `
      <div class="side-product-frame">
          <img src="${e.location}"
          alt="${e.title}"
          class="side-bar-products"
          onclick="passedToDetails('${e.title}', '${e.id}', '${e.price}', '${e.location}')"/>
      </div>
      `;
  });
}
favSpreader();
/* #endregion */
