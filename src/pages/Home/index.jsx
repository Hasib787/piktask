import { Button, Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState("People");

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/recent`)
        .then(({ data }) => {
          if (data?.success) {
            setLoading(false);
            const showImage = data?.images;
            setPhotos(showImage);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
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
        {isLoading ? (
          <h2>Loaing...</h2>
        ) : (
          <Products
            photos={photos}
            title="Vector images"
            catname="Nature / Landscapes"
          />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loaing...</h2>
        ) : (
          <Products
            photos={photos}
            title="Vector Collections"
            catname="People"
          />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loaing...</h2>
        ) : (
          <Products
            photos={photos}
            title="Architecture Collection"
            catname="architecture"
          />
        )}
      </Container>

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="#"
        buttonText="Get Started"
      />

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
