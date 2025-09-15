import { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import styles from "./Avater.module.css";
import { useNavigate } from "react-router-dom";

export const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar alt="User Avatar" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        <MenuItem className={styles.pagesOption}>Pages Option</MenuItem>
      </Menu>
    </div>
  );
};
