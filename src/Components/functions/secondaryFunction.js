export const totalPriceItems = (order) => {
  
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1) * countTopping;

    return  (order.price + priceTopping) * order.count;
   }

   
export const currency = string => {
   return string.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  })
}

export const projection = rules => {
  const keys = Object.keys(rules)
  return obj => keys.reduce((newObj, key) => {
    newObj[key] = rules[key].reduce((value, fn, i) => (i ? fn(value) : obj[fn]), null)
    return newObj;
  }, {})
}

