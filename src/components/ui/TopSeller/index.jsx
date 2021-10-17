import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import ProductNotFound from "../ProductNotFound";
import SellerInfo from "./SellerInfo";
import useStyles from "./TopSeller.style";

export const TopSeller = (props) => {
  const classes = useStyles();
  const {homeTopSeller, adminDashBoard} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [topSeller, setTopSeller] = useState([]);

  //data loading
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/contributor/top/?limit=4`)
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
    <>
      <Container>
        {homeTopSeller && (
          <Grid classes={{ container: classes.container }} container spacing={2}>
            {isLoading ? (
              <Loader />
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
                      <SellerInfo photo={photo} />
                    </Grid>
                  ))
                ) : (
                  <ProductNotFound />
                )}
              </>
            )}
          </Grid>
        )}

      {adminDashBoard && (
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {topSeller.length ? (
                topSeller?.map((photo) => (
                  <Grid
                    key={photo.id}
                    item
                    xs={6}
                    sm={6}
                    md={3}
                    className={classes.productItem}
                  >
                    <SellerInfo photo={photo} />
                  </Grid>
                ))
              ) : (
                <ProductNotFound />
              )}
            </>
          )}
        </Grid>
      )}
      </Container>

    </>
  );
};
