const {Router} = require('express');
const customControl = require('../controller/customer/customer.controller');
const routeCustomer = Router();
const cors = require('cors');
const validation = require('../middleware/cart.middleware');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
  }
routeCustomer.get('/', validation.tokenVerification,customControl.findCustomer);
routeCustomer.post('/',cors(corsOptions),validation.tokenVerification, customControl.createCustomer);
module.exports = routeCustomer;