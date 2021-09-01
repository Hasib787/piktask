import { Button, Container } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroBG from "../../../assets/490cdcd7579.svg";
import SectionHeading from "../Heading";
import Search from "../Search";
import SearchKeyWords from "../SearchKeyWords";
import useStyles from "./Hero.styles";

const HeroSection = (props) => {
  const classes = useStyles();
  const popularButtonRef = useRef();
  const recentButtonRef = useRef();
  const {
    size,
    popularKeywords,
    creativeWorksDone,
    title,
    heroButton,
    background,
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

          <Search mobileView={mobileView} />
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