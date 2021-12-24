/**
 * @description:handles request and response for customer
 * @file:customer.controller.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const {
    createNewCustomer,
    getcustomer
}=require("../../service/customer.service")
/**
 * @description handles requst and response for creatig customer
 * @param {*} req 
 * @param {*} res 
 */
exports. createCustomer = (req, res) => {
    const userId=req.body.userId
    const customerDetails=req.body;
    createNewCustomer(userId,customerDetails).then(result => {
        res.send(result);
    }).catch(err => {
        return res.send(err)
});}
/**
 * @description handles request and response for finding customer
 * @param {*} req 
 * @param {*} res 
 */
exports.findCustomer = (req, res) => {
    const userId=req.body.userId
    getcustomer(userId).then(address => {
        res.send(address);
    }).catch(err => {
        return res.send(err)
});}