
const express = require('express')
    const cart = require("../controller/cart/cart.controller");
    const {
     tokenVerification
    } = require("../middleware/cart.middleware.js");
    const router = express.Router()
    const cors = require('cors');

 const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,            
   optionSuccessStatus: 200
 }
    router.get("/",tokenVerification, cart.findAll);  
    router.post("/",cors(corsOptions),tokenVerification, cart.create);
    router.put("/:cartId",tokenVerification, cart.update);
    router.delete("/:cartId",tokenVerification, cart.delete);
    
    router.delete("/",tokenVerification, cart.deleteItems);
    module.exports = router
  