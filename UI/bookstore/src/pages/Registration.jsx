import * as React from "react";
import { useState } from "react";
import "../css/stylesheet.css"
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import axiosfunction from '../helper/axios'
import Button from '@mui/material/Button';
import image from "../asset/fundo.png"
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { users, loginusers } from "../service/urls";
import { validfirstname, validlastname, validEmail, validPassword } from './validation';
const axios = require('axios').default;


export const Registration = () => {
  const [values, setValues] = React.useState({ password: '', confirmPassword: '', showPassword: false, showconfirmPassword: false });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);
  
  const data = { firstname: firstName, lastname: lastName,  email: email, password: password,phoneNumber:PhoneNumber }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
     setPasswordConfirmError(false);
    if (!validfirstname.test(firstName)) setFirstNameError(true);
    if (!validlastname.test(lastName)) setLastNameError(true);
    if (!validEmail.test(email)) setEmailError(true);
    if (!validPassword.test(password)) setPasswordError(true);
    setPhoneNumber(true)
    users(data)

    
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword,
      
    });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="outline-div" >
        <div className="container-for-all-data">
          <div className="title-div">
            <span className="title-span">Bookstore</span>
            <p className="heading">
              <span className="heading-span"> Create Your Notes</span>
            </p>
            <div className="form-div">
              <Box className="username-box" component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off"
              >
                <TextField
                name="firstname"
                  label="first name"
                  id="firstname"
                  size="small"
                  error={firstNameError}
                  helperText={firstNameError ? "Invalid first name" : ""}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                 name="lastname"
                  label="last name"
                  id="lastname"
                  size="small"
                  error={lastNameError}
                  helperText={lastNameError ? "Invalid last name" : ""}
                  onChange={(e) => setLastName(e.target.value)}
                />
               <Box className="register-username-box" component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }, }}
                  noValidate
                  autoComplete="off"
                > 
                  <TextField
                   name="username"
                    className="register-username"

                    label="username"
                    id="username"
                    size="small"
                    
                    fullWidth
                    helperText={
                      emailError
                        ? "Invalid email"
                        : "You can use letters,numbers & periods"
                    }
                   
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">@gmail.com</InputAdornment>
                      ),
                    }}

                  />
                </Box> 

                <Box className="passwordholder-box" component="form" sx={{ '& > :not(style)': { m: 1, width: '20ch' }, }}
                  noValidate
                  autoComplete="off"
                >
                  <FormControl className="register-password" sx={{ m: 1, width: '25ch', height: '5ch' }} variant="outlined">
                    <InputLabel className="inputlabel" htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput className="outputlabel"
                     name="password"
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      
                      onChange={(e) => {
                        setPassword(e.target.value);

                      }}
                      error={passwordError}
                      helperText={
                        passwordError ? "Invalid password" : "Use 8 or more characters with a mix of letters, numbers & symbols"
                      }

                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>

                      }

                    
                    />
                  </FormControl>
                 
                </Box>
                <div className="phone">
                <TextField
                 name="phoneNumber"
                  label="phone Number"
                  id="phoneNumber"
                  size="small"
                  className="phoneNumber"
                 
                  onChange={(e) =>setPhoneNumber(e.target.value)}
                />
                </div>
                

                <div className="link-signin">
                  <Link to="/Login">Login</Link>
                </div>
                <div className="div-next-button">


                  <Button id="next-button"onClick={handleSubmit} variant="contained">Next</Button>
                </div>


              </Box>
            </div>

          </div>
          <div className="fundo-image-div">
            <img className="fundo-image" src={image} style={{ verticalAlign: 'middle' }} />
          </div>
        </div>

      </div>

    </>
  );


}