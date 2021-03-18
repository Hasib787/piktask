import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import data from "../../../data/products.json";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));

const Products = () => {
  const { products } = data;
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {products.length > 0 &&
        products.map((product) => (
          <Grid
            key={product._id}
            item
            xs={6}
            sm={4}
            md={3}
            className={classes.productItem}
          >
            <Product key={product._id} product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
