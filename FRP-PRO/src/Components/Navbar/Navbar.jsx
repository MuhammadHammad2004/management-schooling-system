import logo from "../Images/Logo.jpg";
import { SelectMenue } from "./../Select/Select";
import { AvatarMenu } from "../Avatermebue/AvaterMenue";
import { Box } from "@mui/material";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "black",
        color: "white",
        padding: 2,
        position: "fixed",
        width: "100%",
        zIndex: "2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="LogoImage"
            style={{ height: "30px", borderRadius: "50%" }}
          />
        </Link>

        <Link to={"/"}>
          <h2
            style={{
              fontFamily: "monospace",
              textTransform: "uppercase",
              fontWeight: "bolder",
              fontSize: "15px",
            }}
          >
            Learning Management System
          </h2>
        </Link>
      </div>
      <div className={styles.optionCon} sx={{ display: "flex", gap: 1 }}>
        <SelectMenue />
      </div>
      <div sx={{ display: "flex" }}>
        <AvatarMenu />
      </div>
    </Box>
  );
};
