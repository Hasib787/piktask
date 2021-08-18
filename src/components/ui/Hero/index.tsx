import { Button, Container } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBG from "../../../assets/490cdcd7579.svg";
import SectionHeading from "../Heading";
import Search from "../Search";
import SearchKeyWords from "../SearchKeyWords";
import useStyles from "./Hero.styles";

export type PropTypes = {
  background?: string | undefined;
  size?: string | undefined;
  popularKeywords?: boolean;
  creativeWorksDone?: boolean;
  heroButton?: boolean;
  title?: string | undefined;
};

const HeroSection: FC<PropTypes> = (props): JSX.Element => {
  const classes = useStyles();
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
              <Button className={classes.popularButton} component={Link} to="/">
                Popular
              </Button>
              <Button
                className={classes.recButton}
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
