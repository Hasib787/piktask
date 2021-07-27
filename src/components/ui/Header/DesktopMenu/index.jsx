import {
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authImage from "../../../../assets/auth.png";
import crownIcon from "../../../../assets/icons/crown.svg";
import logoWhite from "../../../../assets/logo-white.png";
import logo from "../../../../assets/piktaskLogo.png";
import Spacing from "../../../Spacing";
import useStyles from "./DesktopMenu.styles";

const DesktopMenu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const user = useSelector((state) => state.user);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
  };

  const handleChange = (event, index) => {
    setValue(index);
  };

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Container className={classes.container}>
        <Toolbar disableGutters className={classes.headerBottomToolbar}>
          <Button
            component={Link}
            to="/"
            className={classes.logoWrapper}
            disableRipple
          >
            <img src={logo} className={classes.logo} alt="Dev" />
          </Button>

          <Tabs
            value={value}
            className={classes.menuTab}
            classes={{ indicator: classes.menuUnderline }}
            onChange={handleChange}
            aria-label="main navigation"
          >
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/vector"
              label="Vector"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/photos"
              label="Photos"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/psd"
              label="PSD"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/png"
              label="PNG"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/category"
              label="Category"
            />
            {/* <ArrowDropDownIcon /> */}
          </Tabs>
          <Toolbar disableGutters className={classes.toolBarContainer}>
            {user && user?.token && (
              <Button
                className={classes.sellContentBtn}
                component={Link}
                to="/sell-content"
              >
                Sell Your Content
              </Button>
            )}

            <Button className={classes.enterprise}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Enterprise
            </Button>
            <Button className={classes.premium}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Premium
            </Button>
            {user && user?.token ? (
              <div
                className={classes.userAvatarArea}
                onClick={handleToggle}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                ref={anchorRef}
              >
                {user && user?.avatar ? (
                  <img
                    className={classes.avatar}
                    src={user.avatar}
                    alt="UserPhoto"
                  />
                ) : (
                  <AccountCircleIcon className={classes.avatar} />
                )}
                <ArrowDropDownIcon className={classes.arrowDown} />
              </div>
            ) : (
              <Button
                className={classes.signInBtn}
                // component={Link}
                // to="/registration"
                onClick={() => setOpenAuthModal(true)}
              >
                Sign In
              </Button>
            )}
          </Toolbar>
        </Toolbar>
      </Container>

      <Dialog
        open={true}
        // open={openAuthModal}
        onClose={handleCloseAuthModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backgroundColor: "rgb(20 51 64 / 77%)" }}
        maxWidth="md"
      >
        <DialogContent style={{ padding: 0 }}>
          <Grid container>
            <Grid item sm={5}>
              <div className={classes.authLeft}>
                <img
                  className={classes.authLogo}
                  src={logoWhite}
                  alt="Piktask"
                />
                <Typography>Enjoy Free Download Now!</Typography>
                <Typography>*Get 50% OFF Discount for Premium Plan</Typography>
                <Typography>*Download 6 Images for Free Everyday</Typography>
                <Typography>
                  *2,600,000+ Images to energize your Design
                </Typography>

                <Spacing space={{ height: 30 }} />

                <img src={authImage} alt="Piktask" />
              </div>
            </Grid>
            <Grid item sm={7}>
              <div className={classes.authRight}></div>
            </Grid>
          </Grid>
        </DialogContent>

        {/* <DialogActions>
          <Button onClick={handleCloseAuthModal}>Disagree</Button>
          <Button onClick={handleCloseAuthModal} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

export default DesktopMenu;
