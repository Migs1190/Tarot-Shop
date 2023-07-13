let cartFrame = document.querySelector(`.cart-frame`);
let productsInCart = JSON.parse(localStorage.getItem(`productsInCart`));

cartSpreader();
/*--------------------------Functions-------------------------*/
/* #region   */
function removeFromCart(id) {
  let index = productsInCart.findIndex((p) => p.id == id);

  if (productsInCart[index].amount === 1) {
    productsInCart.splice(index, 1);
  } else {
    productsInCart[index].amount--;
  }

  cartFrame.innerHTML = ``;
  cartSpreader(productsInCart);

  if (productsInCart.length === 0) {
    localStorage.removeItem(`productsInCart`);
  } else {
    localStorage.setItem(`productsInCart`, JSON.stringify(productsInCart));
  }
}

function addedToArchive(id) {
  alert(`Sorry, too lazy to make a favorites list`);
}

/* #endregion */
function cartSpreader(p = productsInCart) {
  if (localStorage.getItem(`productsInCart`)) {
    p.forEach((e) => {
      cartFrame.innerHTML += `
    <div class="cart-item">
            <img src="${e.location}"
            alt="${e.title}"
            draggable="false"
            onclick="passedToDetails('${e.title}', '${e.id}', '${e.price}', '${e.location}')"/>
            <h4>${e.title} <span class="firebrick">x${e.amount}</span></h4>
            <h5>${e.price}&dollar;</h5>
            <div class="cart-item-actions">
              <button class="remove-from-cart" onclick="removeFromCart(${e.id})">
                <i class="fa-regular fa-trash-can"></i>
              </button>
              <button class="save-for-later" onclick="addedToArchive(${e.id})">
                <i class="fa-solid fa-box-archive"></i>
              </button>
            </div>
          </div>
    `;
    });
  }
}

setInterval(() => {
  if (localStorage.getItem(`logged`) !== `Yes`) {
    window.location = `login.html`;
  }
}, 1000);
