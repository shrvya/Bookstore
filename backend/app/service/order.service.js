/**
 * @description:handles request and response for order
 * @file:order.service.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const {
    createOrder,
    findOrder,
  } = require('../models/order.model');
  /**
   * @description creates a new note using the function createOrder
   * @param {string} title
   * @param {string} content
   * @param {ObjectId} userId
   * @returns err or order
   */
  const createNewOrder = (customerId, items, totalPrice, status, userId) => {
    return createOrder(customerId, items, totalPrice, status, userId)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throw err;
      });
  };
  /**
   * @description retrieves all the notes using findOrder function
   * @param {ObjectId} userId
   * @returns err or result
   */
  const findAllOrders = (userId) => {
    return findOrder(userId)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  };
  
  module.exports = {
    createNewOrder,
    findAllOrders,
  };