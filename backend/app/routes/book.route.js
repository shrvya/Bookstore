const express = require('express')
const router = express.Router()
const books = require('../controller/book/book.controller');
const {
  tokenVerification
 } = require("../middleware/cart.middleware.js");


  router.get('/', books.findAll);
    router.post("/search",  tokenVerification, books.searchBook)
  
    router.post("/sort",  tokenVerification, books.sortBook)
  
    router.get("/:index", tokenVerification,books.paginationBooks);
  module.exports = router