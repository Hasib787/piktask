import heroBanner from "../../assets/banner/banner-single-page.png";
import { Container, Grid, Typography } from "@material-ui/core";
import CallToAction from "../../components/ui/CallToAction";
import Product from "../../components/ui/Products/Product";
import SignUpModal from "../Authentication/SignUpModal";
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/ui/Hero";
import Header from "../../components/ui/Header";
import Loader from "../../components/ui/Loader";
import Footer from "../../components/ui/Footer";
import { useLocation } from "react-router-dom";
import useStyles from "./SearchResults.styles";
import { useSelector } from "react-redux";
import Layout from "../../Layout";
import axios from "axios";
import ProductNotFound from "../../components/ui/ProductNotFound";

const SearchResults = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const searchQuery = pathname.split("=");
  const keywords = searchQuery[1];
  const searchCategoryID = searchQuery[3];

  const prepareSearchQuery = () => {
    let url;
    if (searchCategoryID) {
      url = `${process.env.REACT_APP_API_URL}/client/search/?title=${keywords}&category_id=${searchCategoryID}&limit=12`;
    } else {
      url = `${process.env.REACT_APP_API_URL}/client/search/?title=${keywords}&limit=12`;
    }

    return encodeURI(url);
  };

  useEffect(() => {
    const URL = prepareSearchQuery();
    axios
    .get(URL)
    .then(({ data }) => {
      if (data?.status) {
        setSearchResults(data.results);
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }, [pathname]);

  const handleJoinUsButton = () => {
    if (!user.token) {
      setOpenAuthModal(true);
    }
  };

  return (
    <Layout title={`${keywords} | Piktask`}>
      <Header></Header>
      <HeroSection
        background={heroBanner}
        size="large"
        popularKeywords
        title="Graphic Resources for Free Download"
      />

      <Container>
        <Typography className={classes.totalResources} variant="h3">
          {`${searchResults.length} Resources for "${keywords}"`}
        </Typography>
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {searchResults.length ? (
                searchResults?.map((photo) => (
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
                <ProductNotFound keywords={keywords}/>
              )}
            </>
          )}
        </Grid>
      </Container>

      {!user.token ? (
        <CallToAction
          title="Join Piktask team"
          subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
          buttonText="Join Us"
          buttonClicked={() => handleJoinUsButton()}
        />
      ) : (
        <CallToAction
          title="Go Premium"
          subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
          buttonLink="/subscription"
          buttonText="See Plans"
        />
      )}

      {/* Sign up modal section*/}
      <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <Footer></Footer>
    </Layout>
  );
};

export default SearchResults;
