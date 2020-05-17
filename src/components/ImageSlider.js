import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ImageSlider({ images }) {
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div className={classes.root}>
      <SimpleImageSlider
        width={greaterThanMd ? '60vh' : '40vh'}
        height={greaterThanMd ? '60vh' : '40vh'}
        images={images}
      />
    </div>
  );
}
