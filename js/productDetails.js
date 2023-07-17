if (window.location.href.indexOf(`productDetails.html`) !== -1) {
  let productDetails = document.querySelector(`#product-details`);
  let title = localStorage.getItem(`passedCard`);
  let pageTitle = document.querySelector(`#PD`);

  let tempFiller = products.find((e) => e.title === title);

  pageTitle.innerHTML = `card - ${title}`;
  productDetails.innerHTML = `
  <img src="${tempFiller.location}" alt="${tempFiller.title}" draggable="false"/>
  <div class="product-text">
  <h2>${tempFiller.title}</h2>
      <p>${tempFiller.description}</p>
      </div>
      `;
}
