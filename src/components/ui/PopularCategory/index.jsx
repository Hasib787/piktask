import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import useStyles from "./Category.styles";

const PopularCategory = ({ photo }) => {
  const classes = useStyles();

  return (
    <Layout>
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
          to={`/${photo.slug}`}
        >
          {photo?.name}
        </Button>
      </div>
    </div>
    </Layout>
  );
};

export default PopularCategory;
