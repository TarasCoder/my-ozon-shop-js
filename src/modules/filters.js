export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem)=>{
      return goodsItem.title.includes(value)
  });
};