const {Router} = require('express');
const orderController = require('../controller/order/order.controller');
const routerOrder = Router();
const validation = require('../middleware/cart.middleware.js');
routerOrder.get('/', validation.tokenVerification, orderController.findAll);
routerOrder.post('/', validation.tokenVerification, orderController.create);
module.exports = routerOrder;