import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Category.styles";

const Category = ({ photo }) => {
  const classes = useStyles();

  return (
    <div className={classes.catItem}>
      <img
        className={classes.catImage}
        src={photo?.thumbnail}
        alt={photo.name}
      />
      <Button
        className={classes.catName}
        component={Link}
        to={`/category/${photo.slug}`}
      >
        {photo?.name}
      </Button>
    </div>
  );
};

export default Category;
