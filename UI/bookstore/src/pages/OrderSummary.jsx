import Appbar from '../components/Appbar'
import React from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import order from "../asset/order.png"
import {  Grid } from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import { useSelector} from "react-redux";

import Footer from "../components/Footer";

const OrderSummary = () => {

    
   
    return   (
        <Grid container spacing={2}>
             <Grid item xs={12} style={{ paddingTop: "10px" }}>
             <Appbar />
             </Grid>
         
          <Grid item xs={12} style={{ paddingTop: "40px" ,paddingLeft:"500px"}}>
          <img src={order} alt="Loading" width="170px" height="200px" />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography
            width={"330px"}
            style={{
            //   fontSize: "18px",
              font:" normal normal normal 18px/22px Lato",
              lineHeight: "22px",
              letterSpacing: "0px",
              color: "#333232",
              opacity: 1,
              paddingRight:"120px"
            }}
          >
            hurray!!! your order is confirmed the order id is #od45678 save the
            order id for further communication..
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <table  cellpadding="3" cellspacing="0" align="center" 
          background=" #FAFAFA 0% 0% no-repeat padding-box"
          border=" 1px solid #DCDCDC" font=" normal normal medium 12px/15px Lato"
          color= "#333232">
            <thead>
          
              <tr>
                <td style={{ font:" normal normal medium 12px/15px Lato",
color: "#333232"}}>Email us</td>
                <td>Contact us</td>
                <td>Address</td>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td>admin@bookstore.com</td>
                <td>+91 8163475881</td>
                <td style={{ width: "350px" }} align="left">
                  42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                  Kumarakom restaurant, HSR Layout, Bangalore 560034
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            type="submit"
            style={{
              background: "#3371B5",
              color: "white",
              width: "200px",
              height: "35px",
              marginLeft:"550px"
            }}
            component={Link} to="/Dashboard"
          >
            Continue Shopping
          </Button>
        </Grid>
      <Footer />
      </Grid>
    );
        
     
}
export default OrderSummary;