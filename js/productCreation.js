let submitBtn = document.querySelector(`.created-submit`);
let createdName = document.querySelector(`.created-name`);
let createdDesc = document.querySelector(`.created-desc`);
let createdPrice = document.querySelector(`.created-price`);
let imagePreview = document.querySelector(`.image-preview`);
let createdImage = document.querySelector(`.created-image`);
let createdImageVal;
let created_all = document.querySelectorAll(`.inp`);

submitBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  let products = JSON.parse(localStorage.getItem(`products`));

  for (let i = 0; i < 3; i++) {
    if (created_all[i].value == ``) {
      inputError();
      return;
    }
  }
  products.push({
    id: ++products[products.length - 1].id,
    title: createdName.value,
    price: createdPrice.value,
    location: readImage(),
    description: createdDesc.value,
    fav: false,
  });
  localStorage.setItem(`products`, JSON.stringify(products));
  console.log(`done`);
});

function inputError() {
  alert(`Fill all spaces`);
}

function readImage() {
  let reader = new FileReader();
  reader.readAsDataURL(createdImage.files[0]);

  reader.onload = () => {
    createdImageVal = reader.result;
  };
  return createdImageVal;
}

createdImage.addEventListener(`change`, () => {
  imagePreview.innerHTML = `<img src="${readImage()}" draggable="false"/>`;
});
