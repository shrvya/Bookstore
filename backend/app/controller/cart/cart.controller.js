const {getCart, addToCart, deleteProduct} = require('../../service/cart.service.js')
module.exports.get_cart_items = async (req, res) => {
    const userId=req.params.id;
    try {
        const data = await getCart(userId);
        return res.send(data)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
module.exports.add_cart_item = async (req, res) => {
    const userId=req.params.id;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    try {
        const data = await addToCart(userId, productId, quantity)
        return res.status(201).send(data);

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.delete_item = async (req, res) => {

    const productId = req.params.itemId;
    try {
        let cart =await deleteProduct(req.body.userId, productId)
        return res.status(201).send(cart);

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}