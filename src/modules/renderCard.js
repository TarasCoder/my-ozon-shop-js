const renderCard = (goods) => {
  const cardWrapper = document.querySelector(".cart-wrapper");

  cardWrapper.innerHTML = "";

  if (goods.length === 0) {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div id="cart-empty">
      Ваша корзина пока пуста
    </div>
`
    );
  } else {
    goods.forEach((goodsItem) => {
      cardWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-key="${goodsItem.id}">
              ${
                goodsItem.sale
                  ? '<div class="card-sale">🔥Hot Sale🔥</div>'
                  : null
              } 
              <div class="card-img-wrapper">
                  <span class="card-img-top" style="background-image: url(${
                    goodsItem.img
                  })"></span>
              </div>
              <div class="card-body justify-content-between">
                  <div class="card-price">${goodsItem.price} UAH</div>
                  <h5 class="card-title">${goodsItem.title}</h5>
                  <button class="btn btn-primary">Удалить</button>
              </div>
          </div>
      `
      );
    });
  }
};

export default renderCard;
