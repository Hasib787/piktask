import React, { useEffect, useState } from "react";
import { Container, Button, Grid, Typography } from "@material-ui/core";
import CallToAction from "../../components/ui/CallToAction";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/banner/banner-single-page.png";
import Layout from "../../Layout";
import Spacing from "../../components/Spacing";
import Blog from "../../components/ui/Blog";
import Header from "../../components/ui/Header";
import SectionHeading from "../../components/ui/Heading";
import HeroSection from "../../components/ui/Hero";
import { TopSeller } from "../../components/ui/TopSeller";
import useStyles from "./Recent.style";
import Product from "../../components/ui/Products/Product";
import axios from "axios";
import Footer from "../../components/ui/Footer";

const Recent = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [recentProduct, setRecentProduct] = useState({});

  //data load
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/recent_images/by_date`)
        .then(({ data }) => {
          if (data?.status) {
            setRecentProduct(data?.images);
            setLoading(false);
          }
        });
    } catch (error) {
      console.log("Category products error:", error);
      setLoading(false);
    }
  }, []);

  return (
    <Layout
      title="Recent Images-Piktask"
      description="Recent Images"
    >
      <Header />
      <HeroSection
        background={heroBanner}
        size="large"
        popularKeywords
        heroButton
        title="Graphic Resource for Free Download"
      />
      <Spacing space={{ height: "3rem" }} />
      <Container>
        <SectionHeading title="Recent Images" large />
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <h2>Loading now......</h2>
          ) : (
            <>
              {recentProduct?.length ? (
                recentProduct?.map((photo) => (
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
      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="/subscription"
        buttonText="Get Started"
      />

      <Spacing space={{ height: "2.5rem" }} />

      <Container>
        <SectionHeading title="Top Selling Author" large>
          <Button
            className={classes.headingButton}
            component={Link}
            to="/sellers"
          >
            See More
          </Button>
        </SectionHeading>
      </Container>

      {/* Top selling author */}
      <TopSeller />
      {/* BLOG SECTION */}
      <Blog />

      <Footer />
    </Layout>
  );
};

export default Recent;