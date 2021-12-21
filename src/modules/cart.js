import renderCard from "./renderCard";
import postData from "./postData";

const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");
  const cartTotal = cartModal.querySelector(".cart-total > span");
  const goodsWrapper = document.querySelector(".goods");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartSendBtn = document.querySelector(".cart-confirm");
  const cartCounter = document.querySelector(".counter");
  cartCounter.innerText = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0;
  

  const openCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cartModal.style.display = "flex";
    renderCard(cart);
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  };
  const closeCart = () => {
    cartModal.style.display = "";
  };

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);

  goodsWrapper.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("btn-primary")) {
      const card = ev.target.closest(".card");
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem("goods"));
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });
      cart.push(goodItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      
      cartCounter.innerText = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0;
    }
  });
  cartWrapper.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("btn-primary")) {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const card = ev.target.closest(".card");
      const key = card.dataset.key;
      let index = cart.findIndex((item) => {
        return item.id === +key;
      });
      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      renderCard(cart);
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
      cartCounter.innerText = JSON.parse(localStorage.getItem("cart")).length;
    }
  });
  cartSendBtn.addEventListener("click", () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    postData(cart).then(() => {
      localStorage.removeItem("cart");
      renderCard([]);
      cartTotal.textContent = 0;
      cartCounter.innerText = 0;
    });
  });
};

export default cart;
