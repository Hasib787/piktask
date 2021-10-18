import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Collapse,
} from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import React, { useEffect, useState } from "react";
import Copyright from "./CopyRight";
import { useStyles } from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [contact, setContact] = useState(true);
  const [information, setInformation] = useState(true);
  const [legal, setLegal] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleContact = () => {
    setContact(!contact);
  };
  const handleInformation = () => {
    setInformation(!information);
  };
  const handleLegal = () => {
    setLegal(!legal);
  };

  //mobile responsive
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <footer className={classes.footerRoot}>
      {!mobileView ? (
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
                  <Link
                    className={classes.navLink}
                    to="/recentImage/recent-images"
                  >
                    New resources
                  </Link>
                </ListItem>
                <ListItem className={classes.navItem}>
                  <Link className={classes.navLink} to="/images/popular_images">
                    The most popular content
                  </Link>
                </ListItem>
                <ListItem className={classes.navItem}>
                  <Link
                    className={classes.navLink}
                    to="/search/trending_search"
                  >
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
      ) : (
        <List
          className={classes.collapseRoot}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon className={classes.listItemIcon} />
            <ListItem className={classes.title}>CATEGORIES</ListItem>
            {open ? (
              <ExpandMoreRoundedIcon className={classes.arrowIcon} />
            ) : (
              <ExpandLessRoundedIcon className={classes.arrowIcon} />
            )}
          </ListItemButton>
          <Collapse in={!open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/category/sports">
                  Graphic Template
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/category/travel">
                  Social Media Banner
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/category/education">
                  Logo Mockup
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/category/music">
                  Abstract Background
                </Link>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleContact}>
            <ListItemIcon className={classes.listItemIcon} />
            <ListItem className={classes.title}>CONTENT</ListItem>
            {contact ? (
              <ExpandMoreRoundedIcon className={classes.arrowIcon} />
            ) : (
              <ExpandLessRoundedIcon className={classes.arrowIcon} />
            )}
          </ListItemButton>
          <Collapse in={!contact} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link
                  className={classes.navLink}
                  to="/recentImage/recent-images"
                >
                  New resources
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/images/popular_images">
                  The most popular content
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/search/trending_search">
                  Search trends
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/allBlogs/blogs">
                  Blog
                </Link>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleInformation}>
            <ListItemIcon className={classes.listItemIcon} />
            <ListItem className={classes.title}>INFORMATION</ListItem>
            {information ? (
              <ExpandMoreRoundedIcon className={classes.arrowIcon} />
            ) : (
              <ExpandLessRoundedIcon className={classes.arrowIcon} />
            )}
          </ListItemButton>
          <Collapse in={!information} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/aboutUs">
                  About us
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="#">
                  Sell your content
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/support">
                  Support
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/contact">
                  Contact
                </Link>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleLegal}>
            <ListItemIcon className={classes.listItemIcon} />
            <ListItem className={classes.title}>LEGAL</ListItem>
            {legal ? (
              <ExpandMoreRoundedIcon className={classes.arrowIcon} />
            ) : (
              <ExpandLessRoundedIcon className={classes.arrowIcon} />
            )}
          </ListItemButton>
          <Collapse in={!legal} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/termsConditions">
                  Terms &amp; conditions
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/licenseAgreement">
                  License Agreement
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/copyrightInformation">
                  Copyright information
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link className={classes.navLink} to="/cookiesPolicy">
                  Cookies policy
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      )}
      <Copyright />
    </footer>
  );
};

export default Footer;
