import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { validphoneNumber } from "./customerValidation";
import { useSelector } from "react-redux";

import {useDispatch} from "react-redux";
import { savecustomers } from "../service/customerapi";
import { createOrder } from "../service/orderapi";

const CustomerAddress = ({showCustomer,setShowOrder,setOrder}) => {
    const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Locality, setLocality] = useState("");
  const [Address, setAddress] = useState("");
  const [ City, setCity] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [Type, setType] = useState("");
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
      
 const cartbooks = useSelector((state) => state.allBooks.cart);
 console.log(cartbooks);
  const data = { name: Name, phoneNumber: PhoneNumber,
      pincode: Pincode, locality: Locality, address:Address,
      city: City,landmark:Landmark,type:Type}
      
      const handleSubmit = () => {
        // e.preventDefault();
        
        setPhoneNumberError(false);
        if (!validphoneNumber .test(PhoneNumber)) setPhoneNumberError(true);
        console.log(data)
        savecustomers(data)
        let orderinfo = {
                 
                 items: cartbooks,
                 
                  status: "dispatched",
                };
        createOrder(orderinfo ).then((res)=>{
            console.log(res.data);
            console.log(res);
            setOrder(res.data)}).catch((err)=>{console.log(err)
            })
        setShowOrder(true)
      
      };
       
    
    return (<React.Fragment>
          <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
        <Typography variant="h6" gutterBottom>
            Customer details
        </Typography>
       {(showCustomer)?( <Grid container spacing={5}>
            <Grid item xs={12}  sm={5}>
                <TextField 
                required 
                id="name" 
                name="name" 
                label=" Name" 
                fullWidth 
                variant="outlined"
                onChange={(e) => setName(e.target.value)}/>
            </Grid>
            <Grid item xs={12}  sm={5}>
                <TextField 
                required 
                id="phoneNumber" 
                name="phoneNumber" 
                label="Phone Number" 
                fullWidth  
                variant="outlined"
                helperText={PhoneNumberError ? "Invalid Phone Number" : ""}
                onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Grid>
            <Grid item xs={12}  sm={5}>
                <TextField 
                required 
                id="pincode" 
                name="pincode" 
                label=" Pincode"
                 fullWidth 
                 variant="outlined"
                 onChange={(e) => setPincode(e.target.value)}/>
            </Grid>
            <Grid item xs={12}  sm={5}>
                <TextField 
                required 
                id="locality"
                name="locality" 
                label="Locality" 
                fullWidth  
                variant="outlined"
                onChange={(e) =>setLocality(e.target.value)}/>
            </Grid>
            <Grid item xs={10}>
                <TextField 
                id="address" 
                name="address" 
                label="Address line " 
                fullWidth  
                variant="outlined"
                 style={{height:"45px"}} 
                 onChange={(e) => setAddress(e.target.value)}/>
            </Grid>
            <Grid item xs={12}  sm={5}>
                <TextField 
                required 
                id="city" 
                name="city" 
                label="City/town" 
                fullWidth  
                variant="outlined"
                onChange={(e) => setCity(e.target.value)} />
            </Grid>
            <Grid item xs={12}  sm={5}>
                <TextField 
                id="landmark" 
                name="landmark" 
                label="Landmark" 
                fullWidth 
                variant="outlined" 
                onChange={(e) => setLandmark(e.target.value)}/>
            </Grid>
            <Grid item xs={12}  sm={5}>
             
                 <FormControl component="fieldset">
      <FormLabel component="legend"  >Type</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" >
      <FormControlLabel value="home" control={<Radio  size="small" />} label="Homes" onChange={(e) => setType(e.target.value)} />
      <FormControlLabel value="work" control={<Radio size="small" />} label="Work" onChange={(e) => setType(e.target.value)}/>
        <FormControlLabel value="other" control={<Radio size="small" />} label="Other" onChange={(e) => setType(e.target.value)}/>
      </RadioGroup>
    </FormControl>
           </Grid>
           <Grid item
           xs={12}
           sm={6} align="right">
           <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    style={{backgroundColor:"#1976d2",color:"white",padding: "6px 16px",width: "151px",height: "35px",marginLeft:"71%"}}
                     onClick={(e)=>{handleSubmit()}}
                  >
                   Continue
                  </Button></Grid>
        </Grid> ):" "}</Paper>
    </React.Fragment>)
}
export default CustomerAddress;

