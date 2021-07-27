import { Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/banner/banner-single-page.png";
import Blog from "../../components/ui/Blog";
import CallToAction from "../../components/ui/CallToAction";
import {
  CategoryCarousel,
  ProductCarousel,
} from "../../components/ui/Carousel";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import SectionHeading from "../../components/ui/Heading";
import HeroSection from "../../components/ui/Hero";
import Products from "../../components/ui/Products";
import useStyles from "./Home.styles";

export const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <HeroSection
        background={heroBanner}
        size="large"
        popularKeywords
        title="Graphic Resource for Free Download"
      />

      <Container>
        <SectionHeading title="Popular Album Collection" large>
          <Button className={classes.headingButton} component={Link} to="#">
            See More
          </Button>
        </SectionHeading>
      </Container>

      {/* Carousel with Categories */}
      <CategoryCarousel />

      <Container>
        <SectionHeading
          title="Photo Collections"
          subtitle="Top website templates with the highest sales volume."
          large
        >
          <Button className={classes.headingButton} component={Link} to="#">
            See More
          </Button>
        </SectionHeading>
        <Products query="Fashion" count={8} />
      </Container>

      <Container>
        <SectionHeading
          title="Vector Collections"
          subtitle="Top website templates with the highest sales volume."
          large
        >
          <Button className={classes.headingButton} component={Link} to="#">
            See More
          </Button>
        </SectionHeading>
        <Products query="london" count={8} />
      </Container>

      <Container>
        <SectionHeading
          title="Mockup Collection"
          subtitle="Top website templates with the highest sales volume."
          large
        >
          <Button className={classes.headingButton} component={Link} to="#">
            See More
          </Button>
        </SectionHeading>
        <Products query="Photography" count={8} />
      </Container>

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="#"
        buttonText="Get Started"
      />

      <Container>
        <SectionHeading
          title="Top Selling Author"
          subtitle="Top website templates with the highest sales volume."
          large
        >
          <Button className={classes.headingButton} component={Link} to="#">
            See More
          </Button>
        </SectionHeading>
      </Container>
      {/* Carousel with Products */}
      <ProductCarousel />

      {/* BLOG SECTION */}
      <Blog />

      <Footer />
    </>
  );
};
