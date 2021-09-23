import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import SocialShare from "../SocialShare";
import Copyright from "./CopyRight";
import { useStyles } from "./Footer.styles";
import facebook from "../../../assets/icons/facebook-round.svg";
import twitter from "../../../assets/icons/twitter-round.svg";
import instagram from "../../../assets/icons/instagram-round.svg";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer className={classes.footerRoot}>
      <Container classes={{ root: classes.root }}>
        <Grid container spacing={3}>
          <Grid xs={6} sm={3} md={3} className={classes.footerWrapper}>
            <Typography variant="h3" className={classes.footerHeading}>
              Categories
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Graphics &amp; Design
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Digital Marketing
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Writing &amp; Translation
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Video &amp; Animation
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Music &amp; Audio
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Programming &amp; Tech
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={6} sm={3} md={3} className={classes.footerWrapper}>
            <Typography variant="h3" className={classes.footerHeading}>
              Content
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/images/recent_images">
                  New resources
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/images/popular_images">
                  The most popular content
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/search/trending_search">
                  Search trends
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Blog
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={6} sm={3} md={3} className={classes.footerWrapper}>
            <Typography variant="h3" className={classes.footerHeading}>
              Information
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Plans &amp; pricing
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Affiliate
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  About us
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Sell your content
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/support">
                  Support
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/contact">
                  Contact
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={6} sm={3} md={3} className={classes.footerWrapper}>
            <Typography variant="h3" className={classes.footerHeading}>
              Legal
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/termsConditions">
                  Terms &amp; conditions
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/licenseAgreement">
                  License Agreement
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/copyrightInformation">
                  Copyright information
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/cookiesPolicy">
                  Cookies policy
                </Link>
              </ListItem>
              <Grid className={classes.gridRoot}>
                <Grid item xs={12}>
                  <SocialShare
                    socialMedias={socialMedias}
                    position="left"
                  />
                </Grid>
              </Grid>
            </List>
          </Grid>
        </Grid>
      </Container>

      <Copyright />
    </footer>
  );
};

export default Footer;
