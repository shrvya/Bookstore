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
import {useForm} from '../components/UseForm';
import {create} from '../service/customerDetails';
import { createOrder,getOrder} from '../service/orderOP';
import {useDispatch} from "react-redux";
const initialFValues = {
   name:"",
   phoneNumber:"",
   pincode:"",
   locality:"",
   address:"",
   city:"",
   landmark:"",
   type:""
}
const CustomerAddress = ({showCustomer,setShowOrder,setOrder}) => {
    
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if('phoneNumber' in fieldValues)
        temp.phoneNumber=(/^[1-9][0-9]{9}$/).test(fieldValues.phoneNumber)?"":"phone number should consists of 10 digits."
      
        setErrors({
             // eslint-disable-next-line
            ...temp
        })
       
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
    }
    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues,true,validate);
const data={
    name:values.name,
    phoneNumber:values.phoneNumber,
    pinCode:values.pincode,
    locality:values.locality,
    address:values.address,
    city:values.city,
    landMark:values.landMark,
    type:values.type
}
const handleSubmit=()=>{
    create(data).then((res)=>console.log(res)).catch((err)=>console.log(err))
    createOrder().then((res)=>{console.log(res.data);setOrder(res.data)}).catch((err)=>{console.log(err)})
    setShowOrder(true)
}
    return (<React.Fragment>
         <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
        <Typography variant="h6" gutterBottom>
            Customer details
        </Typography>
       {(showCustomer)?( <Grid container
            spacing={3}>
            <Grid item
                xs={12}
                sm={6}>
                <TextField required id="name" name="name" label=" name" fullWidth variant="outlined" onChange={handleInputChange}/>
            </Grid>
            <Grid item
                xs={12}
                sm={6}>
                <TextField required id="phoneNumber" name="phoneNumber" label="phone Number" fullWidth  variant="outlined" onChange={handleInputChange}/>
            </Grid>
            <Grid item
                xs={12}
                sm={6}>
                <TextField required id="pincode" name="pincode" label=" pincode" fullWidth variant="outlined" onChange={handleInputChange}/>
            </Grid>
            <Grid item
                xs={12}
                sm={6}>
                <TextField required id="locality" name="locality" label="locality" fullWidth  variant="outlined" onChange={handleInputChange}/>
            </Grid>
            <Grid item
                xs={12}>
                <TextField id="address" name="address" label="Address line " fullWidth  variant="outlined" onChange={handleInputChange}/>
            </Grid>
            <Grid item
                xs={12}
                sm={6}>
                <TextField required id="city" name="city" label="City/town" fullWidth  variant="outlined" onChange={handleInputChange}/>
            </Grid>
            <Grid item
                xs={12}
                sm={6}>
                <TextField id="landmark" name="landmark" label="landmark" fullWidth variant="outlined" onChange={handleInputChange}/>
            </Grid>
           <Grid item
           xs={12}
           sm={6}>
               <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup row aria-label="type" name="type" onChange={handleInputChange}>
                        <FormControlLabel value="home" control={<Radio />} label="home" />
                        <FormControlLabel value="work" control={<Radio />} label="work" />
                        <FormControlLabel value="other" control={<Radio />} label="Other"  />
                    </RadioGroup>
                </FormControl>
           </Grid>
           <Grid item
           xs={12}
           sm={6} align="right">
           <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    onClick={(e)=>{handleSubmit()}}
                  >
                   Continue
                  </Button></Grid>
        </Grid> ):" "}</Paper>
    </React.Fragment>)
}
export default CustomerAddress;