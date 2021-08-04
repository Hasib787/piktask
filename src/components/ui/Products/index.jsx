import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading";

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
  const [isLoading, setLoading] = useState(true);
  const [isCategoriesLoaded, setCategoriesLoaded] = useState(true);
  const dispatch = useDispatch();

  const currentCatName = allCategories.categories.find(
    (item) => item.slug === catName?.slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(({ data }) => {
          if (data?.status) {
            setLoading(false);
            dispatch({
              type: "CATEGORIES",
              payload: {
                categories: data.categories,
              },
            });
          }
        });
    } catch (error) {
      console.log(error);
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/categories/${currentCatName?.id}`)
      .then(({ data }) => {
        console.log("cat data", data);

        if (data?.status) {
          setProducts(data?.category_image);
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
  }, [currentCatName, dispatch]);

  const categoriesBasedItems = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories/24`)
      .then(({ data }) => {
        console.log("cat data", data);

        if (data?.status) {
          setProducts(data?.category_image);
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

  function getCategories() {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(({ data }) => {
          if (data?.status) {
            const catID = data?.categories?.find(
              (item: string) => item.slug === catName?.slug
            );
            console.log("catID", catID);

            axios
              .get(`${process.env.REACT_APP_API_URL}/categories/${catID?.id}`)
              .then(({ data }) => {
                if (data?.status) {
                  setProducts(data?.category_image);
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
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

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
        {/* {isLoading ? (
          <h2>Loading foding......</h2>
        ) : (
          products?.slice(0, count).map((photo) => (
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
        )} */}
      </Grid>
    </>
  );
};

export default Products;
