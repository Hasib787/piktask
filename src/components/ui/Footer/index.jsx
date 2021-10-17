import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import Copyright from "./CopyRight";
import { useStyles } from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerRoot}>
      <Container classes={{ root: classes.root }}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3} md={3} className={classes.footerWrapper}>
            <Typography variant="h3" className={classes.footerHeading}>
              Categories
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/category/sports">
                  Graphic Template 
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/category/travel">
                Social Media Banner
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/category/education">
                  Logo Mockup
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/category/music">
                  Abstract Background
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={3} md={3} className={classes.footerWrapper}>
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
                <Link className={classes.navLink} to="/allBlogs/blogs">
                  Blog
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={3} md={3} className={classes.footerWrapper}>
            <Typography variant="h3" className={classes.footerHeading}>
              Information
            </Typography>

            <List className={classes.menuWrapper}>
              {/* <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Plans &amp; pricing
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Affiliate
                </Link>
              </ListItem> */}
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="/aboutUs">
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
          <Grid item xs={6} sm={3} md={3} className={classes.footerWrapper}>
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
            </List>
          </Grid>
        </Grid>
      </Container>

      <Copyright />
    </footer>
  );
};

export default Footer;
