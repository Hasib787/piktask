import { Container, Grid, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/banner/banner-category-page.png";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Pagination from "../../components/ui/Pagination";
import Products from "../../components/ui/Products";
import useStyles from "./Category.styles";

const Category = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <HeroSection
        background={heroBanner}
        size="medium"
        title="Free Background Photos"
        subtitle="Royalty Free PNG Images, Vectors, Backgrounds, Templates, Text Effect"
      />

      <div className={classes.tagWrapper}>
        <Container>
          <Grid container className={classes.root}>
            <Typography className={classes.tagTitle} variant="h3">
              Popular Search:
            </Typography>
            <Grid container className={classes.tagContainer}>
              <Grid item lg={3} md={3} sm={4} className={classes.columnItem}>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    1. Republic day
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    2.Chinese new year
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    3.Background
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    4.India republic day
                  </Link>
                </ListItem>
              </Grid>

              <Grid item lg={3} md={3} sm={4} className={classes.columnItem}>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    5.Banner
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    6.Business card
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    7.Mockup
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    8.Infographic
                  </Link>
                </ListItem>
              </Grid>

              <Grid item lg={3} md={3} sm={4} className={classes.columnItem}>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    9.Business card
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    10.Mockup
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    11.Infographic
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    12.Flyer
                  </Link>
                </ListItem>
              </Grid>

              <Grid item lg={3} md={3} sm={4} className={classes.columnItem}>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    13.Flower
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    14.Logo mockup
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link className={classes.link} to="#">
                    15.Valentine
                  </Link>
                </ListItem>
                <ListItem className={classes.linkItem}>
                  <Link
                    className={classes.link}
                    to="#"
                    style={{ color: "#117A00" }}
                  >
                    16.See more
                  </Link>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <Typography className={classes.totalResources} variant="h3">
          6,283 Resources
        </Typography>
        <Products />
        <Pagination />
      </Container>

      <CallToAction
        title="Join Designhill designer team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonLink="https://getbootstrap.com/"
        buttonText="Join Us"
        uppercase
      />

      <Footer />
    </>
  );
};

export default Category;
