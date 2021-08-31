import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Category.styles";

const PopularCategory = ({ photo }) => {
  const classes = useStyles();

  return (
      <div className={classes.catItemWrapper}>
      <div className={classes.catItem}>
        <img
          className={classes.catImage}
          src={photo?.thumbnail}
          alt="Popular images"
        />
        <Button
          className={classes.catName}
          component={Link}
          to={`category/${photo.slug}`}
        >
          {photo?.name}
        </Button>
      </div>
    </div>
  );
};

export default PopularCategory;
