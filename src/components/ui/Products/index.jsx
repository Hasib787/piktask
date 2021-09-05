import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading";
import Loader from "../Loader";
import ProductNotFound from "../ProductNotFound";
import Product from "./Product";
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

  const { catName, count, showHeading } = props;
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    if (catName !== undefined) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/${catName?.id}`)
        .then(({ data }) => {
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
  }, [catName, dispatch]);

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
            {categories.length ? (
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
            ) : (
              <ProductNotFound />
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default Products;
