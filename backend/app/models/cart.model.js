
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


const findCart = (callback) => {
  Cart.find((err, cart) => {
    return err ? callback(err, null) : callback(null, cart);
  });
};

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

const deleteCart = (findCartId, callback) => {
  Cart.findByIdAndRemove(findCartId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};
module.exports = { Cart, createCart, findCart, deleteCart, findCartAndUpdate};
