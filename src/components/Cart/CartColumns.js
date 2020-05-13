import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: 60,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontFamily: 'Titillium Web',
    fontWeight: 400
  },
}));

export default function CartColumns() {
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    greaterThanMd && (
      <div>
        <Grid container >
          <Grid item xs>
            <div className={classes.paper}>Product</div>
          </Grid>
          <Grid item xs>
            <div className={classes.paper}>Name of product</div>
          </Grid>
          <Grid item xs>
            <div className={classes.paper}>Price</div>
          </Grid>
          <Grid item xs>
            <div className={classes.paper}>Quantity</div>
          </Grid>
          <Grid item xs>
            <div className={classes.paper}>Remove</div>
          </Grid>
          <Grid item xs>
            <div className={classes.paper}>Total</div>
          </Grid>
        </Grid>
      </div>
    )
  );
}
