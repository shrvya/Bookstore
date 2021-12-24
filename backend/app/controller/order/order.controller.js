/**
 * @description:get request for order
 * @file:order.controller.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const {
    createNewOrder,
    findAllOrders,
  } = require("../../service/order.service");
  const logger = require("../../../utils/logger");
  /**
   * @description Handles request and response for creating a new order
   * @param {Object} req
   * @param {Object} res
   */
  exports.create = (req, res) => {
    createNewOrder(req.body.customerId, req.body.items, req.body.totalPrice, req.body.status, req.body.userId)
      .then((data) => {
        res.send(data);
        logger.info("Successfully created the order");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the order.",
        });
        logger.error("Some error occurred while creating the order.");
      });
  };
  /**
   * @description Handles request and response for finding all the notes
   * @param {Object} req
   * @param {Object} res
   */
  exports.findAll = (req, res) => {
    findAllOrders(req.body.userId)
      .then((data) => {
        res.send(data);
        logger.info("Successfully returned all the order. ");
      })
      .catch((err) => {
        res.status(500).send({
          message: "Invalid UserId",
        });
        logger.error("Invalid UserId");
      });
  };