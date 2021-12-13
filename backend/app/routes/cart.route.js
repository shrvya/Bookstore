const {Router} = require('express');
const cartController = require('../controller/cart/cart.controller');
const routerCart = Router();
const validation = require('../middleware/cart.middleware.js');
routerCart.get('/:id',  cartController.get_cart_items);
routerCart.post('/:id',  cartController.add_cart_item);
routerCart.delete('/:id/:itemId', cartController.delete_item);
module.exports = routerCart;