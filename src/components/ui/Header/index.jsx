import {
  AppBar,
  Button,
  Container,
  Drawer,
  makeStyles,
  MenuItem,
  MenuList,
  Toolbar,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo/piktask-6.png";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import CustomPopper from "../CustomPopper";
import { useSelector } from "react-redux";
import DesktopMenu from "./DesktopMenu";
import useStyles from "./Header.styles";

const customStyles = makeStyles({
  menuWrapper: {
    top: "1.8rem",
    marginTop: 10,
    color: "#FFF",
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 577px)": {
      marginTop: 5,
    },
  },
  closeIconWrapper: {
    backgroundColor: "#063B52",
    padding: "1rem",
    boxShadow: "0px 0px 50px 50px #042C3D",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: "4rem",
    cursor: "pointer",
    color: "#FFF",

    "@media (max-width: 577px)": {
      fontSize: "3rem",
    },
  },
  closeIcon: {
    fontSize: "3rem",
    cursor: "pointer",
    color: "#FFF",
  },
});

const Header = () => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const location = useLocation();
  const iconClass = customStyles();
  const user = useSelector((state) => state.user);

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleToggle = () => { setOpen((prevState) => !prevState); };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  const handleMobileMenu = () => { setOpenMobileMenu(true); };

  return (
    <>
      <div className={classes.headerBottom}>
        <AppBar position="static">
          {mobileView ? (
            <Container>
              <div className={iconClass.menuWrapper}>
                <div>
                  <Button
                    component={Link}
                    to="/"
                    className={classes.headerLogo}
                    disableRipple
                  >
                    <img src={logo} className={classes.logo} alt="Dev" />
                  </Button>
                </div>
                <div>
                  <div className={classes.menuButton}>
                    {user?.isLogged ? (
                      <div
                        className={classes.userAvatarArea}
                        onClick={handleToggle}
                        aria-controls={open ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        ref={anchorRef}
                      >
                        {user?.isLogged && user?.avatar && user?.avatar !== "null" ? (
                          <img
                            className={classes.avatar}
                            src={user?.avatar}
                            alt="UserPhoto"
                          />
                        ) : (
                          <AccountCircleIcon className={classes.avatar} />
                        )}
                        <ArrowDropDownIcon className={classes.arrowDown} />
                      </div>
                    ) : (
                      <div>
                        <Button
                          className={classes.loginBtn}
                          component={Link}
                          to={`/login?url=${location.pathname}`}
                        >
                          Login
                        </Button>
                        <Button
                          className={classes.signUpBtn}
                          component={Link}
                          to="/registration"
                        >
                          Sign Up
                        </Button>
                      </div>
                    )}
                    <MenuIcon
                      onClick={handleMobileMenu}
                      className={iconClass.menuIcon}
                    />
                  </div>
                </div>
              </div>
            </Container>
          ) : (
            <DesktopMenu />
          )}
        </AppBar>
      </div>
      <Drawer
        anchor="right"
        classes={{ paper: classes.paper }}
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      >
        <div className={iconClass.closeIconWrapper}>
          <CloseIcon
            onClick={() => setOpenMobileMenu(false)}
            className={iconClass.closeIcon}
          />
          {user && user?.isLogged && user?.role === "user" ? (
            <Button
              component={Link}
              to="/"
              className={classes.logoWrapper}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="Dev" />
            </Button>
          ) : (
            <div>
              <Button className={classes.loginBtn} component={Link} to="/login">
                Login
              </Button>
              <Button
                className={classes.signUpBtn}
                component={Link}
                to="/registration"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
        <Toolbar disableGutters className={classes.wrapperMenu}>
          <MenuList className={classes.navItems}>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/category/business-card-mockup">Business Card Mockup</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/category/social-media-banner">Social Media Banner</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/category/game">Game</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/category/logo-mockup">Logo Mockup</Link>
            </MenuItem>

            {user?.isLogged && user?.role === "contributor" ? (
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/contributor/dashboard">Sell your content</Link>
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/contributor/join">Join Now</Link>
              </MenuItem>
            )}
          </MenuList>

          {/* <Button
            component={Link}
            disableRipple
            to="/"
            className={classes.mobileBtn}
            onClick={() => setOpenMobileMenu(false)}
          >
            <img src={crownIcon} alt="Crown" />
            Premium
          </Button> */}
        </Toolbar>
      </Drawer>
      <CustomPopper
        open={open}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
      />
    </>
  );
};
export default Header;
