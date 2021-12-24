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
    console.log(res);
        dispatch(deletecart(cartId))
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
   
       {(cartbooks.length!==0)?(
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
          <Stack spacing={1} direction="row" sx={{ marginLeft:"480px", paddingBottom:"15px"}}>
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
        </Grid>
        
        ):""}
      
     
    </Paper>
     <CustomerAddress showCustomer={showCustomer} setShowOrder={setShowOrder} setOrder={setOrder}/>
    <Order showOrder={showOrder} orders={orders}/>
     </React.Fragment>
  );
}
