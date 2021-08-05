import {
  AppBar,
  Button,
  Container,
  Drawer,
  makeStyles,
  Grid,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../../assets/author.png";
import crownIcon from "../../../assets/icons/crown.svg";
import logo from "../../../assets/piktaskLogo.svg";
import CustomPopper from "../../../components/ui/CustomPopper";
import useStyles from "./AdminHeader.styles";
import { useSelector } from "react-redux";

const customStyles = makeStyles({
  menuWrapper: {
    top: "1.8rem",
    marginTop: 20,
    color: "#FFF",
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 425px)": {
      marginTop: 10,
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
});

const AdminHeader = () => {
  const classes = useStyles();
  const iconClass = customStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const user = useSelector((state) => state.user);

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
  const handleMobileMenu = () => {
    setOpenMobileMenu(true);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appbarHeader}>
        <div className={classes.fullwidth}>
          <Container classes={{ root: classes.root }}>
            <Grid
              container
              spacing={2}
              classes={{ container: classes.container }}
              alignItems="center"
            >
              <MenuIcon
                onClick={handleMobileMenu}
                className={classes.menuIcon}
              />
              <Grid item xs={2}>
                <Link to="/" className={classes.adminLogoLink}>
                  <img className={classes.adminLogo} src={logo} alt="Piktask" />
                </Link>
              </Grid>
              
              <Grid item xs={9} classes={{ item: classes.item }}>
                <div className={classes.headerInfo}>
                  <Typography className={classes.earningAmount} variant="h4">
                    UnpaiD Earning : $0.20
                  </Typography>
                  <Button
                    className={classes.uploadBtn}
                    component={Link}
                    to="/admin/upload"
                  >
                    <img
                      className={classes.ButtoncrownIcon}
                      src={crownIcon}
                      alt="Upload"
                    />
                    Upload
                  </Button>

                  <div
                    className={classes.userProfile}
                    onClick={handleToggle}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    ref={anchorRef}
                  >
                    {user && user?.avatar ? (
                      <img
                        className={classes.adminPhoto}
                        src={user?.avatar}
                        alt="UserPhoto"
                      />
                    ) : (
                      <AccountCircleIcon className={classes.avatar} />
                    )}
                    <Typography className={classes.userName} variant="h4">
                      {user ? user.username : "Design Studio"}
                    </Typography>
                    <ArrowDropDownIcon className={classes.arrowDown} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

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
            {user && user?.token ? (
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
                <Button
                  className={classes.loginBtn}
                  component={Link}
                  to="/login"
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
          </div>
          <Toolbar disableGutters className={classes.menuWrapper}>
            <MenuList className={classes.navItems}>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/vector">Vectors</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/photos">Photos</Link>
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
                <Link to="/png image">PNG Image</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/illustration">Illustration</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/templates">Templates</Link>
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
                <Link to="/3d models">3d Models</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/sell your content">Sell your content</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/sell your content">Pricing</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/sell your content">Personal</Link>
              </MenuItem>
              <MenuItem
                onClick={() => setOpenMobileMenu(false)}
                classes={{ selected: classes.selected }}
              >
                <Link to="/sell your content">Team</Link>
              </MenuItem>
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
      </AppBar>
    </>
  );
};

export default AdminHeader;
