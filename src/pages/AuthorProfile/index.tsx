import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import authorImg from "../../assets/author.png";
import heroBanner from "../../assets/banner/banner.png";
import facebook from "../../assets/icons/facebook-round.svg";
import instagram from "../../assets/icons/instagram-round.svg";
import twitter from "../../assets/icons/twitter-round.svg";
import AuthorItems from "../../components/ui/AuthorItems";
import Header from "../../components/ui/Header";
import SocialShare from "../../components/ui/SocialShare";
import { SocialMedia } from "../../types";
import useStyles from "./AuthorProfile.styles";

const socialMedias: SocialMedia[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    image: instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    image: twitter,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    image: facebook,
  },
];

const AuthorProfile = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div
        className={classes.authorHero}
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <Container>
          <Grid container className={classes.profileWrapper}>
            <div className={classes.authorImg}>
              <img src={authorImg} alt="Design Studio" />
            </div>
            <div className={classes.authorInfo}>
              <Typography className={classes.authorName} variant="h3">
                Design Studio
              </Typography>
              <div className={classes.resourceDetails}>
                <Typography className={classes.infoItem} variant="body2">
                  Resources
                  <span>760</span>
                </Typography>
                <Typography className={classes.infoItem} variant="body2">
                  Followers
                  <span>2K</span>
                </Typography>
                <Typography className={classes.infoItem} variant="body2">
                  Downloads
                  <span>560K.00</span>
                </Typography>
              </div>
              <div className={classes.authorSocials}>
                <SocialShare
                  title="Share this page:"
                  socialMedias={socialMedias}
                />
              </div>
            </div>
          </Grid>
        </Container>
      </div>
      <AuthorItems />
    </>
  );
};

export default AuthorProfile;
