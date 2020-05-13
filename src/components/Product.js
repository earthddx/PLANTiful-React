import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    margin: 30,
    position: "relative",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.05)",
    },
  },
  media: {
    height: 340,
    //add scaling as: https://www.wildberries.ru/catalog/knigi/detyam-i-roditelyam/vospitanie-i-pedagogika?sort=popular&cardsize=large
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  title: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    fontFamily: "Titillium Web",

  },
  price: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: 18,
    backgroundColor: "#448aff",
    color: "white",
    padding: 10,
    borderRadius: 40,
    fontFamily: "Titillium Web",
  },
  button: {
    fontWeight: 600,
    position: "absolute",
    right: 10,
    bottom: 17,
    fontFamily: "Titillium Web",
  },
}));

export default function Product({ product }) {
  const { id, title, img, price, inCart } = product;
  const classes = useStyles();
  const { handleDetail, addToCart, openModal } = useContext(
    Context
  );

  return (
    <div className={classes.root}>
      <CardActionArea onClick={() => handleDetail(id)}>
        <Link to="/details" className={classes.link}>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Typography
          className={classes.price}
          gutterBottom
          variant="h5"
          component="h3"
        >
          ${price}
        </Typography>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            addToCart(id);
            openModal(id);
          }}
          className={classes.button}
          disabled={inCart ? true : false}
        >
          {inCart ? <p>In cart</p> : <p>Add to cart</p>}
        </Button>
      </CardActions>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
