const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const compose = (f, g) => (...args) => f(g(...args))
const pipe = (f, g) => (...args) => g(f(...args))
const purchaseItem  = (...fns) => fns.reduce(compose);

const res = purchaseItem(
  emptyUserCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {name: 'laptop', price: 50})

console.log(res)

function addItemToCart(user, item) {
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user) {
  return user;
}

function buyItem(user) {
  return user;
}
function emptyUserCart(user) {
  return user;
}