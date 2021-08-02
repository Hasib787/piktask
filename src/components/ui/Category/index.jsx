import { Button } from "@material-ui/core";
import React from "react";
import useStayles from "./Category.styles";

const Category = ({ photo }) => {
  const classes = useStayles();
  console.log("photo", photo);

  return (
    <div className={classes.catItem}>
      <img className={classes.catImage} src={photo?.thumbnail} alt="" />
      <Button className={classes.catName}>{photo?.name}</Button>
    </div>
  );
};

export default Category;
