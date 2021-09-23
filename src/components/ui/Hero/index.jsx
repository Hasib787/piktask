import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import heroBG from "../../../assets/banner/lucas-wesney-s-y2HJElONo-unsplash.jpg";
import SearchKeyWords from "../SearchKeyWords";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading";
import useStyles from "./Hero.styles";
import Search from "../Search";

const HeroSection = (props) => {
  const classes = useStyles();
  const recentButtonRef = useRef();
  const popularButtonRef = useRef();
  const {
    size,
    popularKeywords,
    creativeWorksDone,
    title,
    heroButton,
    isSearch,
    terms,
    copyrightInfo,
    license,
    cookiesPolicy,
    support,
    blogsTitle,
  } = props;

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {
    const recentImage = recentButtonRef?.current?.baseURI.split("/").pop();
    if (recentImage === "recent_images") {
      recentButtonRef?.current?.classList?.add("active");
    } else {
      popularButtonRef?.current?.classList?.add("active");
    }

    const setResponsiveness = () => {
      return window.innerWidth < 576
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <div
      className={classes.heroWrapper}
      style={{
        backgroundImage: `url(${heroBG})`,
        minHeight: size === "large" ? "30rem" : "15rem",
      }}
    >
      <Container>
        <div className={classes.contentWrapper}>
          {title && (
            <SectionHeading title={title} color="white" center size={size} />
          )}
          {terms && (
            <Typography
              style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
            >
              Terms And Condition
            </Typography>
          )}
          {copyrightInfo && (
            <Typography
              style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
              variant="h1"
            >
              Copyright Information
            </Typography>
          )}
          {license && (
            <Typography
              style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
              variant="h1"
            >
              License Agreement
            </Typography>
          )}
          {cookiesPolicy && (
            <Typography
              style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
              variant="h1"
            >
              Cookies Policy
            </Typography>
          )}
          {support && (
            <Typography
              style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
              variant="h1"
            >
              Support
            </Typography>
          )}
          {blogsTitle && (
            <Typography
              style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
              variant="h1"
            >
              Piktask Blog
            </Typography>
          )}

          {!isSearch && <Search mobileView={mobileView} />}
          <SearchKeyWords
            popularKeywords={popularKeywords}
            heroButton={heroButton}
            creativeWorksDone={creativeWorksDone}
          />
          {heroButton && (
            <div className={classes.heroButtonWrapper}>
              <Button
                ref={popularButtonRef}
                className={classes.popularButton}
                component={Link}
                to="/"
              >
                Popular
              </Button>
              <Button
                ref={recentButtonRef}
                className={classes.recentButton}
                component={Link}
                to="/images/recent_images"
              >
                Recent
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
