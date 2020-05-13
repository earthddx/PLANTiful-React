import React, { useContext } from "react";
import { Context } from "../../context";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    fontFamily: "Titillium Web",
    fontSize: 18,
  },
  paper: {
    paddingTop: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttonCount: {
    fontFamily: "Titillium Web",
    fontWeight: 600,
  },
  smalltext: {
    fontSize: "1.2rem",
    color: theme.palette.primary.main,
    fontFamily: "Titillium Web",
  },
  price: {
    fontSize: 16,
  },
  title: {
    fontWeight: 600,
  },
}));

export default function CartItem({ item }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = useContext(Context);
  const classes = useStyles();
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  return greaterThanSm ? (
    <div className={classes.root}>
      <Grid container className={classes.paper}>
        <Grid item xs>
          <img src={img} alt="product" style={{ height: "4rem" }} />
        </Grid>
        <Grid item xs className={classes.paper}>
          {title}
        </Grid>
        <Grid item xs className={classes.paper}>
          ${price}
        </Grid>
        <Grid item xs className={classes.paper}>
          <div className={classes.button}>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button onClick={() => decrement(id)}>-</Button>
              <Button>{count}</Button>
              <Button onClick={() => increment(id)}>+</Button>
            </ButtonGroup>
          </div>
        </Grid>
        <Grid item xs className={classes.paper}>
          <DeleteIcon
            onClick={() => removeItem(id)}
            style={{ cursor: "pointer", color: theme.palette.secondary.main }}
          />
        </Grid>
        <Grid item xs className={classes.paper}>
          ${total.toFixed(2)}
        </Grid>
      </Grid>
    </div>
  ) : (
    <>
      <Grid container className={classes.paper}>
        <Grid item xs>
          <img src={img} alt="product" style={{ height: "5rem" }} />
        </Grid>
        <Grid item xs className={classes.smalltext}>
          <div className={classes.title}>{title}</div>{" "}
          <div className={classes.price}>${price}</div>
          <div className={classes.button}>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button onClick={() => decrement(id)}>-</Button>
              <Button className={classes.buttonCount}>{count}</Button>
              <Button onClick={() => increment(id)}>+</Button>
            </ButtonGroup>
            <DeleteIcon
              onClick={() => removeItem(id)}
              style={{ cursor: "pointer", color: theme.palette.secondary.main }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
