import React, { Component } from 'react';
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import '../css/book.css'
import { useSelector } from "react-redux";
import {
    Grid,
    Box,
    CardContent,
    Card,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import {addcart }from '../service/cartapi'
import {addtoCart} from '../action/getbooks'
import { color } from '@mui/system';
import Pagination from "react-js-pagination";
import { setCurrentPage} from '../action/getbooks';
import PaginationPage from "./PaginationPage";
const Books = ({ value }) => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.allBooks.searchBooks);
    const currentPage = useSelector((state) => state.allBooks. currentPage);
    const [booksPerPage] = useState(12);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = pageNumber => dispatch(setCurrentPage(pageNumber))
    
    const [data, setData] = useState([]);
    const [sort, setSort] = React.useState(null);
    
    const handleSort = (event) => {
        setSort(event.target.value);
        if (event.target.value =="asc") {
          books.sort((a, b) => a.price - b.price);
        } else if (event.target.value =="desc") {
          books.sort((a, b) => b.price - a.price);
        }
      };

 
const [anchorEl, setAnchorEl] = useState(null);
const handleClose = () => {
    setAnchorEl(null);
  };
 const  handleaddcart=(item)=>{
    let data = {
        bookId: item._id,
        price: item.price,
        title: item.title,
        image: item.image,
        author: item.author,
      };
     addcart(data)
      .then((res) => {
         dispatch(addtoCart(data));
             console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

    return (
        <Box className="container" sx={{ p: 15 }}>


            <Typography id="book-count"
                style={{
                    marginTop: "-10%",
                    fontSize: "25px",
                    paddingBottom: "15px"
                }}>
                Books
                <span id="book-count-span"
                    style={{
                        fontSize: "11px",
                        color: "#9D9D9D"
                    }}>({books.length} items)</span>
            </Typography>
            <Typography
                style={{
                    marginTop: "-5%",
                    fontSize: "25px",
                    paddingBottom: "15px"
                }}
            >
                <select style={{
                    marginTop: "-35%",
                    marginLeft: "955px",
                }}
                onChange={ handleSort}
                
                >
                    <option value=" count"  >Sort by relevance</option>
                    <option value="asc"  >Sort price:low to high</option>
                    <option value="desc" >Sort price:high to low</option>
                </select>

            </Typography> 
         
            <Grid container spacing={4}>



                {currentBooks.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={item._id}>
                            <Card sx={{ height: 315, width: 235 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="171"
                                    image={item.image}
                                />
                                <CardContent>

                                    <span align="left" style={{ fontSize: "16px" }}>
                                        {item.title}
                                    </span>
                                    <span
                                        align="left"
                                        style={{ fontSize: "14px" }}
                                    >
                                        {item.author}
                                    </span>
                                    <br></br>
                                    <span
                                        align="left"
                                        style={{ fontWeight: "bold", fontSize: "14px" }}
                                    >
                                        RS.{item.price}
                                    </span>
                                </CardContent>
                                <CardActions
                                    style={{ display: "flex", justifyContent: "space-around" }}
                                >
                                    <Button
                                        fullWidth="true"
                                        variant="contained"
                                        style={{
                                           backgroundColor: " #A03037",
                                            width: "205px",
                                            marginBottom: "10px",
                                            height: "33px",
                                            color: "#ffff",
                                            borderRadius: "2px",
                                            fontSize: "10px"
                                           

                                        }}
                                        onClick={() => 
                                            {
                                                handleaddcart(item)
                                            }
                                        }
                                    >
                                        Add to Bag</Button>
                                    <Button
                                        variant="outlined"
                                        fullWidth="true"
                                        style={{
                                            marginBottom: "10px",
                                            borderColor: " #A03037",
                                            width: "205px",

                                            height: "33px",
                                            color: "#ffff",
                                            borderRadius: "2px",
                                            fontSize: "10px",
                                            color: "#0A0102"
                                            // padding: "3px 4px 3px 4px"


                                        }}
                                    >
                                        Wishlist
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
       
        <div className="pagination-box">
                <PaginationPage booksPerPage={booksPerPage}
                    totalBooks={
                        books.length
                    }
                    paginate={paginate}
                    currentPage={currentPage}/></div>
                   
      
            </Grid>
           
        
        </Box>

    )









}
export default Books;

// import React, { useState, useEffect } from 'react';


// const bands = [
//   {
//     id: 1,
//     name: 'Nightwish',
//     albums: 9,
//     members: 6,
//     formed_in: 1996,
//   },
//   {
//     id: 2,
//     name: 'Metallica',
//     albums: 10,
//     members: 4,
//     formed_in: 1981,
//   },
//   {
//     id: 3,
//     name: 'Nirvana',
//     albums: 3,
//     members: 3,
//     formed_in: 1987,
//   },
// ];

// function App() {
//   const [data, setData] = useState([]);
//   const [sortType, setSortType] = useState('albums');

//   useEffect(() => {
//     const sortArray = type => {
//       const types = {
//         albums: 'albums',
//         members: 'members',
//         formed: 'formed_in',
//       };
//       const sortProperty = types[type];
//       console.log("sortProperty");
//       console.log(sortProperty);
//       const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
//       console.log("sorted");
//       console.log(sorted);
//       setData(sorted);
     
//     };

//     sortArray(sortType);
//   }, [sortType]); 

//   return (
//     <div className="App">
//       <select onChange={(e) => setSortType(e.target.value)}> 
//         <option value="albums">Albums</option>
//         <option value="members">Members</option>
//         <option value="formed">Formed in</option>
//       </select>

//       {data.map(band => (
//         <div key={band.id} style={{ margin: '30px' }}>
//           <div>{`Band: ${band.name}`}</div>
//           <div>{`Albums: ${band.albums}`}</div>
//           <div>{`Members: ${band.members}`}</div>
//           <div>{`Year of founding: ${band.formed_in}`}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
