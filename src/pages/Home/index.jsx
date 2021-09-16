import heroBanner from "../../assets/banner/banner-single-page.png";
import { CategoryCarousel } from "../../components/ui/Carousel";
import CallToAction from "../../components/ui/CallToAction";
import { TopSeller } from "../../components/ui/TopSeller";
import SectionHeading from "../../components/ui/Heading";
import { Button, Container } from "@material-ui/core";
import Products from "../../components/ui/Products";
import HeroSection from "../../components/ui/Hero";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import Spacing from "../../components/Spacing";
import Blog from "../../components/ui/Blog";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./Home.styles";
import Layout from "../../Layout";
import { useState } from "react";

export const Home = () => {
  const classes = useStyles();
  const categories = useSelector((state) => state.popularCategories);
  const [popularCats, setPopularCats] = useState([])
  const [scrolling, setScrolling] = useState(0);
  let [index, setIndex] = useState(0);

    
    window.onscroll = () => {
      setScrolling(window.pageYOffset);
      let currentPosition = scrolling;
     
        if (
          categories.length &&
          currentPosition % 50 > 30 &&
          index <= 7
        ) {
          const category = categories[index];
          setIndex((index) => index + 1);
           popularCats.push(category);
        }
    };


  return (
    <Layout
      title="Graphic Resources for Free Download | Piktask"
      description="Graphic Resources for Free Download"
    >
      <Header />
      <HeroSection
        background={heroBanner}
        size="large"
        popularKeywords
        heroButton
        title="Graphic Resources for Free Download"
      />

      <Container>
        <Spacing space={{ height: "3rem" }} />
        <SectionHeading title="Popular Album Collection" large>
          <Button
            className={classes.headingButton}
            component={Link}
            to="/categories"
          >
            See More
          </Button>
        </SectionHeading>
      </Container>
      <Spacing space={{ height: "1.2rem" }} />

      {/* Carousel with Categories */}
      <CategoryCarousel />

      {popularCats.length && popularCats.map((category, index) => 
        <Container>
          <Products key={index} category={category} showHeading count={8} />
        </Container>
      )};
      {/* <Container>
        <Products catName={productCategories[0]} showHeading count={8} />
      </Container> */}

      {/* <Container>
        <Products catName={productCategories[2]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={productCategories[3]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={productCategories[4]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={productCategories[5]} showHeading count={8} />
      </Container>

      <Container>
        <Products catName={productCategories[6]} showHeading count={8} />
      </Container> */}

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonLink="/subscription"
        buttonText="Get Started"
      />

      <Spacing space={{ height: "2.5rem" }} />

      <Container>
        <SectionHeading title="Top Selling Author" large>
          <Button
            className={classes.headingButton}
            component={Link}
            to="/sellers"
          >
            See More
          </Button>
        </SectionHeading>
      </Container>

      {/* Top selling author */}
      <TopSeller homeTopSeller />

      {/* BLOG SECTION */}
      <Blog />

      <Footer />
    </Layout>
  );
};
