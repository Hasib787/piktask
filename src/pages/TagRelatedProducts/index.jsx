import { Container, Grid, Typography } from "@material-ui/core";
// import TagButtons from "../../components/ui/TagButtons/index";
import CallToAction from "../../components/ui/CallToAction";
import Product from "../../components/ui/Products/Product";
import useStyles from "./TagRelatedProducts.style";
import HeroSection from "../../components/ui/Hero";
import React, { useEffect, useState } from "react";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import { useParams } from "react-router";
import Layout from "../../Layout";
import axios from "axios";
import ProductNotFound from "../../components/ui/ProductNotFound";

const TagTemplate = () => {
  const classes = useStyles();
  const { tagName } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [tagRelatedProducts, setTagRelatedProducts] = useState([]);

  useEffect(() => {

    // https://piktask.com/api/client/search/?tag=sports&user_id=17
    axios
      .get(`${process.env.REACT_APP_API_URL}/client/search/?tag=${tagName}`)
      .then(({ data }) => {
        if (data?.status) {
          setTagRelatedProducts(data.results);
          setLoading(false);
        }
      })
      .catch((error) => console.log(" Related Tag Image error: ", error));
  }, [tagName]);

  return (
    <Layout title={`${tagName} | Piktask`} description={`${tagName} | Piktask`}>
      <Header />
      <HeroSection size="medium" />

      {/* <div className={classes.tagWrapper}>
        <Container>
          <TagButtons />
        </Container>
      </div> */}
      <Container>
        <Typography className={classes.totalResources} variant="h4">
          {`${tagRelatedProducts.length} Resources for "${tagName}"`}
        </Typography>
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <h2>Loading now......</h2>
          ) : (
            <>
              {tagRelatedProducts.length ? (
                tagRelatedProducts?.map((photo) => (
                  <Grid
                    key={photo.image_id}
                    item
                    xs={12}
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

export default TagTemplate;
