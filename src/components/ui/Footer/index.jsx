import { Container, Grid, List, ListItem, Typography } from "@material-ui/core";
import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import Copyright from "./CopyRight";
import { useStyles } from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [contact, setContact] = React.useState(true);
  const [information, setInformation] = React.useState(true);
  const [legal, setLegal] = React.useState(true);

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
        {
          /* Mobile view */
        }(
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="CATEGORIES" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Graphic Template" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Social Media Banner" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Logo Mockup" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Abstract Background" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleContact}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="CONTENT" />
              {contact ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={contact} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="New resources" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="The most popular content" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Search trends" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleInformation}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="INFORMATION" />
              {information ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={information} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="About us" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Sell your content" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Support" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleLegal}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="LEGAL" />
              {legal ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={legal} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary=" Terms &amp; conditions" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="License Agreement" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Copyright information" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemText primary="Cookies policy" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        )
      )}
      <Copyright />
    </footer>
  );
};

export default Footer;
