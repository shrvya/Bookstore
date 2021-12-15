
import Appbar from "../components/Appbar";
import React, { useEffect } from "react";
import {booksRetrive,cartRetrieve} from '../service/noteretrive'
import {getcart} from '../action/getbooks'
import Cart from "../components/Cart"
import { useDispatch } from "react-redux";



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