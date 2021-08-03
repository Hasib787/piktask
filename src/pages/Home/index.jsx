import { Button, Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";

export const Home = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/popular`)
        .then(({ data }) => {
          if (data?.status) {
            const images = [];
            data.categories.map((category) =>
              images.push({id: category.id, name: category.name, slug: category.slug})
            )
            setCategories(images);
            dispatch({
              type: "POPULAR_CATEGORIES",
              payload: [...images]
            });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);


  

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
          <Button disableRipple className={classes.headingButton} component={Link} to="#">
            See More
          </Button>
        </SectionHeading>
      </Container>

      {/* Carousel with Categories */}
      <CategoryCarousel />

      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Products catIndex={0} showHeading />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Products catIndex={1} showHeading />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Products catIndex={2} showHeading />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Products catIndex={3} showHeading />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Products catIndex={4} showHeading />
        )}
      </Container>

      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Products catIndex={5} showHeading />
        )}
      </Container>

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="#"
        buttonText="Get Started"
      />

      <Spacing space={{height: "2.5rem"}} />
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
