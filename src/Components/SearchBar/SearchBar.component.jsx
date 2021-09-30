import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MoviesList } from "./MoviesList";
import "./SearchBar.styles.css";

const SearchBar = ({value, setValue}) => {

  const defaultProps = {
    options: MoviesList,
    getOptionLabel: (option) => option.title,
  };

  return (
    <Autocomplete
      {...defaultProps}
      id="disable-close-on-select"
      value={value}
      onChange={(x,y) => {
        if(y)
          setValue(y.title);
      }}
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
