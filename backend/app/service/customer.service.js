/**
 * @description:handles request and response for customer
 * @file:customer.service.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const {createCustomer, findCustomer, updateCustomer} = require('../models/customer.model')
/**
 * @description handles request and response for creating user
 * @param {*} userId 
 * @param {*} customerDetails 
 * @returns 
 */
const createNewCustomer = (userId, customerDetails) => {
    return findCustomer(userId).then((res) => {
       return (res.length===0)?(createCustomer(userId, customerDetails)):( updateCustomer(userId, customerDetails))
    }).catch((err) => {
        throw err
    })
}
/**
 * @description handles request and response for getting customer data
 * @param {*} findId 
 * @returns 
 */
const getcustomer = (findId) => {
    return findCustomer(findId)
}
module.exports = {
    createNewCustomer,
    getcustomer
}