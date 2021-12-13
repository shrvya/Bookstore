const express = require('express')
const router = express.Router()
const books = require('../controller/book/book.controller');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
  }
  router.get('/', books.findAll);
  module.exports = router