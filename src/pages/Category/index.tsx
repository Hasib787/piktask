import {
  Container,
  Grid,
  ListItem,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  const { catName }: { catName: string } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // console.log("categories", categories);

  useEffect(() => {
    getCategories();
    getCategoriesWithId();
  }, []);

  const categoryItem = categories.find((item: string) => item.slug === catName);
  console.log("catId", categoryItem);

  const getCategoriesWithId = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/${categoryItem?.id}`)
        .then(({ data }) => {
          console.log("data", data);
          if (data?.status) {
            setCategoryProducts(data.category_image);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(({ data }) => {
          if (data?.status) {
            setCategories(data.categories);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <HeroSection
        background={heroBanner}
        size="large"
        creativeWorksDone
        title="Graphic Resource for Free Download"
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

      <div className={classes.shortList}>
        <Container>
          <div className={classes.shortListWrapper}>
            <Typography className={classes.shortListTag}>Sorted By:</Typography>
            <Tabs className={classes.sortListMenu}>
              <Tab
                className={classes.sortListItem}
                disableRipple
                component={Link}
                to="#"
                label="Popular"
                style={{ color: "#117A00" }}
              />
              <Tab
                className={classes.sortListItem}
                disableRipple
                component={Link}
                to="#"
                label="Top Download"
              />
              <Tab
                className={classes.sortListItem}
                disableRipple
                component={Link}
                to="#"
                label="Brand New"
              />
              <p className={classes.borderStyle}></p>
              <Tab
                className={classes.sortListItem}
                disableRipple
                component={Link}
                to="#"
                label="All Product"
              />
              <Tab
                className={classes.sortListItem}
                disableRipple
                component={Link}
                to="#"
                label="Free"
              />
              <Tab
                className={classes.sortListItem}
                disableRipple
                component={Link}
                to="#"
                label="Premium"
              />
            </Tabs>
          </div>
        </Container>
      </div>
      <Container>
        <Typography className={classes.totalResources} variant="h3">
          456456 Resources
        </Typography>

        <Products catName={catName} />
        <Pagination />
      </Container>

      <CallToAction
        title="Join Designhill designer team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonLink="https://piktask.com/"
        buttonText="Join Us"
        uppercase
      />

      <Footer />
    </>
  );
};

export default Category;
