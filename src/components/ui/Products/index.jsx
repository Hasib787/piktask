import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "4rem",
  },
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  headingButton: {
    ...theme.typography.button,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    padding: "0.8rem 3rem",
    fontSize: "1.7rem",
    fontWeight: 500,
    color: "#1B3F4E",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "#117A00",
      color: "#fff",
    },
  },
}));

type ProductProps = {
  catName: string,
  count: number,
  showHeading: boolean,
};
const Products = (props) => {
  const classes = useStyles();
  const { catName, count, showHeading } = props;
  const { popularCategories, allCategories } = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [isCategoriesLoaded, setCategoriesLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(({ data }) => {
          if (data?.status) {
            setCategories(data.categories);
            setCategoriesLoaded(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getCatID = () => {
    if (categories) {
      return categories.find((item) => item.slug === catName?.slug);
    }
  };

  const categoriesBasedItems = () => {
    // .get(`${process.env.REACT_APP_API_URL}/categories/${getCatID()?.id}`)
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories/2`)

      .then(({ data }) => {
        if (data?.status) {
          setCategories(data?.category_image);
          setCategoriesLoaded(false);
          // setTotalImages(data?.total_image_count?.total_image);
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
  };
  // categoriesBasedItems();

  return (
    <>
      {showHeading && (
        <SectionHeading title={catName?.name} large>
          <Button
            className={classes.headingButton}
            component={Link}
            to={`/category/${catName?.slug}`}
          >
            See More
          </Button>
        </SectionHeading>
      )}

      <Grid classes={{ container: classes.container }} container spacing={2}>
        {isLoading ? (
          <h2>Loading......</h2>
        ) : (
          categories?.slice(0, count).map((photo) => (
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
        )}
      </Grid>
    </>
  );
};

export default Products;
