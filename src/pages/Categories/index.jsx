import React, { useEffect, useState } from "react";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import heroBanner from "../../assets/banner/banner-single-page.png";
import Layout from "../../Layout";
import useStyles from "./Categories.style";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import CallToAction from "../../components/ui/CallToAction";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/categories/popular`)
    .then(({ data }) => {
      if (data?.status) {
        setPopularCategories(data?.categories);
        setLoading(false);
      }
    })
    .catch((error) => {
      setLoading(false);
      console.log("Popular categories error: ", error);
    });
  }, []);

  return (
    <Layout
      title="All Categories-Piktask"
      description="All Categories-Piktask"
    >
      <Header />
      <HeroSection
        background={heroBanner}
        title="Graphic Resources for Free Download"
        size="large"
        popularKeywords
      />
        <Spacing space={{ height: "6rem" }} />
        <Container>
          <Grid
            classes={{ container: classes.container }}
            container
            spacing={2}
          >
            {isLoading ? (
              <h2>Loading now......</h2>
            ) : (
              <>
                {popularCategories.length ? (
                  popularCategories?.map((photo) => (
                    <Grid
                      key={photo.id}
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      className={classes.productItem}
                    >
                      <div className={classes.catItemWrapper}>
                        <div className={classes.catItem}>
                          <Link to={`/category/${photo.slug}`}>
                            <img
                              className={classes.catImage}
                              src={photo?.thumbnail}
                              alt="thumbnail images"
                            />
                          </Link>
                          <Button
                            className={classes.catName}
                            component={Link}
                            to={`/category/${photo.slug}`}
                          >
                            {photo?.name}
                          </Button>
                        </div>
                      </div>
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
      <CallToAction
        title="Join Piktask Designer team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonText="Join Us"
        uppercase
      />
      <Footer />
    </Layout>
  );
};

export default Categories;
