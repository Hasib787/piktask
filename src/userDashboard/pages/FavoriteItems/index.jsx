import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import SectionHeading from "../../../components/ui/Heading";
import Loader from "../../../components/ui/Loader";
import ProductNotFound from "../../../components/ui/ProductNotFound";
import Product from "../../../components/ui/Products/Product";
import Layout from "../../../Layout";
import UserSideBar from "../../components/UserSideBar";

const useStyles = makeStyles(({
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));

const FavoriteItems = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [isLoading, setLoading] = useState(true);
  const [favoriteProducts, setFavoriteProducts] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/favourite_image/?limit=20&page=1`, 
      {
        headers: {Authorization: user.token},
      })
      .then(({ data }) => {
        if (data?.status) {
          setFavoriteProducts(data?.like_images);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Category products error:", error);
        setLoading(false);
      });
  }, [user]);

  return (
    <Layout title="Favorite Items || Piktask">
      <Header />

      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={4}>
          <Grid item md={3} sm={3} xm={12} className={classes.productItem}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xm={12} className={classes.productItem}>
            <SectionHeading title="Favorite" large />
            <Grid
              classes={{ container: classes.container }}
              container
              spacing={2}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {favoriteProducts?.length ? (
                    favoriteProducts?.map((photo) => (
                      <Grid
                        key={photo.image_id}
                        item
                        xs={6}
                        sm={4}
                        // md={3}
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
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{ height: "5rem" }} />
      <Footer />
    </Layout>
  );
};

export default FavoriteItems;
