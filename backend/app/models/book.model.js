/**
 * @description:defining schema for book 
 * @file:book.model.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const jwtHelper = require("../utility/auth");
const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
    author: {
   type: String,
   required: true
},
title: {
   type: String,
   required: true
},
  
image: {
    type: String,
   unique: true,
    required: true

  },
  quantity:{
     type:Number
  },
  price: {
   type: Number,
   
   },
  description:{
   type: String ,
   unique:  true
   
  }
}, { timestamps: true });
Book=mongoose.model('Book', BookSchema);
/**
 * 
 * @returns all books in the database
 */
const findAllBooks = () => {
   return Book.find()
 }
 const findBook = (findId) => {
   return Book.findById(findId)
}
/**
* @description to update a book present in the database
* @returns data
*/
const update = (findId, quantity) => {
   return Book.findByIdAndUpdate(findId).then((data) => {
       if (!data) {
           throw "some error";
       } else {
           (data.quantity = data.quantity - quantity)
           return data.save().then((data) => {
               return data;
           }).catch((err) => {
               throw err;
           });
       }
   }).catch((err) => {
       throw err;
   });
};
/**
* @description to search for  a book present in the database
* @returns data
*/
const searchBook = async (searchText) => {
   try {
     let data = await Book.find();
     let filteredData = data.filter((item) => {
       return (
         item.title.toLowerCase().includes(searchText.toLowerCase()) ||
         item.author.toLowerCase().includes(searchText.toLowerCase())
       );
     });
     return filteredData;
   } catch (error) {
     throw error;
   }
 };
 /**
* @description to sort for  a book present in the database
* @returns data
*/
const sortBooks=async(order)=>{
   try{
       return await Book.find().sort({price:order})
   }
   catch (error) {
       throw error;
     }
}
module.exports = {
   findBook,
   findAllBooks,
   update,
   searchBook,
   sortBooks

 }