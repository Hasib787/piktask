import { Button, Container, Typography } from "@material-ui/core";
import React, { FC } from "react";
import heroBG from "../../../assets/490cdcd7579.svg";
import { keywords } from "../../../data/demoData";
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

  return (
    <div
      className={classes.heroWrapper}
      style={{
        backgroundImage: `url(${heroBG})`,
        minHeight: size === "large" ? "60rem" : "35.5rem",
      }}
    >
      {/* <div className={classes.heroBg}>
        <img src={background} alt="" />
      </div> */}
      <Container>
        <div className={classes.contentWrapper}>
          <SectionHeading
            title={title}
            subtitle={subtitle}
            color="white"
            center
            size={size}
          />

          <Search />

          {popularKeywords && (
            <div className={classes.popularSearch}>
              <Typography variant="h5" className={classes.searchTitle}>
                Popular Search
              </Typography>

              <div className={classes.buttonGroups}>
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
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
