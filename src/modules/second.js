import getData from "./getData";
import postData from "./getData";

const second = () => {
  const cartBtn = document.getElementById("cart");

  getData().then((data) => {
    console.log(data);
  });
};

export default second;
