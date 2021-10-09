import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/Logo/piktask-6.png";
import useStyles from "./CopyRight.styles";
import heroBG from "../../../../assets/banner/frank-eiffert-2LjdRhVElBw-unsplash.jpg";
import SocialShare from "../../SocialShare";
import facebook from "../../../../assets/icons/facebook-round.svg";
import twitter from "../../../../assets/icons/twitter-round.svg";
import instagram from "../../../../assets/icons/instagram-round.svg";


const CopyRight = () => {
  const classes = useStyles();
  const socialMedias = [
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
    <div
      className={classes.copyrightWrapper}
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <Container className={classes.root}>
        <div>
          <Grid className={classes.gridRoot}>
            <Grid item xs={12} sm={1} md={2} className={classes.logoWrapper}>
              <Link to="/">
                <img className={classes.logo} src={logo} alt="Piktask" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography className={classes.copyRightText}>
                &copy; Piktask International Ltd. {new Date().getFullYear()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <SocialShare socialMedias={socialMedias} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default CopyRight;
