const getData = (str) => {
  return fetch(
    `https://test-40e41-default-rtdb.firebaseio.com/goods.json`
  ).then((res) => {
    return res.json();
  });
};

export default getData;
