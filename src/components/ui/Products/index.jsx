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

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/recent`)
        .then(({ data }) => {
          if (data?.success) {
            const showImage = data?.images;
            setPhotos(showImage.slice(0, 8));
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // title, category_id

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
