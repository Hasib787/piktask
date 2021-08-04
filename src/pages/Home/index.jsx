import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/banner/banner-single-page.png";
import Spacing from "../../components/Spacing";
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
  const popularCats = useSelector((state) => state.popularCategories);

  const [isLoading, setLoading] = useState(true);
  // const [popularCats, setPopularCats] = useState([]);
  const dispatch = useDispatch();

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
        <SectionHeading title="Popular Album Collection" large />
      </Container>

      {/* Carousel with Categories */}
      <CategoryCarousel />

      <Container>
        {/* {popularCats && ( */}
        <Products catName={popularCats[0]} showHeading count={8} />
        {/* )} */}
      </Container>

      {/* <Container>
        {popularCats && (
          <Products catName={popularCats[1]?.slug} showHeading count={8} />
        )}
      </Container>

      <Container>
        <Products catName={popularCats[2]?.slug} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[3]?.slug} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[4]?.slug} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[5]?.slug} showHeading count={8} />
      </Container> */}

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="#"
        buttonText="Get Started"
      />

      <Spacing space={{ height: "2.5rem" }} />

      <Container>
        <SectionHeading title="Top Selling Author" large>
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
