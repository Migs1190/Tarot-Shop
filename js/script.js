let preNav = document.querySelector(`#pre-sign`);
let postNav = document.querySelector(`#post-sign`);
let navUsername = document.querySelector(`#nav-username`);
let logout = document.querySelector(`#logout`);

let key = localStorage.getItem(`u_name`);
let url = window.location.href;

if (key && url.indexOf(`index.html`) != -1) {
  preNav.remove();
  navUsername.innerHTML = key;
  logout.innerHTML = `Logout`;
}
logout.addEventListener(`click`, () => {
  localStorage.clear();
});

//--------------------------------------------------

let productFrame = document.querySelector(`#product-frame`);

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
              <a href="" class="product-action-icon" id="add-to-cart"
                ><i class="fa-solid fa-cart-plus"></i
              ></a>
              <a href="" class="product-action-icon" id="add-to-favorites"
                ><i class="fa-solid fa-heart"></i
              ></a>
              <a href="" class="product-action-icon" id="copy-link"
                ><i class="fa-solid fa-link"></i
              ></a>
            </div>
            <!-- ./product-actions -->
          </div>
          <!-- ./product-item - ${e.title} -->
        `;
});
