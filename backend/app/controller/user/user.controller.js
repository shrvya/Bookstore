

/**
 * @description:get the request, response object from user routes
 * @file:user.controller.js
 * @author:Shrivya Shetty
 * @since:01-12-2021
 */
 const { isEmpty } = require('class-validator');
 const logger = require('../../../utils/logger');
 const {
     createNewUser, getUsers, getUser, updateUserId, deleteUser, loginNewUser, registerNewUser, forgot, resetPass
 } = require('../../service/user.service');
 const dto = require("./user.response");
 
 let responseobj;
 /**
  * @description  handles request response user login
  * @param {object} req 
  * @param {object} res 
  */

exports.loginUser = (req, res) => {
    let userDetails = req.body
    loginNewUser(userDetails).then((data) => {
        logger.info("login Successful");
        responseObject = dto.userApiSuccess;
        responseObject.message = data;
        console.log("login"+responseObject);
        res.send(responseObject);
    }).catch((err) => {
        console.log(err);
        logger.error(err);
            responseObject = dto.userApiFailure;
            responseObject.message = err;
          
            return res.send(responseObject);
    })
}
 
 /**
  * @description handles response when user forgets password
  * @param {object} req 
  * @param {object} res 
  */
 exports.forgotPassword = (req, res) => {
     let email = req.body.email;
     forgot(email)
       .then((data) => {
         logger.info("forgot password sucessful");
         responseObject = dto.userApiSuccess;
         responseObject.message = "mail sent";
         console.log(data);
         res.send("Result:" + data);
       })
       .catch((err) => {
         console.log("error:" + err);
         logger.error(err);
         responseObject = dto.userApiFailure;
         responseObject.message = err;
       res.send(responseObject);
         
       });
   };
 /**
  * @description handles reset password request
  * @param {object} req 
  * @param {object} res 
  */
 
 exports.resetPassword = (req, res) => {
     let token = req.params.token;
     let password = req.body.password
     resetPass(token,password)
       .then((data) => {
           console.log(data);
         res.json({message:"Password updated successfully","Result:" :data});
       })
       .catch((err) => {
         console.log("error:" + err);
         res.send(err);
       });
   };
   
 
 /**
  * @description registers users 
  * @param  req 
  * @param  res
  */
 exports.registerUser = (req, res) => {
     let body = req.body;
     registerNewUser(body, (err, data) => {
         if (err) {
             logger.error(err);
             responseobj = dto.userApiFailure
             responseobj.message = err;
             return res.send(responseobj)
         }
         logger.info("Succeful registration");
         responseobj = dto.userApiSuccess;
         responseobj.message = data;
         res.send(responseobj);
     })
 
 }
 /**
  * @description  handles request response to create new users 
  * @param {object} req 
  * @param {object} res 
   */
 exports.create = (req, res) => {
     createNewUser(req.body).then(data => {
         console.log(data);
         res.send(data);
     }).catch(err => {
         logger.error(err.message || "Some error occurred while creating the User.")
         res.status(500).send({
             message: err.message || "Some error occurred while creating the User"
         });
     });
 };
 
 
 /**
  * @description  handles request response to retrieve all users
  * @param {*} req 
  * @param {*} res 
  * Retrieve and return all notes from the database.
  */
 exports.findAll = (req, res) => {
 
     getUsers().then(users => {
         res.send(users);
     }).catch(err => {
         logger.error("error 500 while retrieving data")
         res.status(500).send({
             message: err.message || "Some error occurred while retrieving user."
         });
     })
 };
 
 /**
  * @description  handles request response to retrive information of single user
  * @param {object} req 
  * @param {object} res 
  */
 exports.findOne = (req, res) => {
     getUser(req.params.userId).then((data) => {
         responseobj = dto.userApiSuccess;
         responseobj.message = data;
         res.send(responseobj);
     })
         .catch(err => {
             if (err.kind === 'ObjectId') {
                 console.log(err);
                 logger.error("user not found with id")
                 responseobj = dto.userApiFindFailure;
                 res.send(responseobj);
             }
             responseobj = dto.userApiFailure;
             responseobj.message = err.message;
             res.send(responseobj);
         });
 }
 exports.update = (req, res) => {
     let id = req.params.userId
     let userDetails = req.body
    
     updateUserId(id,  userDetails).then(data => {
         res.send(data);
     }).catch(err => {
         if (err.kind === 'ObjectId') {
             logger.error("note not found with id")
             return res.status(404).send({
                 message: "Note not found with id " + req.params.userId
             });
         }
         logger.error("Error updating note with id " + req.params.userId)
         return res.status(500).send({
             message: "Error updating note with id " + req.params.userId
         });
     });
 };
 /**
  * @description  handles request response to delete single user 
  * @param {object} req 
  * @param {object} res 
  */
 exports.delete = (req, res) => {
     deleteUser(req.params.userId).then(result => {
         res.send({ message: "User deleted successfully!" });
     }).catch(err => {
         if (err.kind === 'ObjectId' || err.name === 'NotFound') {
             logger.error("User not found with id " + req.params.userId)
             return res.status(404).send({
                 message: "User not found with id " + req.params.userId
             });
         }
         logger.error("Could not delete userwith id " + req.params.userId)
         return res.status(500).send({
             message: "Could not delete user with id " + req.params.userId
 
         });
     });
 };