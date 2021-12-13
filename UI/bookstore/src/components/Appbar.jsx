import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import {filterBooks} from '../action/getbooks';
import SearchIcon from "@mui/icons-material/Search";
import {useState,useEffect} from 'react';
import { useDispatch} from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { useSelector } from "react-redux";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  backgroundColor: "whitesmoke",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  color: "#9D9D9D",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9D9D9D"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function Appbar() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.allBooks.fetchbooks);
  const [search, setSearch] = useState("");
  
const handleSearch = (searchValue) => {
  setSearch(searchValue);
};

useEffect(() => {
  dispatch(
    filterBooks(
      books.filter((item) => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.author.toLowerCase().includes(search.toLowerCase())
        );
      })
    )
  );

}, [search, books]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: " #A03037" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{ marginLeft: "7%" }}
          >
            <ImportContactsIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
           style={{ marginLeft: "-1%" }}
          >
            Bookstore
          </Typography>
          <Search style={{ width: "40%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={
                (e) => handleSearch(e.target.value)
            }
            />
          </Search>
          <Box sx={{ flexGrow: 15}} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Typography variant="p" id="cart-title">
              Cart
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
           
            <IconButton
              size="large"
              
              style={{ color: "white",marginRight:"1em"}}
            >
              <ShoppingCartIcon style={{ color: "white", marginRight: "2%" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
