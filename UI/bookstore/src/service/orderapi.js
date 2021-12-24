import { addDataCart} from "../helper/axios";
import {getToken} from '../utils/common';
import {getCarts} from '../helper/axios'
const token = getToken();
export const createOrder=(data)=>{
    
  return addDataCart('http://localhost:4000/orders',data,token )
}
export const  getOrder=(data)=>{
   return getCarts('http://localhost:4000/orders',data,token )
}