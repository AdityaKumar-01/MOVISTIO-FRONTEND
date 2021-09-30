import React,{useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { MoviesList } from "./MoviesList";
import "./SearchBar.styles.css"


const SearchBar = () => {
   
        const defaultProps = {
          options: MoviesList,
          getOptionLabel: (option) => option.title,
        };
       
  return (
    <Autocomplete
      {...defaultProps}
      id="disable-close-on-select"
      
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search you movie here"
          variant="standard"
        />
      )}
      className="search-bar-area"
    />
  );
};

export default SearchBar;
