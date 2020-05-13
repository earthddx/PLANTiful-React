import React, { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import ImageSlider from "./ImageSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  detailsMd: {
    //alignItems: "center",
  },
  imageContainerMd: {
    //position: "relative",
    marginTop: 100,
    display: 'flex',
    justifyContent: 'right'
  },
  imageContainerSm: {
    //position: "relative",
    marginTop: 20,
  },
  imageMd: {
    //position: "absolute",
    //right: 100,
    //top: "10%",
  },
  infoContainerMd: {
    //position: "relative",
    margin: 30,
    marginTop: 80,
    //top: 100,
    //right: 0,
  },
  infoContainerSm: {
    //position: "relative",
    margin: 20,
    //top: 100,
    right: 0,
  },
  paper: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Titillium Web",
  },
  paperInfo: {
    marginTop: 10
  },
  link: {
    textDecoration: "none",
  },
  buttonContainer: {
    display: "flex",
  },
  button: {
    margin: '20px 5px',
    whiteSpace: "nowrap",
  },
  buttonText: {
    fontFamily: "Titillium Web",
  },
}));

export default function Details() {
  const { detail, addToCart, openModal } = useContext(Context);
  const { id, title, imgDetail, price, info, inCart } = detail;
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      {/* image */}
      <Grid
        container
        className={
          greaterThanMd ? `${classes.detailsMd}` : `${classes.detailsSm}`
        }
      >
        <Grid
          item
          xs={12}
          md={6}
          className={
            greaterThanMd
              ? `${classes.imageContainerMd}`
              : `${classes.imageContainerSm}`
          }
        >
          <Grid item md={4} sm={false} xs={false}></Grid>
          <div className={classes.imageMd}>
            <ImageSlider images={imgDetail} />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          className={
            greaterThanMd
              ? `${classes.infoContainerMd}`
              : `${classes.infoContainerSm}`
          }
        >
          <div className={classes.infoItems}>
            <div className={classes.paper}>
              <h1>{title}</h1><span>${price}</span>
              <div className={classes.paperInfo}>{info}</div>
              <div className={classes.buttonContainer}>
                <Grid item md={6} className={classes.button}>
                  <Button
                    size={greaterThanMd ? "large" : "small"}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      addToCart(id);
                      openModal(id);
                    }}
                    className={classes.buttonText}
                    disabled={inCart ? true : false}
                  >
                    <ShoppingCartTwoToneIcon />
                    {inCart ? "in Cart" : "add to cart"}
                  </Button>
                </Grid>
                <Grid item md={6} className={classes.button}>
                  <Link to="/" className={classes.link}>
                    <Button
                      variant="contained"
                      size={greaterThanMd ? "large" : "small"}
                      color="primary"
                      className={classes.buttonText}
                    >
                      back to store
                    </Button>
                  </Link>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
