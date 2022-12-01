export const calctotalPrice = items =>
  items.reduce((acc, gamePrice) => (acc += gamePrice.price), 0)
