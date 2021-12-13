const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: String,
    },
    items: [
        {
            productId: {
                type: String
            },
            name: String,
            author: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: [
                    1, 'Quantity can not be less then 1.'
                ],
                deafult: 1
            },
            price: Number,
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true,
            },
        }
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);