// import React, { Component } from 'react';
// import { useDispatch } from "react-redux";
// import { useEffect, useRef, useState } from "react";
// import '../css/book.css'
// import { useSelector } from "react-redux";
// import {
//     Grid,
//     Box,
//     CardContent,
//     Card,
//     CardMedia,
//     Typography,
//     CardActions,
//     Button,
//     Menu,
//     MenuItem,
// } from "@mui/material";
// import { color } from '@mui/system';
// const Books = ({ value }) => {

//     const books = useSelector((state) => state.allBooks.fetchbooks);

//     return (
//         <Box className="container" sx={{ p: 15 }}>


//              <Typography id="book-count" 
//                     style={{marginTop:"-10%",
//                     fontSize:"25px",
//                     paddingBottom:"15px"
//                     }}>
//                         Books
//                         <span id="book-count-span"
//                         style={{fontSize:"11px",
//                         color:"#9D9D9D"}}>({books.length} items)</span>
//                     </Typography>
//             <Grid container spacing={4}>
                
                   
               
//                 {books.map((item, index) => {
//                     return (
//                         <Grid item xs={12} sm={6} md={3} key={item._id}>
//                             <Card sx={{ height: 315, width: 235 }}>
//                                 <CardMedia
//                                     component="img"
//                                     alt="green iguana"
//                                     height="171"
//                                     image={item.image}
//                                 />
//                                 <CardContent>

//                                     <span align="left" style={{ fontSize: "16px" }}>
//                                         {item.title}
//                                     </span>
//                                     <span
//                                         align="left"
//                                         style={{ fontSize: "14px" }}
//                                     >
//                                         {item.author}
//                                     </span>
//                                     <span
//                                         align="left"
//                                         style={{ fontWeight: "bold", fontSize: "14px" }}
//                                     >
//                                         {item.price}
//                                     </span>
//                                 </CardContent>
//                                 <CardActions
//                                     style={{ display: "flex", justifyContent: "space-around" }}
//                                 >
//                                     <Button
//                                         fullWidth="true"
//                                         variant="contained"
//                                         style={{


//                                             backgroundColor: " #A03037",
//                                             width: "205px",
//                                             margin: "5px",
//                                             height: "33px",
//                                             color: "#ffff",
//                                             borderRadius: "2px",
//                                             fontSize: "10px"
//                                             // padding: "3px 4px 3px 4px"


//                                         }}
//                                     >
//                                         Add to Bag</Button>
//                                     <Button
//                                         variant="outlined"
//                                         fullWidth="true"
//                                         style={{

//                                             borderColor: " #A03037",
//                                             width: "205px",
//                                             margin: "5px",
//                                             height: "33px",
//                                             color: "#ffff",
//                                             borderRadius: "2px",
//                                             fontSize: "10px",
//                                             color: "#0A0102"
//                                             // padding: "3px 4px 3px 4px"


//                                         }}
//                                     >
//                                         Wishlist
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     );
//                 })}
//             </Grid>
//         </Box>

//     )









// }
// export default Books;
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PaginationPage from "./pagination";
import {sortByPrice, setCurrentPage, setCart} from '../actions/booksActions';
import {useDispatch} from "react-redux";
import "../styles/books.scss"
import useStyles from './useStyles';
import {create} from '../service/cartOp';
const BookCard = () => {
    const classes = useStyles();
    const books = useSelector((state) => state.allBooks.searchBooks);
    const cart = useSelector((state) => state.allBooks.cartItems)
    const currentPage = useSelector((state) => state.allBooks.currentPage)
    const [booksPerPage] = useState(12);
    const [sort, setSort] = useState("")
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const paginate = pageNumber => dispatch(setCurrentPage(pageNumber))
    const dispatch = useDispatch();
    const handleSort = (e) => {
        setSort(e.target.value)
        dispatch(sortByPrice(e.target.value))
        dispatch(setCurrentPage(1))
    }
    const HandleAddToCart = (productId) => {
        const data = {
            "productId": productId,
            "quantity": 1
        }
        create(data).then((res) => {
            dispatch(setCart(res.data))
        }).catch((err) => console.log(err.message));
    }

    const ButtonContainer = ({data}) => {
        return (
            <div className="buttonContainer">
                <Button className={
                        classes.addToBagButton
                    }
                    onClick={
                        () => {
                            let productId = data._id;
                            HandleAddToCart(productId)
                        }
                }>Add to bag</Button>
                <Button className={
                    classes.wishListButton
                }>Wishlist</Button>
            </div>
        )
    }
    const AddedToBag = () => {
        return (
            <Button className={
                classes.addedBagButton
            }>Added To Bag</Button>
        )
    }
    return (
        <div className="displayBook">
            <span className="topContent">
                <div>
                    Books
                    <font className="bookSize">
                        ({
                        books.length
                    }
                        items)
                    </font>
                    {" "} </div>
                <div>
                    <FormControl variant="outlined"
                        className={
                            classes.formControl
                    }>
                        <Select className={
                                classes.optionSelect
                            }
                            native
                            inputProps={
                                {name: "type"}
                            }
                            value={sort}
                            onChange={handleSort}>
                            <option value={"rel"}>Sort by relevance</option>
                            <option value={"asc"}>Price: low to high</option>
                            <option value={"desc"}>Price: high to low</option>
                            <option value={"new"}>Newest Arrival</option>
                        </Select>
                    </FormControl>
                </div>
            </span>
            <div className="allBooks">
                {
                currentBooks.map((data) => (
                    <div className="bookContainer">
                        <div className="imageContainer">
                            <img className="bookImage"
                                src={
                                    data.image
                                }
                                alt=""/>
                        </div>
                        <div className="infoContainer">
                            <Typography className={
                                classes.bookName
                            }>
                                {
                                data.title
                            } </Typography>
                            <Typography className={
                                classes.bookAuthor
                            }>
                                {
                                data.author
                            } </Typography>
                            <Typography className={
                                classes.bookPrize
                            }>
                                Rs. {
                                data.price
                            } </Typography>
                        </div>
                        {


                        ((cart.length !== 0) && (cart.items.some(obj => obj.name === data.title))) ? <AddedToBag/>: <ButtonContainer data={data}/>
                    }


                        <div className="descClass">
                            <Typography className={
                                classes.bookName
                            }>Book Detail</Typography>
                            {
                            data.description
                        } </div> </div>
                ))
            } </div>
            <div className="pagination-box">
                <PaginationPage booksPerPage={booksPerPage}
                    totalBooks={
                        books.length
                    }
                    paginate={paginate}
                    currentPage={currentPage}/></div>
        </div>
    )
}
export default BookCard;

