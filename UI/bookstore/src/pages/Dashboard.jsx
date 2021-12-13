
import Appbar from "../components/Appbar";
import React, {  useEffect } from "react";
import {booksRetrieve} from '../service/noteretrive'
import {getBooks} from '../action/getbooks'
import Books from "../components/Books"
import { useDispatch } from "react-redux";

export default function Dashboard() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     fetchitem();
    // }, []);
    // const fetchitem = () => {
    //     books().then((res) => {       
           
    //         dispatch(getBooks(res));
    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const dispatch = useDispatch();
    useEffect(() => { // eslint-disable-next-line
        fetchitem(); // eslint-disable-next-line
    }, []);
    const fetchitem = () => {
        booksRetrieve().then((res) => {
            dispatch(getBooks(res.data));
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