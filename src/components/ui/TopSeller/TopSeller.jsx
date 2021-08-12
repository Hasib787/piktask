import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import useStyles from "./TopSeller.style";

export const TopSeller = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [topSeller, setTopSeller] = useState([]);

  //data loading
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/seller/top`)
        .then(({ data }) => {
            console.log("top seller",data);
          if (data?.success) {
            setTopSeller(data.images);
            setIsLoading(false);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);


  return (
    <>
      <Container>
        <Grid spacing={2}>
          {isLoading ? (
            <h2>Loading now......</h2>
          ) : (
            <>
              {topSeller.length ? (
                topSeller?.map((photo) => (
                  <Grid
                    key={photo.image_id}
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    className={classes.productItem}
                  >
                    <Product photo={photo} />
                  </Grid>
                ))
              ) : (
                <Typography variant="body1">
                  Sorry, no products found
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};
