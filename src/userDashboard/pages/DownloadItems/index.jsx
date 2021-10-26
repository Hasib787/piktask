import { Container, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import SectionHeading from "../../../components/ui/Heading";
import Loader from "../../../components/ui/Loader";
import Paginations from "../../../components/ui/Pagination";
import ProductNotFound from "../../../components/ui/ProductNotFound";
import Product from "../../../components/ui/Products/Product";
import Layout from "../../../Layout";
import UserSideBar from "../../components/UserSideBar";

const useStyles = makeStyles({
  cardItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
});

const DownloadItems = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [isLoading, setLoading] = useState(true);
  const [downloadsItem, setDownloadsItem] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  var downloadItem = 4;

  useEffect(() => {
    setLoading(true);
    if(user?.isLogged){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/downloads?limit=${downloadItem}&page=${pageCount}`,
        { headers: { Authorization: user?.token }, }
      )
      .then(({ data }) => {
        if (data?.status) {
          setDownloadsItem(data?.downloads);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Category products error:", error);
        setLoading(false);
      });
    }
  }, [user?.isLogged, user?.token, pageCount, downloadItem]);

  return (
    <Layout title="Downloads || Piktask">
      <Header />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} sm={3} xs={12} className={classes.cardItem}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.cardItem}>
            <SectionHeading title="Download" large />
            <Grid
              classes={{ container: classes.container }}
              container
              spacing={2}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {downloadsItem?.length ? (
                    downloadsItem?.map((photo) => (
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
                    <ProductNotFound noCollection="Downloads" />
                  )}
                </>
              )}
            </Grid>
            {downloadsItem?.length >3 && (
              <>
                <Paginations
                  onChange={() => setPageCount(prev => prev + 1)}
                  count={10}
                  pageCount={pageCount}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{ height: "3rem" }} />
      <Footer />
    </Layout>
  );
};

export default DownloadItems;
