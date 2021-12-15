import { addDataCart} from "../helper/axios";
import {axiosfunction} from "../helper/axios"
import {getToken} from '../utils/common';

import {updateCart } from "../helper/axios";
const token = getToken();
export const addcart=(data)=>{
    
  return  addDataCart('http://localhost:4000/carts',data,token).then((res) => {
       return res

      })
      .catch((e) => {
        throw e;
      });
}
export const Updatecartapi=(data)=>{
    console.log(data.cartId);
    console.log(data);
  return  updateCart (`http://localhost:4000/carts/${data.cartId}`,data,token).then((res) => {
    console.log(res,"carti");    
  return res

      })
      .catch((e) => {
        throw e;
      });
}

