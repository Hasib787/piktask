import { Container, Button, Grid, Typography } from "@material-ui/core";
import heroBanner from "../../assets/banner/banner-single-page.png";
import CallToAction from "../../components/ui/CallToAction";
import Product from "../../components/ui/Products/Product";
import { TopSeller } from "../../components/ui/TopSeller";
import SectionHeading from "../../components/ui/Heading";
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/ui/Hero";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Spacing from "../../components/Spacing";
import Blog from "../../components/ui/Blog";
import { Link } from "react-router-dom";
import useStyles from "./Recent.style";
import Layout from "../../Layout";
import axios from "axios";
import Loader from "../../components/ui/Loader";
import ProductNotFound from "../../components/ui/ProductNotFound";

export const Recent = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [recentProduct, setRecentProduct] = useState({});

  //data load
  useEffect(() => {
    setLoading(true);
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
    <Layout title="Recent Images | Piktask" description="Recent Images">
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
            <Loader />
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
                <ProductNotFound />
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
