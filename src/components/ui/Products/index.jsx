import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const Products = (props) => {
  const classes = useStyles();
  const { catIndex, count = 8, showHeading } = props;
  const popularCategories = useSelector(state => state.popularCategories);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/recent`)
        .then(({ data }) => {
          if (data?.success) {
            setProducts(data.images);
            setLoading(false);
            
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const displayPhotos = products?.filter((item) => item.categories_id === popularCategories[catIndex]?.id);

  return (
    <>
      {showHeading && (
        <SectionHeading title={popularCategories[catIndex]?.name} large>
        <Button className={classes.headingButton} component={Link} to={`/category/${popularCategories[catIndex]?.slug}`}>
          See More
        </Button>
      </SectionHeading>
      )}

      <Grid classes={{ container: classes.container }} container spacing={2}>
        {displayPhotos?.slice(0, 8).map((photo) => (
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
          ))}
      </Grid>
    </>
  );
};

export default Products;
