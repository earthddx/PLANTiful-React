import React, { useContext, useEffect } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PayPal from "./PayPal";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    fontFamily: "Titillium Web",
  },
  button: {
    padding: theme.spacing(2),
  },
  buttonText: {
    fontFamily: "Titillium Web",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontSize: 20,
  },
  link: {
    textDecoration: "none",
  },
  totalMd: {
    position: "absolute",
    right: "10%",
  },
  totalSm: {
    display: "flex",
    margin: 10,
  },
}));

export default function CartTotals({ history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, addTotals } = useContext(
    Context
  );
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    addTotals();
  }, [cartSubTotal]);

  return (
    <>
      <div className={classes.root}>
        <div
          className={
            greaterThanMd ? `${classes.totalMd}` : `${classes.totalSm}`
          }
        >
          <div className={classes.button}>
            <Link to="/" className={classes.link}>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                onClick={clearCart}
                className={classes.buttonText}
              >
                Clear cart
              </Button>
            </Link>
          </div>
          <div className={classes.paper}>
            <span>subtotal: ${cartSubTotal.toFixed(2)}</span>
            <span>tax: ${cartTax.toFixed(2)}</span>
            <span>total: ${cartTotal.toFixed(2)}</span>
            <PayPal total={cartTotal} clearCart={clearCart} history={history} /> 
          </div>
        </div>
      </div>
    </>
  );
}
