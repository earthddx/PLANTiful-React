import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    marginTop: 100,
    fontFamily: 'Titillium Web'
  },
  button: {
    padding: theme.spacing(2),
  },
  textMedium: {
    fontSize: '1.5rem',
    textTransform: "uppercase",
  },
  textSmall: {
    fontSize: '1rem',
    textTransform: "uppercase",
  },
  link: {
    textDecoration: "none",
    marginTop: 60,
    
  },
  buttonText: {
    fontFamily: 'Titillium Web'
  }
}));

export default function EmptyCart() {
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div className={classes.root}>
      <h1 className={greaterThanMd ? `${classes.textMedium}` : `${classes.textSmall}`}>you don't have any products here yet</h1>
      <Link to="/" className={classes.link}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.buttonText}
        >
          back to store
        </Button>
      </Link>
    </div>
  );
}
