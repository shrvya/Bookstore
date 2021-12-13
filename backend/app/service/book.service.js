const{
    findAllBooks
}=require('../models/book.model');
const getBooks = () => {
    return findAllBooks()
  }
  module.exports={
    getBooks 
  }