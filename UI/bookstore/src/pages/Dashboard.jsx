
import Appbar from "../components/Appbar";
import React, {  useEffect } from "react";
import {booksRetrieve} from '../service/noteretrive'
import {getBooks, getcart} from '../action/getbooks'
import Books from "../components/Books"
import { useDispatch } from "react-redux";
import { cartRetrieve } from "../service/cartapi";

export default function Dashboard() {
  
    const dispatch = useDispatch();
    useEffect(() => { 
        fetchcart();
        fetchitem(); 

    }, []);
    const fetchitem = () => {
        booksRetrieve().then((res) => {
            dispatch(getBooks(res.data));
        }).catch((err) => {
            console.log(err); 
        });
    };
    const fetchcart = () => {
        cartRetrieve().then((res) => {
           console.log(res.data)
            dispatch(getcart(res.data));
        }).catch((err) => {
            console.log(err); 
        });
    };
    
    return (
<div className="container">
<Appbar/>
<Books value={false}/>
</div>
    );
}