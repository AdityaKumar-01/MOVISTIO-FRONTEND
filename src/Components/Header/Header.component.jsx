import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Header.styles.css";
import SearchIcon from "@material-ui/icons/Search";
import SearchBar from "./../SearchBar/SearchBar.component";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
    const [value, setValue] = useState();

    const handleClick = () =>{
      history.push(`/movies/${value}`);
    }
  return (
    <div className="header-wrapper">
      <span className="header-logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </span>
      <span className="header-buttons">
        <Link to={"/"} className="header-links">
          HOME
        </Link>
        <a href="#movies" className="header-links">
          MOVIES
        </a>
        <a href="#genres" className="header-links">
          GENRES
        </a>

        <SearchBar value={value} setValue={setValue} />
        <SearchIcon
          className="search-icon"
          fontSize="large"
          onClick={handleClick}
        />
      </span>
    </div>
  );
};

export default Header;
