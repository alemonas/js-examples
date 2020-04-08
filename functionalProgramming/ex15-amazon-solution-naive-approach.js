// Amazon shopping

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

function addItemToCart() {}
function applyTaxToItems() {}
function buyItem() {}
