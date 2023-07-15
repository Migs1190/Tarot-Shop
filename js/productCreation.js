let submitBtn = document.querySelector(`.created-submit`);
let createdName = document.querySelector(`.created-name`);
let createdDesc = document.querySelector(`.created-desc`);
let createdPrice = document.querySelector(`.created-price`);
let imagePreview = document.querySelector(`.image-preview`);
let createdImage = document.querySelector(`.created-image`);
let created_all = document.querySelectorAll(`.inp`);
let createdImageVal;

function readImage() {
  return new Promise((resolve, reject) => {
    if (createdImage.files[0].size > 409600) {
      alert(`File too big`);
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(createdImage.files[0]);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(new Error(`Error reading the image.`));
    };
  });
}

function inputError() {
  alert(`Fill all spaces`);
}

submitBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  let products = JSON.parse(localStorage.getItem(`products`));

  for (let i = 0; i < 3; i++) {
    if (created_all[i].value == ``) {
      inputError();
      return;
    }
  }
  readImage().then((e) => {
    products.push({
      id: products[products.length - 1].id + 1,
      title: createdName.value,
      price: createdPrice.value,
      location: e,
      description: createdDesc.value,
      fav: false,
    });

    localStorage.setItem(`products`, JSON.stringify(products));
    console.log(`done`);
  });
});

createdImage.addEventListener(`change`, () => {
  readImage().then((e) => {
    imagePreview.innerHTML = `<img src="${e}" draggable="false"/>`;
  });
});
