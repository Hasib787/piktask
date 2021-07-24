import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import Copyright from "./CopyRight";
import { Column, useStyles } from "./Footer.styles";

const Footer = ({ addminFooter = false }) => {
  const classes = useStyles();

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
                <Link className={classes.navLink} href="/">
                  Graphics &amp; Design
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="/">
                  Digital Marketing
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Writing &amp; Translation
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Video &amp; Animation
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Music &amp; Audio
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
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
                <Link className={classes.navLink} href="#">
                  New resources
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  The most popular content
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Search trends
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
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
                <Link className={classes.navLink} href="#">
                  Plans &amp; pricing
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Affiliate
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  About us
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Jobs
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
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
                <Link className={classes.navLink} href="#">
                  Terms &amp; conditions
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  License Agreement
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Copyright information
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
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
                <Link className={classes.navLink} href="#">
                  Support
                </Link>
              </ListItem>
              <ListItem className={classes.navItem}>
                <Link className={classes.navLink} href="#">
                  Contact
                </Link>
              </ListItem>
            </List>
          </Column>
        </Grid>
      </Container>

      <Copyright />
    </footer>
  );
};

export default Footer;
