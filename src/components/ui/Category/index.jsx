import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStayles from "./Category.styles";

const Category = ({ photo }) => {
  const classes = useStayles();

  return (
    <div className={classes.catItem}>
      {/* <img className={classes.catImage} src={photo?.thumbnail} alt="" /> */}
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
