import { Container, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import heroBG from "../../../assets/490cdcd7579.svg";
import SectionHeading from "../Heading";
import Search from "../Search";
import useStyles from "./Hero.styles";

type Props = {
  background?: string | undefined;
  size?: string | undefined;
  popularKeywords?: boolean;
  title?: string | undefined;
};

const HeroSection: FC<Props> = (props): JSX.Element => {
  const classes = useStyles();
  const { size, popularKeywords, title, background } = props;

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
        minHeight: size === "large" ? "30rem" : "20rem",
      }}
    >
      <Container>
        <div className={classes.contentWrapper}>
          
          {title && <SectionHeading
            title={title}
            color="white"
            center
            size={size}
          />}

          <Search mobileView={mobileView} />

          {popularKeywords && (
            <div className={classes.popularSearch}>
              <Typography variant="h5" className={classes.searchTitle}>
                Example : banner, Background, Abstract Banner , Logo Design ,
                Business card , Post Card Design , web template
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
