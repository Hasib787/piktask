import { Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/banner/banner-single-page.png";
import Spacing from "../../components/Spacing";
import Blog from "../../components/ui/Blog";
import CallToAction from "../../components/ui/CallToAction";
import { CategoryCarousel } from "../../components/ui/Carousel";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import SectionHeading from "../../components/ui/Heading";
import HeroSection from "../../components/ui/Hero";
import Products from "../../components/ui/Products";
import { TopSeller } from "../../components/ui/TopSeller";
import Layout from "../../Layout";
import useStyles from "./Home.styles";

export const Home = () => {
  const classes = useStyles();
  const popularCats = useSelector((state) => state.popularCategories);

  return (
    <Layout>
      <Header />
      <HeroSection
        background={heroBanner}
        size="large"
        popularKeywords
        title="Graphic Resource for Free Download"
      />

      <Container>
        <Spacing space={{ height: "3rem" }} />
        <SectionHeading title="Popular Album Collection" large />
      </Container>

      {/* Carousel with Categories */}
      <CategoryCarousel />

      <Container>
        <Products catName={popularCats[0]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[1]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[2]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[3]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[4]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={popularCats[5]} showHeading count={8} />
      </Container>

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="/subscription"
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

      {/* Top selling author */}
      <TopSeller />
      {/* BLOG SECTION */}
      <Blog />

      <Footer />
    </Layout>
  );
};
