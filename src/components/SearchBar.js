import React, { useState, useContext }  from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Context } from "../context";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.45),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.25),
    },
    marginTop: 90,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const searchingForName = (term) => {
    return (x) => x.title.toLowerCase().includes(term.toLowerCase())|| !term;
  };

export default function SearchBar() {
  const classes = useStyles();
  const { products } = useContext(Context);
  const [list] = useState(products);
  const [term, setTerm] = useState("");

  const searchHandler = (e) => {
    setTerm(e.target.value);
  };
  
  return (
    <div className={classes.root}>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={searchHandler}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </div>
  );
}
