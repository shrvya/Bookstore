
const { createCart, findCart, deleteCart, findCartAndUpdate} = require("../models/cart.model");


const createNewCart = (userId, bookId, price, title, image, author, callback) => {
  let cart = createCart({userId, bookId, price, title, image, author}, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
  return cart;
};

const findAllCart = (callback) => {
  findCart((err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};


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


const deleteCartById = (findCartId, callback) => {
  deleteCart(findCartId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

module.exports = {
  createNewCart,
  findAllCart,
  updateCart,
  deleteCartById,
};