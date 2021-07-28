import { Container, Typography } from "@material-ui/core";
import React, { FC } from "react";
// import { keywords } from "../../../data/demoData";
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

  return (
    <div
      className={classes.heroWrapper}
      style={{
        backgroundImage: `url(${background})`,
        minHeight: size === "large" ? "30rem" : "30rem",
      }}
    >
      <Container>
        <div className={classes.contentWrapper}>
          <SectionHeading title={title} color="white" center size={size} />

          <Search />

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
