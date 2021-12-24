/**
 * @description:handles request and response for cart
 * @file:cart.controller.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const {
    createNewCart,
    findAllCart,
    updateCart,
    deleteCartById,
    deleteAllCartItems,
    
  } = require("../../service/cart.service");
  const logger = require("../../../utils/logger");
  /**
   * @description handles request response for adding products to cart
   * @param {*} req 
   * @param {*} res 
   */
  exports.create = (req, res) => {
    createNewCart(
      req.body.userId,
      req.body.bookId,
      req.body.price,
      req.body.title,
      req.body.image,
      req.body.author,
      (err, cartData) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Cart.",
          });
          logger.error("Some error occurred while creating the Cart.");
        }
        res.send(cartData);
        logger.info("Successfully created the Cart");
      }
    );
  };
 
 

/**
 * @description handles request response for finding a product
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = (req, res) => {
  findAllCart((err, cart) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cart.",
      });
      logger.error("Some error occurred while retrieving cart.");
    }
    res.send(cart);
    logger.info("Successfully returned all the cart.");
  });
};
 /**
  * @description handles request response for updating product count
  * @param {*} req 
  * @param {*} res 
  */
  exports.update = (req, res) => {
    let id = req.params.cartId;
    let numOfItems = req.body.numOfItems;
    console.log( numOfItems);
    updateCart(id, numOfItems, (err, cart) => {
      
      if (err) {
        if (err.kind === "ObjectId") {
          logger.error("Cart not found ");
          return res.status(404).send({
            message: "Cart not found with id " + req.params.cartId,
          });
        }
        logger.error("Error retrieving Cart");
        return res.status(500).send({
          message: "Error updating Cart with id " + req.params.cartId,
        });
      }
      if (!cart) {
        logger.error("cart not found");
        return res.status(404).send({
          message: "cart not found with id " + req.params.cartId,
        });
      }
      res.send(cart);
      logger.info("Successfully updated the cart");
    });
  };
/**
 * @description handles request and response for removing a product
 * @param {*} req 
 * @param {*} res 
 */
  exports.delete = (req, res) => {
    deleteCartById(req.params.cartId, (err, cart) => {
      if (err) {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          logger.error("Cart not found");
          return res.status(404).send({
            message: "Cart not found with id " + req.params.cartId,
          });
        }
        logger.error("Error retrieving cart");
        return res.status(500).send({
          message: "Could not delete cart with id " + req.params.cartId,
        });
      }
      if (!cart) {
        logger.error("cart not found");
        return res.status(404).send({
          message: "cart not found with id " + req.params.cartId,
        });
      }
      res.send({ message: "Cart deleted successfully!" });
      logger.info("Successfully deleted the cart");
    });
  };

/**
 * @description handles request and response for deleting all the cart items
 * @param {Object} req
 * @param {Object} res
 */
 exports.deleteItems = (req, res) => {
  deleteAllCartItems(req.body.userId,(err, cart) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the cart.",
      });
      logger.error("Some error occurred while deleting cart.");
    }
    res.send({ message: "Cart deleted successfully!" });
    logger.info("Successfully deleted the cart");
  });
};
  