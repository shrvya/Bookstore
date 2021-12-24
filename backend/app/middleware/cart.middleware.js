
/**
 * @description:token verification
 * @file:cart.middleware.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const jwttoken = require("../utility/auth");

/**
 * @description verifies the generated token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const tokenVerification  = (req, res, next) => {
  
    const authHeader = req.headers.authorization;
  
      if (authHeader) {
          const token = authHeader.split(' ')[1];
  
          jwttoken.verifyToken(token, (err, user) => {
              if (err) {
                  return res.send(err);
              }
              req.body.userId = user.userId;
              console.log(user.userId);
              next();
          });
      } else {
          res.sendStatus(401);
      }
    
  };
module.exports = { tokenVerification };
