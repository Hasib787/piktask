import { Button, Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./TopSeller.style";

export const TopSeller = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [topSeller, setTopSeller] = useState([]);

  //data loading
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/sellers/top/?limit=4`)
        .then(({ data }) => {
          if (data?.success) {
            setTopSeller(data.sellers);
            setIsLoading(false);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Container>
      <Grid classes={{ container: classes.container }} container spacing={2}>
        {isLoading ? (
          <h2>Loading now......</h2>
        ) : (
          <>
            {topSeller.length ? (
              topSeller?.map((photo) => (
                <Grid
                  key={photo.id}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  className={classes.productItem}
                >
                  <div className={classes.catItemWrapper}>
                    <div className={classes.catItem}>
                      <Link to={`/${photo.username}`}>
                        <img
                        className={classes.catImage}
                        src={photo?.avatar}
                        alt="author images"
                      />
                      </Link>
                      <Button
                        className={classes.catName}
                        component={Link}
                        to={`/${photo.username}`}
                      >
                        {photo?.username}
                      </Button>
                    </div>
                  </div>
                </Grid>
              ))
            ) : (
              <Typography variant="body1">Sorry, no products found</Typography>
            )}
          </>
        )}
      </Grid>
    </Container>
  );
};
