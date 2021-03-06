/**
 * @description:validates credentials of user
 * @file:user.middleware.js
 * @author:Shrivya Shetty
 * @since:01-12-2021
 */

 const { check, validationResult } = require('express-validator');
 /**
  * @description validates credentials of user
  * @returns 
  */
 const userValidationRules = () => {
     return [
         check('firstname').matches("^[A-Z][a-zA-Z]{3,}").exists().isLength({ min: 3 })
             .withMessage("Please enter valid firstname"),
         check('lastname').matches("^[A-Z][a-zA-Z]{2,}").isLength({ min: 2 })
             .withMessage("Please enter valid lasttname"),
         
         check('email').exists().isEmail().withMessage("enter valid Email"),
         check('password').exists().matches("^[a-zA-Z0-9@#$%^&*()!~]{8,}$").withMessage("enter valid passswordd"),
         check(  'phoneNumber').exists().isMobilePhone().withMessage("enter valid phonenumber"),

     ]
 }
 
 const validate = (req, res, next) => {
     const errors = validationResult(req)
     if (errors.isEmpty()) {
         return next()
     }
     const extractedErrors = []
     errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
     return res.status(422).json({ errors: extractedErrors })
 }
 module.exports = { userValidationRules, validate };