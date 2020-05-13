import React, { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  item: {
    fontFamily: "Titillium Web",
    fontSize: 14,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontFamily: "Titillium Web",
  },
  price: {
    fontFamily: "Titillium Web",
  },
  button: {
    fontFamily: "Titillium Web",
  },
  imageContainer:{
    display: 'flex',
    justifyContent: 'center'
  },
  imageBig: {
    height: "35vh",
  },
  imageSmall: {
    maxHeight: "25vh"
  },
}));

export default function Modal() {
  const { modalProd, isModalOpen, closeModal } = useContext(Context);
  const { img, title, price } = modalProd;
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div>
      {isModalOpen ? (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span className={classes.item}> Item added to the cart</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className={classes.title}
            >
              {title}
            </DialogContentText>
            <DialogContentText
              id="alert-dialog-description"
              className={classes.price}
            >
              ${price}
            </DialogContentText>
            <div className={classes.imageContainer}>
            <img
              src={img}
              alt="product"
              className={
                greaterThanMd ? `${classes.imageBig}` : `${classes.imageSmall}`
              }
            />
            </div>
          </DialogContent>
          <DialogActions style={{ marginBottom: 20 }}>
            <Link to="/" className={classes.link}>
              <Button
                onClick={closeModal}
                color="primary"
                variant="contained"
                autoFocus
                className={classes.button}
              >
                Continue shopping
              </Button>
            </Link>
            <Link to="/cart" className={classes.link}>
              <Button
                onClick={closeModal}
                color="primary"
                className={classes.button}
              >
                Check out
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}
