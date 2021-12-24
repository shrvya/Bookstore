/**
 * @description:gets data from service and processes it 
 * @file:cart.model.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  author:String,
  image:String,
  title:String,
  price: String,
  numOfItems: Number,
});

const Cart = mongoose.model("Cart", CartSchema);
/**
 * @description creates cart in database
 * @param {*} param0 
 * @param {*} callback 
 * @returns 
 */
const createCart = ({userId, bookId, price, title, image, author}, callback) => {
  const cart = new Cart({
    userId: userId,
    bookId: bookId,
    price: price,
    title: title,
    image: image,
    author: author,
    numOfItems: 1,
  });
  console.log(cart);
  return cart.save((err, cart) => {
    return err ? callback(err, null) : callback(null, cart);
  });
};



/**
 * @description finds products in cart
 * @param {*} callback 
 */
const findCart = (callback) => {
  Cart.find((err, cart) => {
    return err ? callback(err, null) : callback(null, cart);
  });
};
/**
 * @description finds the product and updates the count of products
 * @param {*} findCartId 
 * @param {*} numOfItems 
 * @param {*} callback 
 * @returns 
 */
 const findCartAndUpdate = (findCartId,numOfItems, callback) => {
  return Cart.findByIdAndUpdate(
    findCartId,
    {
      numOfItems: numOfItems,
    },
    { new: true },
    (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    }
  );
};
/**
 * @description removes a single product from cart
 * @param {*} findCartId 
 * @param {*} callback 
 */
const deleteCart = (findCartId, callback) => {
  Cart.findByIdAndRemove(findCartId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};
/**
 * @description This function is used to delete all items of cart
 * @param {callback} callback
 */
const deleteAll = (userId, callback) => {
  Cart.deleteMany({userId:userId}, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};
module.exports = { Cart, createCart, findCart, deleteCart, findCartAndUpdate,deleteAll,};
