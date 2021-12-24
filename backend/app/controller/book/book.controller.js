/**
 * @description:handles request and response for cart
 * @file:book.controller.js
 * @author:Shrivya Shetty
 * @since:12-12-2021
 */
const{
    getBooks,search,sort,pagination
}=require('../../service/book.service')
/**
 * @description handles request and response to get all books
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = (req, res) => {
 
    getBooks().then(users => {
        res.send(users);
    }).catch(err => {
        logger.error("error 500 while retrieving data")
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    })
};
/**
   * @description Handles the request and response for searching books
   * @param {Object} req
   * @param {Object} res
   */
 exports.searchBook = async (req, res) => {
    try {
      let data = await search(req.body.searchText);
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send(error);
    }
  };
   /**
   * @description Handles the request and response for searching books
   * @param {Object} req
   * @param {Object} res
   */
    exports.sortBook = async (req, res) => {
        try {
          let data = await sort(req.body.descending);
          return res.status(200).send(data);
        } catch (error) {
          return res.status(500).send(error);
        }
      };
/**
   * @description Handles the request and response for finding all books
   * @param {Object} req
   * @param {Object} res
   */
 exports.paginationBooks = async (req, res) => {
    try {
      const data = await pagination(req.params.index);
      return res.send(data);
    } catch (err) {
      logger.error("Could not find book", err);
      return res.send(err);
    }
  };