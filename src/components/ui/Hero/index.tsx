import { Container, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import heroBG from "../../../assets/490cdcd7579.svg";
import SectionHeading from "../Heading";
import Search from "../Search";
import useStyles from "./Hero.styles";

type Props = {
  background: string;
  size: string;
  popularKeywords?: boolean;
  title: string;
  subtitle: string;
};

const HeroSection: FC<Props> = ({
  background,
  size,
  popularKeywords,
  title,
  subtitle,
}): JSX.Element => {
  const classes = useStyles();

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
            subtitle={subtitle}
            color="white"
            center
            size={size}
          />}

          <Search mobileView={mobileView} />

          {popularKeywords && (
            <div className={classes.popularSearch}>
              <Typography variant="h5" className={classes.searchTitle}>
                Example : banner, Background, Abstract Banner , Logo Design , Business card , Post Card Design , web template
              </Typography>

              {/* <div className={classes.buttonGroups}>
                {keywords.length > 0 &&
                  keywords.map((keyword, index) => (
                    <Button
                      key={index}
                      className={classes.popularSearchKeyword}
                      variant="outlined"
                    >
                      {keyword}
                    </Button>
                  ))}
              </div> */}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
