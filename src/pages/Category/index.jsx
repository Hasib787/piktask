import {
  Button,
  Container,
  FormControl,
  Grid,
  Select,
  Typography,
} from "@material-ui/core";
import heroBanner from "../../assets/banner/banner-category-page.png";
import ProductNotFound from "../../components/ui/ProductNotFound";
import CallToAction from "../../components/ui/CallToAction";
import Product from "../../components/ui/Products/Product";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroSection from "../../components/ui/Hero";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import Loader from "../../components/ui/Loader";
import Layout from "../../Layout";
import useStyles from "./Category.styles";
import axios from "axios";
import { useSelector } from "react-redux";

export const Category = () => {
  const classes = useStyles();
  const { catName } = useParams();
  const user = useSelector(state => state.user);

  const [popularSearchKeywords, setPopularSearchKeywords] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [totalImageCount, setTotalImageCount] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const categoryItem = categories.find((item) => item?.slug === catName);

  useEffect(() => {
    setLoading(true)
    getCategories();
    getCategoriesWithId();
    popularKeyWords();
  }, [categoryItem?.id]);


  const getCategoriesWithId = () => {
    if (categoryItem?.id) {

      let relatedImageURL;

      if(user && user?.id){
        relatedImageURL = `${process.env.REACT_APP_API_URL}/categories/${categoryItem?.id}?user_id=${user?.id}`
      } else {
        relatedImageURL = `${process.env.REACT_APP_API_URL}/categories/${categoryItem?.id}`
      }
      
      axios
      .get(relatedImageURL)
      .then(({ data }) => {
        if (data?.status) {
          setCategoryProducts(data?.category_image);
          setTotalImageCount(data?.total_image_count?.total_image);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  };

  const popularKeyWords = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/client/search/popular_keyword?limit=10}`)
    .then(({ data }) => {
      if (data?.status) {
        const popularSearch = (data?.keywords);
        setPopularSearchKeywords(popularSearch.filter((e) => e));
      }
    })
    .catch((error) => {
      console.log("Popular search keywords", error);
      setLoading(false);
    });
  };

  const getCategories = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/categories?limit=50`)
    .then(({ data }) => {
      if (data?.status) {
        setCategories(data.categories);
      }
    })
    .catch((error) => {
      console.log("Categories error:", error);
      setLoading(false);
    });
  };

  //Fetch api to get data for the category page by sorting by popularity
  const getCategoryProducts = (e) => {
    const product = e.target.value;
    if (categoryItem?.id) {
      axios
      .get(
        `${process.env.REACT_APP_API_URL}/categories/${categoryItem?.id}?${product}=1`
      )
      .then(({ data }) => {
        if (data?.status) {
          setCategoryProducts(data?.category_image);
          setTotalImageCount(data?.total_image_count?.total_image);
        }
      })
      .catch((error) => {
        console.log("Category products error:", error);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  };

  return (
    <Layout title={`${catName} | Piktask`}>
      <Header />
      <HeroSection
        background={heroBanner}
        size="large"
        creativeWorksDone
        title="Graphic Resource for Free Download"
      />

      <Container>
        <div className={classes.shortList}>
          <div className={classes.shortListWrapper}>
            <Typography className={classes.shortListTag}>Sort by:</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                className={classes.selectSortItem}
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
          {`${totalImageCount} Resources`}
        </Typography>

        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <Loader />
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
                <ProductNotFound/>
              )}
            </>
          )}
        </Grid>
      </Container>

      <div className={classes.tagWrapper}>
        <Container>
          <Grid container>
            <Grid item className={classes.tagsContainer}>
              <Typography className={classes.tagTitle} variant="h3">
                Popular Search:
              </Typography>
              {popularSearchKeywords?.map((tag, index) => (
                <Button
                  className={classes.tagButton}
                  key={index}
                  tag={tag}
                  component={Link}
                  to={`/tag/${tag}`}
                >
                  {tag}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>

      <CallToAction
        title="Join Piktask team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonText="Join Us"
        uppercase
      />

      <Footer />
    </Layout>
  );
};

