import {
  Container,
  FormControl,
  Grid,
  ListItem,
  Select,
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
import Product from "../../components/ui/Products/Product";
import Layout from "../../Layout";
import useStyles from "./Category.styles";

const Category = () => {
  const classes = useStyles();
  const { catName } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [totalImageCount, setTotalImageCount] = useState("");

  const [categories, setCategories] = useState([]);
  const [popularSearchKeywords, setPopularSearchKeywords] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const categoryItem = categories.find((item) => item?.slug === catName);

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
        .get(`${process.env.REACT_APP_API_URL}/categories/`)
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

  //Fetch api to get data for the category page by sorting by popularity
  const getCategoryProducts = (e) => {
    const product = e.target.value;
    if (categoryItem?.id !== undefined) {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/${categoryItem?.id}?${product}=1`)
        .then(({ data }) => {
          if (data?.status) {
            setCategoryProducts(data?.category_image);
            setTotalImageCount(data?.total_image_count?.total_image);
          }
        });
    } catch (error) {
      console.log("Category products error:", error);
      setLoading(false);
    }
  } else {
    setLoading(false);
  }
  };


  return (
    <Layout>
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

      <Container>
        <div className={classes.shortList}>
            <div className={classes.shortListWrapper}>
              <Typography className={classes.shortListTag}>Sort by:</Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select className={classes.selectSortItem}
                  native
                  onChange={getCategoryProducts}
                  inputProps={{
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option value="all_product">All Product</option>
                  <option value="brand_new">Brand New</option>
                  <option value="popular">Popular</option>
                  <option value="top_download">Top Download</option>
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                </Select>
              </FormControl>
            </div>
        </div>
      </Container>

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
                  No resources found
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Container>


      <CallToAction
        title="Join Designhill designer team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonText="Join Us"
        uppercase
      />

      <Footer />
    </Layout>
  );
};

export default Category;
