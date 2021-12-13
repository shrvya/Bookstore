const Cart = require('../models/cart.model');
const {findABook} = require('./book.service');

const getCart = async (userId) => {
    let cart;
    try {
        cart = await Cart.find({userId: userId})

    } catch (err) {
        console.log(err)
    }
    if (cart && cart[0].items.length > 0) {
        return cart;
    } else {
        return null;
    }
}
const addToCart = async (userId, productId, quantity) => {
    let item;
    let cart;
    try {
        cart = await Cart.find({userId: userId})
    } catch (err) {
        console.log(err)
    }
    try {
        item = await findABook(productId)
    } catch (err) {
        return("Item not found")
    }

    const price = item.price;
    const name = item.title;
    const description = item.description;
    const author=item.author;
    const image = item.image;
    if (cart.length != 0) { // if cart exists for the user
        let itemIndex = cart[0].items.findIndex(p => p.productId == productId);
        // Check if product exists or not
        if (itemIndex > -1) {
            let productItem = cart[0].items[itemIndex];
            productItem.quantity += quantity;
            cart[0].items[itemIndex] = productItem;
        } else {
            cart[0].items.push({
                productId,
                name,
                author,
                quantity,
                price,
                description,
                image
            });
        } cart[0].bill += quantity * price;
        cart[0] = cart[0].save();
        return cart[0];
    } else { // no cart exists, create one
        const newCart = Cart.create({
            userId,
            items: [
                {
                    productId,
                    name,
                    author,
                    quantity,
                    price,
                    description,
                    image
                }
            ],
            bill: quantity * price
        });
        return newCart;
    }
}
const deleteProduct = async (userId, productId) => {
    let cart;
    try {
        cart = await Cart.find({userId: userId})
    } catch (err) {
        console.log(err)
    }
    let itemIndex = cart[0].items.findIndex(p => p.productId == productId);
    if (itemIndex > -1) {
        let productItem = cart[0].items[itemIndex];
        cart[0].bill -= productItem.quantity * productItem.price;
        cart[0].items.splice(itemIndex, 1);
    }
    cart = await cart[0].save();
    return cart;
}
module.exports = {
    getCart,
    addToCart,
    deleteProduct
}