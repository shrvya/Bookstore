/**
 * @description:handles routes for requests
 * @file:user.route.js
 * @author:Shrivya Shetty
 * @since:01-12-2021
 */
 const express = require('express')
 const router = express.Router()
 const users = require('../controller/user/user.controller');
 const cors = require('cors');
 const { userValidationRules, validate } = require('../middleware/user.middleware');
 const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,            //access-control-allow-credentials:true
   optionSuccessStatus: 200
 }
 router.post('/', cors(corsOptions), userValidationRules(), validate, users.create);
 
 router.get('/', users.findAll);
 router.get('/:userId', users.findOne);
 router.put('/:userId', userValidationRules(), validate, users.update);
 router.delete('/:userId', users.delete);
 
 router.post("/login", users.loginUser);
 router.post("/forgot", users.forgotPassword);
 router.post("/reset/:token", users.resetPassword);
 router.post("/register", userValidationRules(), validate, users.registerUser);
 module.exports = router
 
 