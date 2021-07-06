import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "4rem",
  },
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));

const Products = ({ count = 8, query = "popular" }) => {
  const [photos, setPhotos] = useState([]);
  const classes = useStyles();

  const getPhotos = async () => {
    try {
      const { data } = await axios.get(
        // `http://174.138.30.55/api/categories?query=${query}&per_page=${count}`
        `http://174.138.30.55/api/categories?query=${query}&per_page=${count}`
      );
      setPhotos(data.categories);
      // console.log(data.categories[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Grid classes={{ container: classes.container }} container spacing={2}>
      {photos?.length > 0 &&
        photos?.map((photo) => (
          <Grid
            key={photo.id}
            item
            xs={6}
            sm={4}
            md={3}
            className={classes.productItem}
          >
            <Product key={photo.id} photo={photo} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
