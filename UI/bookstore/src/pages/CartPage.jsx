
import Appbar from "../components/Appbar";
import React, { useEffect } from "react";

import {getcart} from '../action/getbooks'
import Cart from "../components/Cart"
import { useDispatch } from "react-redux";
import { cartRetrieve } from "../service/cartapi";



export default function CartPage() {

    const dispatch = useDispatch();
    useEffect(() => { 
        fetchitem(); 
    }, []);
    
    const fetchitem = () => {
        cartRetrieve().then((res) => {
           console.log(res.data)
            dispatch(getcart(res.data));
        }).catch((err) => {
            console.log(err); 
        });
    };
    return (
        <div className="container">
            <Appbar />
<Cart/>
        </div>
    );
}