// Amazon shopping
// Naive approach

const user = {
  name: 'Jose',
  active: true,
  cart: [],
  purchases: []
};

purchaseItem(user, {name: 'laptrop', price: 3000})

function purchaseItem(user, item) {
  return Object.assign({}, user, {purchases: item})
}

// to much simple, to purchase an item, first we should add item to cart, apply taxes, etc
// you could use compose to solve this issue
// purchaseItem(
//   emptyCart
//   butItem
//   applyTaxToItems,
//   addItemToCart
// )(user, {name: 'laptop', price: 3887})

function addItemToCart() {}
function applyTaxToItems() {}
function buyItem() {}
function emptyCart() {}
