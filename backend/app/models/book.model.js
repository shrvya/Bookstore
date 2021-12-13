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

const findAllBooks = () => {
   return Book.find()
 }
module.exports={
   findAllBooks
 }