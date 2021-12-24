import {axiosfunction} from "../helper/axios"
import { addDataCart} from "../helper/axios";
import {getToken} from '../utils/common';
import {getCarts} from '../helper/axios'
const token = getToken();
export const savecustomers=(data)=>{
    
    addDataCart('http://localhost:4000/customer',data,token )
}
export const getcustomers=(data)=>{
    getCarts('http://localhost:4000/customer',data,token )
}