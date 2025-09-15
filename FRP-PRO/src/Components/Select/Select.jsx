import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Navigate, useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0.5),
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "2px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const optionsName = [
  "School",
  "Teachers",
  "Students",
  "Classes",
  "Syllabous",
  "Subjects",
  "Exams",
  "Fees",
];

const menueOptions = [
  ["School Registration", "Admission List"],
  ["Add New Teacher", "Update Teacher Name", "Teachers List"],
  ["Add New Student", "Update Student Name", "Student List"],
  ["Class Form", "Classes List"],
  ["Syllabous Form", "Syllabous List"],
  ["Subject List"],
  ["Exam Schedule", "Exam Result"],
  ["Fee Structure", "Fee Submission", "Fee Voucher"],
];

export const SelectMenue = () => {
  const [anchorEls, setAnchorEls] = React.useState({});
  const navigate = useNavigate();
  const handleClick = (event, index) => {
    setAnchorEls((prev) => ({
      ...prev,
      [index]: event.currentTarget,
    }));
  };

  const handleClose = (index) => {
    setAnchorEls((prev) => ({
      ...prev,
      [index]: null,
    }));
  };

  const handlenav = (index) => {
    if (index === "Classes List") {
    }
  };

  return (
    <div style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}>
      {optionsName.map((category, i) => {
        const anchorEl = anchorEls[i];
        const open = Boolean(anchorEl);
        const menuItems = menueOptions[i] || [];

        return (
          <div key={i}>
            <Button
              id={`${i}`}
              aria-controls={open ? `menu-${i}` : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) => handleClick(event, i)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: "white",
                backgroundColor: "black",
                fontFamily: "cursive",
                fontWeight: "bolder",
              }}
              variant="contained"
            >
              {category}
            </Button>

            <StyledMenu
              id={`menu-${i}`}
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose(i)}
              MenuListProps={{
                "aria-labelledby": `button-${i}`,
              }}
            >
              {menuItems.map((e, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    const path = `/${e.toLowerCase().replace(/\s+/g, "-")}`;
                    navigate(path);
                    handleClose(i);
                  }}
                >
                  {e}
                </MenuItem>
              ))}
            </StyledMenu>
          </div>
        );
      })}
    </div>
  );
};
