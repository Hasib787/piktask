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
import Product from "../../components/ui/Products/Product";
import useStyles from "./Category.styles";

const Category = () => {
  const classes = useStyles();
  const { catName }: { catName: string } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [totalImageCount, setTotalImageCount] = useState("");

  const [categories, setCategories] = useState([]);
  const [popularSearchKeywords, setPopularSearchKeywords] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const categoryItem = categories.find(
    (item: string) => item?.slug === catName
  );

  useEffect(() => {
    getCategories();
    getCategoriesWithId();
    popularKeyWords();
  }, [categoryItem?.id]);

  const getCategoriesWithId = () => {
    if (categoryItem?.id !== undefined) {
      try {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/categories/${categoryItem?.id}`
          )
          .then(({ data }) => {
            if (data?.status) {
              setCategoryProducts(data?.category_image);
              setTotalImageCount(data?.total_image_count?.total_image);
              setLoading(false);
            }
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const popularKeyWords = (limit = 10) => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/client/search/popular_keyword?limit=${limit}}`
        )
        .then(({ data }) => {
          if (data?.status) {
            setPopularSearchKeywords(data?.keywords);
          }
        });
    } catch (error) {
      console.log("Popular search keywords", error);
      setLoading(false);
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
      console.log("Categories error:", error);
      setLoading(false);
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
            <Grid item md={2} sm={12} className={classes.columnItem}>
              <Typography className={classes.tagTitle} variant="h3">
                Popular Search:
              </Typography>
            </Grid>

            <Grid item md={10} sm={12} className={classes.columnItem}>
              {popularSearchKeywords.length &&
                popularSearchKeywords.map((keyword, index) => (
                  <ListItem key={index} className={classes.linkItem}>
                    <Link className={classes.link} to="#">
                      {`${index + 1}: ${keyword}`}
                    </Link>
                  </ListItem>
                ))}
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
          {totalImageCount && `${totalImageCount} Resources`}
        </Typography>

        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <h2>Loading now......</h2>
          ) : (
            <>
              {categoryProducts.length ? (
                categoryProducts?.map((photo) => (
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
