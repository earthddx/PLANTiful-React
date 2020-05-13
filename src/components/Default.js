import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Titillium Web",
  },
  fourOfour: {
    margin:'0px auto',
    fontSize: '8rem',
    fontWeight: 900,
    
  },
  notFound: {
    margin:'0px auto',
    fontSize: '1.6rem'
  }
}));

export default function Default(props) {
  const classes = useStyles();
  return (
    <>
      <section className={classes.root}>
        <div className={classes.fourOfour}>
          <h1 style={{marginBottom: 0}}>404 </h1>
        </div>
        <div className={classes.notFound}>
          <h1>The page you're looking for can't be found.</h1>
        </div>
      </section>
    </>
  );
}
