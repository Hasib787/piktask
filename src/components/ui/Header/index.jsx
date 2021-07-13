import {
  Button,
  Container,
  Drawer,
  makeStyles,
  MenuItem,
  MenuList,
  Toolbar
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useRef, useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crownIcon from "../../../assets/icons/crown.svg";
import logo from "../../../assets/logo-back.png";
import CustomPopper from "../CustomPopper";
import DesktopMenu from "./DesktopMenu";
import useStyles from "./Header.styles";

const customStyles = makeStyles({
  menuWrapper: {
    position: "absolute",
    top: "1.8rem",
    left: "2.4rem",
    color: "#FFF",
  },
  closeIconWrapper: {
    marginLeft: "auto",
    padding: "1rem",
  },
  menuIcon: {
    fontSize: "4rem",
    cursor: "pointer",
    color: "#FFF",
  },
});

const Header = () => {
  const classes = useStyles();
  const iconClass = customStyles();

  const [open, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const user = useSelector(state => state.user);
  const anchorRef = useRef(null);

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

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = (e) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(e.target)
    ) {
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

  const handleMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  return (
    <>
      <div className={classes.headerTop}>
        <Container className={classes.topBarContainer}>
          <Toolbar disableGutters className={classes.toolBarContainer}>
            <Button
              disableRipple
              component={Link}
              to="/tutorial"
              className={classes.topBarLink}
            >
              Tutorial
            </Button>
            <Button
              disableRipple
              component={Link}
              to="/start-selling"
              className={classes.topBarLink}
            >
              Start Selling
            </Button>
            <Button
              disableRipple
              component={Link}
              to="#"
              className={classes.topBarLink}
            >
              En
            </Button>
            {user && user?.token ? (
              <div
                className={classes.userAvatarArea}
                onClick={handleToggle}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                ref={anchorRef}
              >
                <AccountCircleIcon className={classes.avatar} />
                <ArrowDropDownIcon className={classes.arrowDown} />
              </div>
            ) : (
              <Button
                className={classes.signupBtn}
                component={Link}
                to="/registration"
              >
                Signup
              </Button>
            )}
          </Toolbar>
        </Container>
      </div>

      {mobileView ? (
        <div className={iconClass.menuWrapper}>
          <MenuIcon onClick={handleMobileMenu} className={iconClass.menuIcon} />
        </div>
      ) : (
        <DesktopMenu />
      )}

      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      >
        <div className={iconClass.closeIconWrapper}>
          <CloseIcon
            onClick={() => setOpenMobileMenu(false)}
            className={iconClass.menuIcon}
          />
        </div>
        <Toolbar disableGutters className={classes.menuWrapper}>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.mobileMenuLogo}
          >
            <img src={logo} alt="Piktask" />
          </Button>

          <MenuList className={classes.navItems}>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/vector">Vector</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/psd">PSD</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/background">Background</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/template">Template</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/pricing">Pricing</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/help">Help</Link>
            </MenuItem>
          </MenuList>

        {user && user.token && (
          <Button
            component={Link}
            disableRipple
            to="/sell-content"
            className={classes.mobileBtn}
            onClick={() => setOpenMobileMenu(false)}
          >
            Sell Your Content
          </Button>
        )}
          <Button
            component={Link}
            disableRipple
            to="/"
            className={classes.mobileBtn}
            onClick={() => setOpenMobileMenu(false)}
          >
            <img src={crownIcon} alt="Crown" />
            Premium
          </Button>
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
