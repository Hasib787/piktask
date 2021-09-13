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
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { category, count, showHeading } = props;
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let categoryURL;

    if (user && user?.id) {
      categoryURL = `${process.env.REACT_APP_API_URL}/categories/${category?.id}?user_id=${user?.id}&limit=8`;
    } else {
      categoryURL = `${process.env.REACT_APP_API_URL}/categories/${category?.id}?limit=8`;
    }
    if (category) {
      axios.get(categoryURL).then(({ data }) => {
        if (data?.status) {
          setImages(data?.category_image);
          setLoading(false);
          dispatch({
            type: "CATEGORY_BASED_ITEMS",
            payload: {
              totalImages: data.total_image_count.total_image,
              images: data.category_image,
            },
          });
        }
      });
    } else {
      setLoading(true);
    }
  }, [dispatch, category, user]);

  return (
    <>
      {images.length !== 0 && showHeading && (
        <SectionHeading title={category?.name} large>
          <Button
            className={classes.headingButton}
            component={Link}
            to={`category/${category?.slug}`}
          >
            See More
          </Button>
        </SectionHeading>
      )}

      <Grid classes={{ container: classes.container }} container spacing={2}>
        {isLoading ? (
          <Loader item={images} />
        ) : (
          <>
            {images?.slice(0, count).map((photo) => (
                <Grid
                  key={photo.image_id}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  className={classes.productItem}
                >
                  <Product catId={category?.id} photo={photo} />
                </Grid>
              ))
            }
          </>
        )}
      </Grid>
    </>
  );
};

export default Products;
