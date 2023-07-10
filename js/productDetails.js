if (window.location.href.indexOf(`productDetails.html`) !== -1) {
  let productDetails = document.querySelector(`#product-details`);
  let title = JSON.parse(localStorage.getItem(`passedCard`));

  let tempFiller = products.find((e) => e.title === title);

  productDetails.innerHTML = `
  <img src="${tempFiller.location}" alt="${tempFiller.title}" draggable="false"/>
  <div class="product-text">
  <h2>${tempFiller.title}</h2>
      <p>${tempFiller.description}</p>
      </div>
      `;
}
