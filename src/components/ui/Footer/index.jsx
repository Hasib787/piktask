import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import SocialShare from "../SocialShare";
import Copyright from "./CopyRight";
import { Column, useStyles } from "./Footer.styles";
import facebook from "../../../assets/icons/facebook-round.svg";
import twitter from "../../../assets/icons/twitter-round.svg";
import instagram from "../../../assets/icons/instagram-round.svg";

const Footer = ({ addminFooter = false }) => {
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
    <footer
      style={addminFooter ? { marginTop: "4rem" } : undefined}
      className={classes.footerRoot}
    >
      <Container classes={{ root: classes.root }}>
        <Grid container spacing={3}>
          <Column>
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
          </Column>
          <Column>
            <Typography variant="h3" className={classes.footerHeading}>
              Contact
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  New resources
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  The most popular content
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Search trends
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Blog
                </Link>
              </ListItem>
            </List>
          </Column>
          <Column>
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
                  Jobs
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Sell your content
                </Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Typography variant="h3" className={classes.footerHeading}>
              Legal
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Terms &amp; conditions
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  License Agreement
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Copyright information
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Cookies policy
                </Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Typography variant="h3" className={classes.footerHeading}>
              Help
            </Typography>

            <List className={classes.menuWrapper}>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Support
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} to="#">
                  Contact
                </Link>
              </ListItem>
              <Typography variant="h3" className={classes.socialMediaTitle}>
              Social Media
            </Typography>
            <Grid className={classes.gridRoot}>
            <Grid item xs={12}>
            <SocialShare
              socialMedias={socialMedias}
              position="left"
            />
          </Grid>
          </Grid>
            </List>
          </Column>
        </Grid>
      </Container>

      <Copyright />
    </footer>
  );
};

export default Footer;
