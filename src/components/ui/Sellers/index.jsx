import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./Sellers.style";
import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import Spacing from "../../Spacing";
import HeroSection from "../Hero";
import Footer from "../Footer";
import Header from "../Header";
import axios from "axios";
import ProductNotFound from "../ProductNotFound";

const Sellers = () => {
  const classes = useStyles();
  const [topSeller, setTopSeller] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //data loading
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/sellers/top/`)
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
    <Layout title={"Seller | Piktask"}>
      <Header />
      <HeroSection />
      <Spacing space={{ height: "3rem" }} />
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
                <ProductNotFound />
              )}
            </>
          )}
        </Grid>
      </Container>
      <Spacing space={{ height: "3rem" }} />
      <Footer />
    </Layout>
  );
};

export default Sellers;
