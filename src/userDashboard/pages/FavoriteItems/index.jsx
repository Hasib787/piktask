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
  const [popularProducts, setPopularProducts] = useState({});

  useEffect(() => {
    setLoading(true);
    let recentUrl;
    if (user && user?.id) {
      recentUrl = `${process.env.REACT_APP_API_URL}/images?sort_by=popular&user_id=${user.id}&limit=6`;
    } else {
      recentUrl = `${process.env.REACT_APP_API_URL}/images?sort_by=popular&limit=6`;
    }
    axios
      .get(recentUrl)
      .then(({ data }) => {
        if (data?.status) {
          setPopularProducts(data?.images);
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
                  {popularProducts?.length ? (
                    popularProducts?.map((photo) => (
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
