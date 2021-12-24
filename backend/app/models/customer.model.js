/**
 * @description:defining schema for customer 
 * @file:customer.model.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    phoneNumber: {
        type: Number,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    locality: String,
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    landMark: String,
    type: {
        type: String,
        required: true
    }
}, {timestamps: true});
const Customer = mongoose.model('Customer', CustomerSchema);
/**
 * @description creates a customer
 * @param {*} userId 
 * @param {*} customerDetails 
 * @returns 
 */
const createCustomer = (userId,customerDetails) => {
    const customer = new Customer({
        userId:userId,
        name:customerDetails.name,
        phoneNumber:customerDetails.phoneNumber,
        pinCode:customerDetails.pinCode,
        locality:customerDetails.locality,
        address:customerDetails.address,
        city:customerDetails.city,
        landMark:customerDetails.landMark,
        type:customerDetails.type
    })
    return customer.save()
}
/**
 * @description finds a customer
 * @param {*} userId 
 * @returns 
 */
const findCustomer = (userId) => {
    return Customer.find({userId: userId})
}
/**
 * @description finds and updates customer data
 * @param {*} userId 
 * @param {*} customerDetails 
 * @returns 
 */
const updateCustomer = (userId, customerDetails) => {
    return Customer.findOneAndUpdate({
        userId: userId
    }, {
    name: customerDetails.name,
    phoneNumber: customerDetails.phoneNumber,
    pinCode: customerDetails.pinCode,
    locality: customerDetails.locality,
    address: customerDetails.address,
    city: customerDetails.city,
    landMark: customerDetails.landMark,
    type: customerDetails.type
    }, {new: true})

}
/**
 * 
 * @param {*} userId 
 * @returns 
 */
const deleteCartmod = async  (userId) => {
    try {
      cart = await Cart.find({userId: userId})
  } catch (err) {
      console.log(err)
  }
  await cart[0].delete();
  return("Successfully deleted")
  };
module.exports = {
createCustomer,
findCustomer,
updateCustomer,
deleteCartmod
}