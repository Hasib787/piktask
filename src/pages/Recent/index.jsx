import { Container, Button, Grid } from "@material-ui/core";
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
import { useSelector } from "react-redux";

export const Recent = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [isLoading, setLoading] = useState(true);
  const [recentProduct, setRecentProduct] = useState({});
  const [pageCount, setPageCount] = useState([]);

  //Load Initial value
  useEffect(() => {
    setLoading(true);
    let recentUrl;
    if (user && user?.id) {
      recentUrl = `${process.env.REACT_APP_API_URL}/images?sort_by=recent&user_id=${user.id}&limit=8`;
    } else {
      recentUrl = `${process.env.REACT_APP_API_URL}/images?sort_by=recent&limit=8`;
    }
    axios
      .get(recentUrl)
      .then(({ data }) => {
        if (data?.status) {
          setRecentProduct(data?.images);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Category products error:", error);
        setLoading(false);
      });
  }, [user]);

  //onScroll data load
  useEffect(() => {
    setLoading(true);
    const scroll = window.addEventListener("scroll", handleScroll);
    console.log("Scrolling", scroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {

    if (
      document.documentElement.scrollTop % 700 === 0
    ) {
      console.log("Hello");
      let recentUrl;
      if (user && user?.id) {
        recentUrl = `${process.env.REACT_APP_API_URL}/images?sort_by=recent&limit=8&user_id=${user.id}`;
      } else {
        recentUrl = `${process.env.REACT_APP_API_URL}/images?sort_by=recent&limit=8`;
      }
      axios
        .get(recentUrl)
        .then(({ data }) => {
          if (data?.status) {
            setRecentProduct(data?.images);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log("Category products error:", error);
          setLoading(false);
        });
    }
    return;
  }


  return (
    <Layout title="Recent Images | Piktask" description="Recent Images">
      <Header />
      <HeroSection
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
      <Spacing space={{ height: "3rem" }} />
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
      <TopSeller homeTopSeller />
      {/* BLOG SECTION */}
      <Blog />

      <Footer />
    </Layout>
  );
};
