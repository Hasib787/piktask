import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import SectionHeading from "../Heading";
import Loader from "../Loader";
import Product from "./Product";

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
  const { catName, count, showHeading } = props;
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
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
      setLoading(false);
    }
  }, [catName, dispatch]);

  return (
    <Layout>
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
        {categories.slice(0, count).map((photo, index) => (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {categories.length ? (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    className={classes.productItem}
                  >
                    <Product photo={photo} />
                  </Grid>
                ) : (
                  <Loader />
                )}
              </>
            )}
          </>
        ))}
      </Grid>
    </Layout>
  );
};

export default Products;
