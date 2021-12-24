// // // // import React, { Component } from 'react';
// // // // import { useDispatch } from "react-redux";
// // // // import { useEffect, useRef, useState } from "react";
// // // // import '../css/book.css'
// // // // import { useSelector } from "react-redux";
// // // // import {
// // // //     Grid,
// // // //     Box,
// // // //     CardContent,
// // // //     Card,
// // // //     CardMedia,
// // // //     Typography,
// // // //     CardActions,
// // // //     Button,
// // // //     Menu,
// // // //     MenuItem,
// // // // } from "@mui/material";
// // // // import { color } from '@mui/system';
// // // // const Books = ({ value }) => {

// // // //     const books = useSelector((state) => state.allBooks.fetchbooks);

// // // //     return (
// // // //         <Box className="container" sx={{ p: 15 }}>


// // // //              <Typography id="book-count" 
// // // //                     style={{marginTop:"-10%",
// // // //                     fontSize:"25px",
// // // //                     paddingBottom:"15px"
// // // //                     }}>
// // // //                         Books
// // // //                         <span id="book-count-span"
// // // //                         style={{fontSize:"11px",
// // // //                         color:"#9D9D9D"}}>({books.length} items)</span>
// // // //                     </Typography>
// // // //             <Grid container spacing={4}>
                
                   
               
// // // //                 {books.map((item, index) => {
// // // //                     return (
// // // //                         <Grid item xs={12} sm={6} md={3} key={item._id}>
// // // //                             <Card sx={{ height: 315, width: 235 }}>
// // // //                                 <CardMedia
// // // //                                     component="img"
// // // //                                     alt="green iguana"
// // // //                                     height="171"
// // // //                                     image={item.image}
// // // //                                 />
// // // //                                 <CardContent>

// // // //                                     <span align="left" style={{ fontSize: "16px" }}>
// // // //                                         {item.title}
// // // //                                     </span>
// // // //                                     <span
// // // //                                         align="left"
// // // //                                         style={{ fontSize: "14px" }}
// // // //                                     >
// // // //                                         {item.author}
// // // //                                     </span>
// // // //                                     <span
// // // //                                         align="left"
// // // //                                         style={{ fontWeight: "bold", fontSize: "14px" }}
// // // //                                     >
// // // //                                         {item.price}
// // // //                                     </span>
// // // //                                 </CardContent>
// // // //                                 <CardActions
// // // //                                     style={{ display: "flex", justifyContent: "space-around" }}
// // // //                                 >
// // // //                                     <Button
// // // //                                         fullWidth="true"
// // // //                                         variant="contained"
// // // //                                         style={{


// // // //                                             backgroundColor: " #A03037",
// // // //                                             width: "205px",
// // // //                                             margin: "5px",
// // // //                                             height: "33px",
// // // //                                             color: "#ffff",
// // // //                                             borderRadius: "2px",
// // // //                                             fontSize: "10px"
// // // //                                             // padding: "3px 4px 3px 4px"


// // // //                                         }}
// // // //                                     >
// // // //                                         Add to Bag</Button>
// // // //                                     <Button
// // // //                                         variant="outlined"
// // // //                                         fullWidth="true"
// // // //                                         style={{

// // // //                                             borderColor: " #A03037",
// // // //                                             width: "205px",
// // // //                                             margin: "5px",
// // // //                                             height: "33px",
// // // //                                             color: "#ffff",
// // // //                                             borderRadius: "2px",
// // // //                                             fontSize: "10px",
// // // //                                             color: "#0A0102"
// // // //                                             // padding: "3px 4px 3px 4px"


// // // //                                         }}
// // // //                                     >
// // // //                                         Wishlist
// // // //                                     </Button>
// // // //                                 </CardActions>
// // // //                             </Card>
// // // //                         </Grid>
// // // //                     );
// // // //                 })}
// // // //             </Grid>
// // // //         </Box>

// // // //     )









// // // // }
// // // // export default Books;
// // // import React, {useState} from 'react';
// // // import {useSelector} from "react-redux";
// // // import Typography from "@material-ui/core/Typography";
// // // import Button from "@material-ui/core/Button";
// // // import FormControl from "@material-ui/core/FormControl";
// // // import Select from "@material-ui/core/Select";
// // // import PaginationPage from "./pagination";
// // // import {sortByPrice, setCurrentPage, setCart} from '../actions/booksActions';
// // // import {useDispatch} from "react-redux";
// // // import "../styles/books.scss"
// // // import useStyles from './useStyles';
// // // import {create} from '../service/cartOp';
// // // const BookCard = () => {
// // //     const classes = useStyles();
// // //     const books = useSelector((state) => state.allBooks.searchBooks);
// // //     const cart = useSelector((state) => state.allBooks.cartItems)
// // //     const currentPage = useSelector((state) => state.allBooks.currentPage)
// // //     const [booksPerPage] = useState(12);
// // //     const [sort, setSort] = useState("")
// // //     const indexOfLastBook = currentPage * booksPerPage;
// // //     const indexOfFirstBook = indexOfLastBook - booksPerPage;
// // //     const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
// // //     const paginate = pageNumber => dispatch(setCurrentPage(pageNumber))
// // //     const dispatch = useDispatch();
// // //     const handleSort = (e) => {
// // //         setSort(e.target.value)
// // //         dispatch(sortByPrice(e.target.value))
// // //         dispatch(setCurrentPage(1))
// // //     }
// // //     const HandleAddToCart = (productId) => {
// // //         const data = {
// // //             "productId": productId,
// // //             "quantity": 1
// // //         }
// // //         create(data).then((res) => {
// // //             dispatch(setCart(res.data))
// // //         }).catch((err) => console.log(err.message));
// // //     }

// // //     const ButtonContainer = ({data}) => {
// // //         return (
// // //             <div className="buttonContainer">
// // //                 <Button className={
// // //                         classes.addToBagButton
// // //                     }
// // //                     onClick={
// // //                         () => {
// // //                             let productId = data._id;
// // //                             HandleAddToCart(productId)
// // //                         }
// // //                 }>Add to bag</Button>
// // //                 <Button className={
// // //                     classes.wishListButton
// // //                 }>Wishlist</Button>
// // //             </div>
// // //         )
// // //     }
// // //     const AddedToBag = () => {
// // //         return (
// // //             <Button className={
// // //                 classes.addedBagButton
// // //             }>Added To Bag</Button>
// // //         )
// // //     }
// // //     return (
// // //         <div className="displayBook">
// // //             <span className="topContent">
// // //                 <div>
// // //                     Books
// // //                     <font className="bookSize">
// // //                         ({
// // //                         books.length
// // //                     }
// // //                         items)
// // //                     </font>
// // //                     {" "} </div>
// // //                 <div>
// // //                     <FormControl variant="outlined"
// // //                         className={
// // //                             classes.formControl
// // //                     }>
// // //                         <Select className={
// // //                                 classes.optionSelect
// // //                             }
// // //                             native
// // //                             inputProps={
// // //                                 {name: "type"}
// // //                             }
// // //                             value={sort}
// // //                             onChange={handleSort}>
// // //                             <option value={"rel"}>Sort by relevance</option>
// // //                             <option value={"asc"}>Price: low to high</option>
// // //                             <option value={"desc"}>Price: high to low</option>
// // //                             <option value={"new"}>Newest Arrival</option>
// // //                         </Select>
// // //                     </FormControl>
// // //                 </div>
// // //             </span>
// // //             <div className="allBooks">
// // //                 {
// // //                 currentBooks.map((data) => (
// // //                     <div className="bookContainer">
// // //                         <div className="imageContainer">
// // //                             <img className="bookImage"
// // //                                 src={
// // //                                     data.image
// // //                                 }
// // //                                 alt=""/>
// // //                         </div>
// // //                         <div className="infoContainer">
// // //                             <Typography className={
// // //                                 classes.bookName
// // //                             }>
// // //                                 {
// // //                                 data.title
// // //                             } </Typography>
// // //                             <Typography className={
// // //                                 classes.bookAuthor
// // //                             }>
// // //                                 {
// // //                                 data.author
// // //                             } </Typography>
// // //                             <Typography className={
// // //                                 classes.bookPrize
// // //                             }>
// // //                                 Rs. {
// // //                                 data.price
// // //                             } </Typography>
// // //                         </div>
// // //                         {


// // //                         ((cart.length !== 0) && (cart.items.some(obj => obj.name === data.title))) ? <AddedToBag/>: <ButtonContainer data={data}/>
// // //                     }


// // //                         <div className="descClass">
// // //                             <Typography className={
// // //                                 classes.bookName
// // //                             }>Book Detail</Typography>
// // //                             {
// // //                             data.description
// // //                         } </div> </div>
// // //                 ))
// // //             } </div>
// // //             <div className="pagination-box">
// // //                 <PaginationPage booksPerPage={booksPerPage}
// // //                     totalBooks={
// // //                         books.length
// // //                     }
// // //                     paginate={paginate}
// // //                     currentPage={currentPage}/></div>
// // //         </div>
// // //     )
// // // }
// // // export default BookCard;

// // import React,{useState} from "react";
// // import Grid from '@mui/material/Grid';
// // import Typography from '@mui/material/Typography';
// // import TextField from '@mui/material/TextField';
// // import Paper from '@mui/material/Paper';
// // import Radio from '@mui/material/Radio';
// // import RadioGroup from '@mui/material/RadioGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormControl from '@mui/material/FormControl';
// // import FormLabel from '@mui/material/FormLabel';
// // import Button from '@mui/material/Button';
// // import {useForm} from '../components/UseForm';
// // import {create} from '../service/customerDetails';
// // import {createOrder} from '../service/orderOP';
// // const initialFValues = {
// //    name:"",
// //    phoneNumber:"",
// //    pincode:"",
// //    locality:"",
// //    address:"",
// //    city:"",
// //    landmark:"",
// //    type:""
// // }
// // const CustomerAddress = ({showCustomer,setShowOrder,setOrder}) => {
// //     const [editShow,setEditShow]=useState(false)
// //     const validate = (fieldValues = values) => {
// //         let temp = {
// //             ...errors
// //         }
// //         if('phoneNumber' in fieldValues)
// //         temp.phoneNumber=(/^[1-9][0-9]{9}$/).test(fieldValues.phoneNumber)?"":"phone number should consists of 10 digits."
      
// //         setErrors({
// //              // eslint-disable-next-line
// //             ...temp
// //         })
       
// //         if (fieldValues === values) 
// //             return Object.values(temp).every(x => x === "")
// //     }
// //     const {
// //         values,
// //         errors,
// //         setErrors,
// //         handleInputChange
// //     } = useForm(initialFValues,true,validate);
   
   
    
// // const data={
// //     name:values.name,
// //     phoneNumber:values.phoneNumber,
// //     pinCode:values.pincode,
// //     locality:values.locality,
// //     address:values.address,
// //     city:values.city,
// //     landMark:values.landMark,
// //     type:values.type
// // }
// // const handleSubmit=()=>{
// //     setEditShow(true)
// //     create(data)
// //     createOrder().then((res)=>{setOrder(res.data)}).catch((err)=>{console.log(err)})
// //     setShowOrder(true)
// // }
// //     return (<React.Fragment>
// //          <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
// //          <Grid container
// //             spacing={3}>
// //                 <Grid item
// //                 xs={12}
// //                 sm={6}>
// //         <Typography gutterBottom   style={{fontWeight:"bold",fontSize:"18px"}} >
// //             Customer details
// //         </Typography></Grid>
// //       {editShow?<Grid item
// //                 xs={8}
// //                 sm={6}  align="right">
// //                     <Button
// //                     onClick={(e)=>{setEditShow(false)}}
// //                   >
// //                    Edit
// //                   </Button>
// //                 </Grid>:""
// //         }  </Grid>
// //        {(showCustomer)?( <Grid container
// //             spacing={3}>
// //             <Grid item
// //                 xs={12}
// //                 sm={6}>
// //                 <TextField required id="name" name="name" label=" name" value={values.name}  fullWidth variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //             <Grid item
// //                 xs={12}
// //                 sm={6}>
// //                 <TextField required id="phoneNumber" name="phoneNumber" label="phone Number"  fullWidth  variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //             <Grid item
// //                 xs={12}
// //                 sm={6}>
// //                 <TextField required id="pincode" name="pincode" label=" pincode"  fullWidth variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //             <Grid item
// //                 xs={12}
// //                 sm={6}>
// //                 <TextField required id="locality" name="locality" label="locality" fullWidth  variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //             <Grid item
// //                 xs={12}>
// //                 <TextField id="address" name="address" label="Address line " fullWidth  variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //             <Grid item
// //                 xs={12}
// //                 sm={6}>
// //                 <TextField required id="city" name="city" label="City/town" fullWidth  variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //             <Grid item
// //                 xs={12}
// //                 sm={6}>
// //                 <TextField id="landmark" name="landmark" label="landmark" fullWidth  variant="outlined" onChange={handleInputChange}/>
// //             </Grid>
// //            <Grid item
// //            xs={12}
// //            sm={6}>
// //                <FormControl component="fieldset">
// //                     <FormLabel component="legend">Type</FormLabel>
// //                     <RadioGroup row aria-label="type" name="type" onChange={handleInputChange}>
// //                         <FormControlLabel value="home" control={<Radio />} label="home" />
// //                         <FormControlLabel value="work" control={<Radio />} label="work" />
// //                         <FormControlLabel value="other" control={<Radio />} label="Other"  />
// //                     </RadioGroup>
// //                 </FormControl>
// //            </Grid>
// //           {!editShow?<Grid item
// //            xs={12}
// //            sm={6} align="right">
// //            <Button
// //                     variant="contained"
// //                     style={{backgroundColor:"#1976d2",color:"white",padding: "6px 16px",width: "151px",height: "35px",marginRight:"2%"}}
// //                     sx={{ mt: 3, ml: 1 }}
// //                     onClick={(e)=>{handleSubmit()}}
// //                   >
// //                    Continue
// //                   </Button></Grid>:""} 
// //         </Grid> ):" "}</Paper>
// //     </React.Fragment>)
// // }
// // export default CustomerAddress;

// import React from "react";
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import {emptyCart} from '../service/cartOp'
// import { setCart } from "../actions/booksActions";
// import {useDispatch} from "react-redux";
// import { setOrderID } from "../actions/booksActions";
// import {useHistory} from "react-router-dom";
// const Order=({showOrder,orders})=>{
//   let history = useHistory();
//     const dispatch = useDispatch();
//     const handleSubmit=()=>{
//         emptyCart().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
//        dispatch(setCart({})) 
//        dispatch(setOrderID(orders._id))
//      history.push('/success');
//     }
//     return(
//         <React.Fragment>
//          <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
//         <Typography gutterBottom   style={{fontWeight:"bold",fontSize:"18px"}} >
//             Order Summary
//         </Typography>
//         {(showOrder && orders.length!==0)?(
//            <Grid container
//            spacing={1}>
//                {
//            orders.items.map((data) => (
//                <Grid container
//            spacing={1} style={{paddingTop:"4%"}}>
//                <Grid item  xs={4} sx={{ py: { xs: 2, md: 3 }}}>
//                <img
//                  className="cartImage"
//                  src={data.image}
//                  alt=""  
//                />
//              </Grid>
//               <Grid item xs={8}>
//               <div style={{ marginLeft: "10px" }}>
//                 <Typography align="left"  style={{fontWeight: "bold", fontSize: "14px" }}>{data.name}</Typography>
//                 <Typography
//                   align="left"
//                   color="text.secondary"
//                   style={{ fontSize: "14px" }}
//                 >
//                   by {data.author}
//                 </Typography>
//                 <Typography
//                   align="left"
//                   style={{ fontWeight: "bold", fontSize: "14px" }}
//                 >
//                   Rs {data.price}
//                 </Typography>
//               </div></Grid></Grid>
//            )
//            )}
//                <Grid item xs={4} align="left">
//                    <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
//                        Total Bill is Rs.{orders.bill}
//                    </Typography>
//                </Grid>
//            <Grid item xs={8}  align="right">
//              <Button
//                    variant="contained"
//                    style={{backgroundColor:"#1976d2",color:"white",padding: "6px 16px",width: "151px",height: "35px",marginRight:"2%"}}
//                    onClick={(e)=>{handleSubmit()}}
//                  >
//                Checkout
//                  </Button></Grid>
//            </Grid>
//         ):""}
      
//         </Paper>
//         </React.Fragment>
//     )
// }
// export default Order


import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Box, IconButton, Stack } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Deletecartapi, Updatecartapi} from "../service/cartapi"
import { deletecart, updatecart } from "../action/getbooks";
import CustomerAddress from "./CustomerAddres";
import Order from "./Order";
export default function Cart() {
  const [count, setCount] = useState([1,1,1]);
  const [showOrder,setShowOrder]=useState(false);
  const [orders,setOrder]=useState([])
  const [showCustomer,setShowCustomer]=useState(false);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
  let  cartId= item._id
  
  Deletecartapi(cartId).then((res) => {
        dispatch(deletecart(res.data))
    }).catch((err) => {
        console.log(err)
    })
}
  const handleIncrement = (item,index) => {
    let data = {
      cartId: item._id,
      numOfItems: item.numOfItems+1,
    }
  
    Updatecartapi(data)
      .then((response) => {
        dispatch(  updatecart({data:response.data, index:index}))
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDecrement = (item,index) => {
    if (item.numOfItems !== 1) {
      let data = {
        cartId: item._id,
        numOfItems: item.numOfItems-1,
      }
     
       Updatecartapi(data)
      .then((response) => {
        dispatch( updatecart({data:response.data, index:index}))
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };
  const handlePlaceorder = () => {
    setShowCustomer(true)
    
}
 
 const cartbooks = useSelector((state) => state.allBooks.cart);
console.log(cartbooks);
  return (
    <React.Fragment>
    <Paper variant="outlined" sx={{ m: { xs: 1, md: 6 }, p: { xs: 3, md: 1 } ,maxWidth:'724px'}}>
       <Typography variant="h6" gutterBottom  sx={{ py:3 }}>
                My Cart  ({cartbooks.length})
       </Typography>
    <Grid container
      spacing={4}
      style={{ paddingTop: 10, paddingLeft: "80px" }}
    >
      
      {cartbooks.map((item, index) => (
        <Grid item xs={12} align="left" >
          
          <Card
            variant="outlined"
            sx={{
              
              width: "474px",
              height: "180px",
            }}key={index}
          >
            <Grid container>
              <Grid
                item
                xs={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CardMedia
                  component="img"
                  alt="images"
                  sx={{
                    width: "65px",
                    marginTop: "65px",
                  }}
                  height="85px"
                  image={item.image}
                />
              </Grid>
              <Grid item xs={9}>
                <CardContent sx={{ marginTop: "40px" }}>
                  <Typography
                    variant="body1"
                    noWrap
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      lineHeight: "17px",
                      letterSpacing: "0px",
                      color: "#0A0102",
                      opacity: 1,
                    }}
                    gutterBottom
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    style={{
                      height: "20px",
                      overflow: "hidden",
                      fontSize: "10px",
                      lineHeight: "12px",
                      letterSpacing: "0px",
                      color: "#9D9D9D",
                      opacity: 1,
                    }}
                  >
                    by {item.author}
                  </Typography>

                  <Typography
                    style={{
                      height: "20px",
                      overflow: "hidden",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "bold",
                      letterSpacing: "0px",
                      color: "#0A0102",
                      opacity: 1,
                    }}
                  >
                    Rs.{item.price}
                  </Typography>
                </CardContent>
                <Stack direction="row">
                  <IconButton >
                    <AddCircleOutlineIcon onClick={()=>{handleIncrement(item,index)}}/>
                  </IconButton>
                  <Box
                    sx={{
                      marginTop: "7px",
                      width: "41px",
                      height: "24px",
                      border: 2,
                      borderColor: "#DBDBDB",
                      borderRadius: "1px",
                      textAlign: "center",
                    }}
                  >
                    {item.numOfItems}
                  </Box>
                  <IconButton>
                    <RemoveCircleOutlineIcon  onClick={()=>handleDecrement(item,index)}/>
                  </IconButton>
                  <Button size="small" onClick={()=>handleDelete(item)}>Remove</Button>
                </Stack>
               
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Stack spacing={2} direction="row-reverse" sx={{ paddingLeft: "15px" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{ background: "#3371B5", color: "white", width:"151px", height:"35px"}}
                    onClick={()=>handlePlaceorder()}
                  >
                    Place Order
                  </Button>
                </Stack>
     
    </Paper>
     <CustomerAddress showCustomer={showCustomer} setShowOrder={setShowOrder} setOrder={setOrder}/>
    <Order showOrder={showOrder} orders={orders}/>
     </React.Fragment>
  );
}
