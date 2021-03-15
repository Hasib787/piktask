import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../../assets/icons/facebook-round.svg";
import instagram from "../../../../assets/icons/instagram-round.svg";
import twitter from "../../../../assets/icons/twitter-round.svg";
import logo from "../../../../assets/logo.svg";
import { SocialMedia } from "../../../../types";
import SocialShare from "../../SocialShare";
import useStyles from "./CopyRight.styles";

const CopyRight = () => {
  const classes = useStyles();

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

  return (
    <div className={classes.copyrightWrapper}>
      <Container className={classes.root}>
        <Grid className={classes.gridRoot}>
          <Grid item xs={12} sm={2} className={classes.logoWrapper}>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="Piktask" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.copyRightText}>
              &copy; Designhill International Ltd. {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <SocialShare
              title="Social Share"
              textCase="uppercase"
              socialMedias={socialMedias}
              position="right"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CopyRight;
