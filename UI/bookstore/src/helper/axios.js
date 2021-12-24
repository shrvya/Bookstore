import axios from 'axios'
import {setUserSession} from '../utils/common'
export const axiosfunction = (method, url, data) => {
    
    axios({
        method: method,
        url: url,
        data: data
    }).then(function (response) 
    {
        setUserSession(response.data.message);
        console.log("axios"+response.data.message);
       
    })
        .catch(function (error) {
            console.log("ERRRR:: ", error);
        });
}

export const getBooks = (url) => {
   
    return(axios({
        method: "get",
        url: url
     
    }))}
    export const getCarts = (url,token) => {
   
        return(axios({
            method: "get",
            url: url,
            headers: {
                Authorization:  `bearer ${token}`
            }
        }))}
        export const addDataCart = (url, data, token) => {
           
            return(axios({
                method: "post",
                url: url,
                data: data,
                headers: {
                    Authorization: `bearer ${token}`
                }
            }))
        }
        export const updateCart = (url, data, token) => {
            return(axios({
                method: "put",
                url: url,
                data: data,
                headers: {
                    Authorization: `bearer ${token}`
                }
            }))
        }
        export const deleteCart = (url, token) => {
            return(axios({
                method: "delete",
                url: url,
               
                headers: {
                    Authorization: `bearer ${token}`
                }
            }))
        }