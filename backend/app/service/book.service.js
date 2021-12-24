/**
 * @description:defining schema for book 
 * @file:book.model.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const{
  findBook, findAllBooks, update,searchBook,sortBooks
}=require('../models/book.model');
/**
 * 
 * @returns all books
 */
const getBooks = () => {
    return findAllBooks()
  }
  /**
 * @description to fetch a books from database
 * @param {Object} productID
 * @returns promise
 */
const findABook = (findId) => {
  return findBook(findId)
}
/**
* @description to update quantity of books when ordered
* @param {Object} quantity 
* @param {Object} productID
* @returns promise
*/
const updateQuantity = (findId, quantity) => {
  return update(findId, quantity)
}
/**
* @description to search for a book
* @param {Object} searchtext
* @returns promise
*/
const search=(searchText)=>{
  return searchBook(searchText)
}
/**
* @description to sort the books according to price
* @param {Object}order either ascending or descending
* @returns promise
*/
const sort=(order)=>{
  return  order==="rel"||order==="new"?(findAllBooks()):(sortBooks(order))
}
const pagination = async (index) => { 
  let page = parseInt(index);
  page = (page - 1) * 12;
  try {
    const data = await findAllBooks();
    return data.slice(page, page + 12);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getBooks,
  findABook,
  updateQuantity,
  search,
  sort,
  pagination
}
 