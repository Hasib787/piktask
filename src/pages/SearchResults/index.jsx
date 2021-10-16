import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import heroBanner from "../../assets/banner/banner-single-page.png";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Product from "../../components/ui/Products/Product";
import Layout from "../../Layout";
import SignUpModal from "../Authentication/SignUpModal";
import useStyles from "./SearchResults.styles";

const SearchResults = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  const [isLoading, setLoading] = useState(false);
  const [searchCategoryID, setSearchCategoryID] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const keywords = pathname.split("=").pop();

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
          {searchResults.length &&
            `${searchResults.length} Resources for "${keywords}"`}
        </Typography>
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <h2>Loading now......</h2>
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
                <Typography variant="body1">
                  Sorry, no products found
                </Typography>
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
