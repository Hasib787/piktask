import { Container, Typography } from "@material-ui/core";
import React from "react";
import heroBanner from "../../assets/banner/banner-tag-page.png";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Products from "../../components/ui/Products";
import TagButtons from "../../components/ui/TagButtons";
import useStyles from "./TagTemplate.styles";

const TagTemplate = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <HeroSection
        background={heroBanner}
        size="medium"
        title="Republicday images"
      />

      <div className={classes.tagWrapper}>
        <Container>
          <TagButtons />
        </Container>
      </div>
      <Container>
        <Typography className={classes.totalResources} variant="h3">
          6,283 Resources
        </Typography>
        <Products />
      </Container>

      <CallToAction
        title="Join Designhill designer team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonText="Join Us"
        uppercase
      />
      <Footer />
    </>
  );
};

export default TagTemplate;
