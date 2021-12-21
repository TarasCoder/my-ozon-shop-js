import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const filter = () => {
  const minInput = document.querySelector("#min");
  const maxInput = document.querySelector("#max");
  const checkboxInput = document.querySelector("#discount-checkbox");
  const checkboxSpan = document.querySelector(".filter-check_checkmark");

  minInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });
  maxInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });
  checkboxInput.addEventListener("change", () => {
    if (checkboxInput.checked) {
      checkboxSpan.classList.add("checked");
    } else {
      checkboxSpan.classList.remove("checked");
    }
    getData().then((data) => {
        renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });
};

export default filter;
