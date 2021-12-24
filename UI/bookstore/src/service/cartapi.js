import { addDataCart} from "../helper/axios";
import {axiosfunction} from "../helper/axios"
import {getToken} from '../utils/common';
import {getCarts} from '../helper/axios'
import {updateCart} from '../helper/axios'
import {deleteCart } from "../helper/axios";
const token = getToken();
export const addcart=(data)=>{
   
  return  addDataCart('http://localhost:4000/carts',data,token).then((res) => {
    console.log(res);
       return res

      })
      .catch((e) => {
        throw e;
      });
}
export const Updatecartapi=(data)=>{
    // console.log(data.cartId);
    // console.log(data);
  return  updateCart (`http://localhost:4000/carts/${data.cartId}`,data,token).then((res) => {
    // console.log(res,"carti");    
  return res

      })
      .catch((e) => {
        throw e;
      });
}
export const cartRetrieve = () => {
  let url = "http://localhost:4000/carts"
  
   return getCarts(url,token ).then((response) => {
      // console.log(response);
      // console.log("response");
       return response;
   }).catch((err) => {
      console.log(err);
   });
};

export const Deletecartapi=(data)=>{
  
  console.log(data);
return  deleteCart (`http://localhost:4000/carts/${data}`,token).then((res) => {
  console.log(res,"carti");    
return res

    })
    .catch((e) => {
      throw e;
    });
}
export const  emptyCart=()=>{
  
 
return  deleteCart (`http://localhost:4000/carts`,token).then((res) => {
  console.log(res,"carti");    
return res

    })
    .catch((e) => {
      throw e;
    });
}
//  export const RetrieveUpdatecart = (data) => {
//    url = `http://localhost:4000/carts/${data._id}`
   
//     return updateCart(url,data,token ).then((response) => {
//        console.log(response);
//        console.log("response");
//         return response;
//     }).catch((err) => {
//        console.log(err);
//     });
//  };

