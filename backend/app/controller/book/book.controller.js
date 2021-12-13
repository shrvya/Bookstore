const{
    getBooks
}=require('../../service/book.service')
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