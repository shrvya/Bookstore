/**
 * @description:handles request and response for cart
 * @file:cart.service.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const { createCart, findCart, deleteCart, findCartAndUpdate
  , deleteAll
} = require("../models/cart.model");

/**
 * @description handles request and response for cart creation
 * @param {*} userId 
 * @param {*} bookId 
 * @param {*} price 
 * @param {*} title 
 * @param {*} image 
 * @param {*} author 
 * @param {*} callback 
 * @returns 
 */
const createNewCart = (userId, bookId, price, title, image, author, callback) => {
  let cart = createCart({userId, bookId, price, title, image, author}, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
  return cart;
};

// const findAllCart = (UserId) => {
//   console.log(findCart(UserId));
//     return   findCart(UserId)

// };
/**
 * @description handles request and response for cart creation
 * @param {*} callback 
 */
const findAllCart = (callback) => {
  findCart((err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

/**
 * @description handles request and response for updating cart
 * @param {*} findCartId 
 * @param {*} numOfItems 
 * @param {*} callback 
 */
 const updateCart = (
  findCartId,
  numOfItems,
  callback
) => {
  findCartAndUpdate(
    findCartId,
    numOfItems,
    (err, data) => {
      console.log(err);
      return err ? callback(err, null) : callback(null, data);
    }
  );
};

/**
 * @description handles request for removing products from cart
 * @param {*} findCartId 
 * @param {*} callback 
 */
const deleteCartById = (findCartId, callback) => {
  deleteCart(findCartId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

/**
 * @description deletes the cart using deleteCart functon
 * @param {_id} findCartId
 * @param {callback} callback
 */
 const deleteAllCartItems = (userId, callback) => {
  deleteAll(userId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};
module.exports = {
  createNewCart,
  findAllCart,
  updateCart,
  deleteCartById,
  deleteAllCartItems
};