import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
    fontFamily: "Titillium Web",
  },
  cart: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "white",
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              <EcoIcon style={{ fontSize: 30 }} /> PLANTiful
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.cart}>
            <Link className={classes.link} to="/cart">
              <ShoppingCartTwoToneIcon style={{ fontSize: 40 }} />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
