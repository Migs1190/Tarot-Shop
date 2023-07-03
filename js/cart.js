let cartFrame = document.querySelector(`.cart-frame`);
/*--------------------------Functions-------------------------*/
/* #region   */
function removeFromCart(id) {
  let productsInCart = JSON.parse(localStorage.getItem(`productsInCart`));
  let index = productsInCart.findIndex((p) => p.id == id);
  console.log(productsInCart);
  console.log(index);
  if (productsInCart[index].amount === 1) {
    productsInCart.splice(index, 1);
    console.log(`removed`);
  } else {
    productsInCart[index].amount--;
    console.log(`reduced`);
  }
  window.location.reload();
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

if (localStorage.getItem(`productsInCart`)) {
  let productsInCart = JSON.parse(localStorage.getItem(`productsInCart`));
  productsInCart.forEach((e) => {
    cartFrame.innerHTML += `
    <div class="cart-item">
            <img src="${e.location}" alt="${e.title}" draggable="false"/>
            <h4>${e.title} x${e.amount}</h4>
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

setInterval(() => {
  if (localStorage.getItem(`logged`) !== `Yes`) {
    window.location = `login.html`;
  }
}, 1000);
