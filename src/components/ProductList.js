import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "../context";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ProductList() {
  const { products } = useContext(Context);
  const classes = useStyles();

  const pageElements = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <Grid container className={classes.root}>
      {pageElements}
    </Grid>
  );
}
