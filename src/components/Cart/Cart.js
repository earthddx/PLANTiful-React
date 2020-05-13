import React, { useContext } from "react";
import { Context } from "../../context";
import { makeStyles } from "@material-ui/core/styles";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";


const useStyles = makeStyles((theme) => ({
  columns: {
    
  }
}));

export default function Cart(props) {
  const { cart } = useContext(Context);
  const classes = useStyles();
  return (
    <section>
      {cart.length ? (
        <div className={classes.columns}>
          <CartColumns />
          <CartList value={cart} />
          <CartTotals value={cart} history={props.history}/>
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}


//TODO: add scaling over image hover