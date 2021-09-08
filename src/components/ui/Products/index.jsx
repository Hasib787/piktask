import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProductNotFound from "../ProductNotFound";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading";
import Product from "./Product";
import Loader from "../Loader";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "2.2rem",
  },
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  headingButton: {
    ...theme.typography.button,
    padding: "0.4rem 1rem",
    fontSize: "1.3rem",
    fontWeight: 500,
    color: "#1B3F4E",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "#117A00",
      color: "#fff",
    },
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const popularCategories = useSelector((state) => state.popularCategories);

  const { catName, count, showHeading } = props;
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [scrolling, setScrolling] = useState(0);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    setLoading(true);

    let categoryURL;

    if (user && user?.id) {
      categoryURL = `${process.env.REACT_APP_API_URL}/categories/${catName?.id}?user_id=${user?.id}?limit=8`;
    } else {
      categoryURL = `${process.env.REACT_APP_API_URL}/categories/${catName?.id}?limit=8`;
    }

    if (catName) {
      axios.get(categoryURL).then(({ data }) => {
        if (data?.status) {
          setCategories(data?.category_image);
          setLoading(false);
          dispatch({
            type: "CATEGORY_BASED_ITEMS",
            payload: {
              totalImages: data.total_image_count.total_image,
              categories: data.category_image,
            },
          });
        }
      });
    } else {
      setLoading(true);
    }
  }, [dispatch, catName, user]);

  const addProducts = [];

  useEffect(() => {
    setLoading(true);
    let categoryURL;

    window.onscroll = () => {
      setScrolling(window.pageYOffset);

      let currentPosition = scrolling;

      if (
        popularCategories.length &&
        currentPosition % 100 === 0 &&
        index <= 7
      ) {
        const category = popularCategories[index];
        setIndex((index) => index + 1);
        // console.log('addProducts1', addProducts);
        // console.log("setindex", index);
        // console.log("category", category);
        if (user && user?.id) {
          categoryURL = `${process.env.REACT_APP_API_URL}/categories/${category?.id}?user_id=${user?.id}`;
        } else {
          categoryURL = `${process.env.REACT_APP_API_URL}/categories/${category?.id}`;
        }
        axios.get(categoryURL).then(({ data }) => {
          // console.log("loadData", data);
          // addProducts.push(data);
          // console.log("addProducts1", addProducts);

          if (data?.status) {
            setCategories(data?.category_image);
            dispatch({
              type: "PRODUCT_CATEGORIES",
              payload: 
                [...data.category_image]
            });
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
      }
    };

    setLoading(false);
  }, [scrolling, catName, user]);


  return (
    <>
      {categories.length !== 0 && showHeading && (
        <SectionHeading title={catName?.name} large>
          <Button
            className={classes.headingButton}
            component={Link}
            to={`category/${catName?.slug}`}
          >
            See More
          </Button>
        </SectionHeading>
      )}

      <Grid classes={{ container: classes.container }} container spacing={2}>
        {isLoading ? (
          <Loader item={categories} />
        ) : (
          <>
            {categories?.slice(0, count).map((photo) => (
              <Grid
                key={photo.image_id}
                item
                xs={6}
                sm={4}
                md={3}
                className={classes.productItem}
              >
                <Product catId={catName?.id} photo={photo} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default Products;
