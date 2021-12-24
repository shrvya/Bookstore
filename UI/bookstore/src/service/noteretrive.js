import {getToken} from '../utils/common';
import {getBooks} from '../helper/axios'

const token = getToken();
let url

const booksRetrieve = () => {
   url = "http://localhost:4000/books"
   console.log(token);
    return getBooks(url).then((response) => {
       
        return response;
    }).catch((err) => {
       console.log(err);
    });
};


export  {
  booksRetrieve  
  
}