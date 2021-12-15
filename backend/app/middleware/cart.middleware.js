
const jwttoken = require("../utility/auth");


const tokenVerification  = (req, res, next) => {
  
    const authHeader = req.headers.authorization;
  
      if (authHeader) {
          const token = authHeader.split(' ')[1];
  
          jwttoken.verifyToken(token, (err, user) => {
              if (err) {
                  return res.send(err);
              }
              req.body.userId = user._id;
              console.log(user._id);
              next();
          });
      } else {
          res.sendStatus(401);
      }
    
  };
module.exports = { tokenVerification };
