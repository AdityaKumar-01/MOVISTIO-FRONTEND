import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import logo from "../../Assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GradeIcon from "@mui/icons-material/Grade";
import Tooltip from "@mui/material/Tooltip";
import LoginIcon from "@mui/icons-material/Login";

import SearchBar from "./../SearchBar/SearchBar.component";

import "./Header.styles.css";
const Header = () => {
  let history = useHistory();
  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    if (value) history.push(`/movies/${value}`);
  };
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
        <Tooltip title="Search">
          <SearchIcon
            className="search-icon"
            fontSize="large"
            onClick={handleSearch}
          />
        </Tooltip>

        <div>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <AccountCircleIcon onClick={handleClick} fontSize="large" />
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className="dropdown-container">
              <span className="dropdown-item">
                <AccessTimeFilledIcon fontSize="medium" />
                <p
                  style={{ fontWeight: "bold", paddingLeft: "10px",pointer:"cursor" }}
                  onClick={() => history.push("/")}
                >
                  History
                </p>
              </span>
              <span className="dropdown-item">
                <GradeIcon fontSize="medium" />
                <p
                  style={{ fontWeight: "bold", paddingLeft: "10px",pointer:"cursor" }}
                  onClick={() => history.push("/")}
                >
                  Ratings
                </p>
              </span>
              <span className="dropdown-item">
                <LoginIcon
                  fontSize="medium"
                  onClick={() => history.push("/auth")}
                />
                <p
                  style={{ fontWeight: "bold", paddingLeft: "10px",pointer:"cursor" }}
                  onClick={() => history.push("/auth")}
                >
                  Login
                </p>
              </span>
            </div>
          </Menu>
        </div>
      </span>
    </div>
  );
};

export default Header;
