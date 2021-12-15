import {getToken} from '../utils/common';
import {getBooks} from '../helper/axios'
import {getCarts} from '../helper/axios'
import {updateCart} from '../helper/axios'
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
const cartRetrieve = () => {
  url = "http://localhost:4000/carts"
  
   return getCarts(url,token ).then((response) => {
      console.log(response);
      console.log("response");
       return response;
   }).catch((err) => {
      console.log(err);
   });
};
// const cartRetrieve = () => {
//    url = "http://localhost:4000/carts"
   
//     return getCarts(url,token ).then((response) => {
//        console.log(response);
//        console.log("response");
//         return response;
//     }).catch((err) => {
//        console.log(err);
//     });
//  };
 const RetrieveUpdatecart = (data) => {
   url = `http://localhost:4000/carts/${data._id}`
   
    return updateCart(url,data,token ).then((response) => {
       console.log(response);
       console.log("response");
        return response;
    }).catch((err) => {
       console.log(err);
    });
 };

export  {
  booksRetrieve  ,
  cartRetrieve,
  RetrieveUpdatecart
}