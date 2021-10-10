import {
  Button,
  Container,
  // Menu,
  // MenuItem,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";
// import enterpriseCrownIcon from "../../../../assets/icons/crownEnterpriseIcon.svg";
import SignUpModal from "../../../../pages/Authentication/SignUpModal";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import signInIcon from "../../../../assets/icons/signInIcon.svg";
import React, { useEffect, useRef, useState } from "react";
// import crownIcon from "../../../../assets/icons/crown.svg";
import logo from "../../../../assets/Logo/piktask-6.png";
import { Link, NavLink } from "react-router-dom";
import CustomPopper from "../../CustomPopper";
import useStyles from "./DesktopMenu.styles";
import { useSelector } from "react-redux";

const DesktopMenu = ({ history }) => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const user = useSelector((state) => state.user);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history]);

  const handleChange = (event, index) => {
    setValue(index);
  };

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

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleHoverMenu = (event) => {
  //   if (anchorEl !== event.currentTarget) {
  //     setAnchorEl(event.currentTarget);
  //   }
  //   // setAnchorEl(event.currentTarget);/
  // };

  // const handleCloseSubMenu = () => {
  //   setAnchorEl(null);
  // };

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
              component={NavLink}
              to={`/category/sports`}
              label="Sports"

              // aria-owns={anchorEl ? "Sports" : undefined}
              // aria-haspopup="true"
              // onClick={handleHoverMenu}
              // onMouseOver={handleHoverMenu}
            />

            {/* <Menu
              id="Sports"
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleCloseSubMenu}
              MenuListProps={{ onMouseLeave: handleCloseSubMenu }}
            >
              <div className={classes.subMenuItem}>
                <MenuItem onClick={handleCloseSubMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseSubMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseSubMenu}>Logout</MenuItem>
              </div>
            </Menu> */}

            <Tab
              className={classes.menuItem}
              disableRipple
              component={NavLink}
              to="/category/travel"
              label="Travel"

              // aria-owns={anchorEl ? "Travel" : undefined}
              // aria-haspopup="true"
              // onClick={handleHoverMenu}
              // onMouseOver={handleHoverMenu}
            />

            {/* <Menu
              id="Travel"
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleCloseSubMenu}
              MenuListProps={{ onMouseLeave: handleCloseSubMenu }}
            >
              <div className={classes.subMenuItem}>
                <MenuItem onClick={handleCloseSubMenu}>Profile account</MenuItem>
                <MenuItem onClick={handleCloseSubMenu}>My Favorite</MenuItem>
                <MenuItem onClick={handleCloseSubMenu}>Downloads</MenuItem>
              </div>
            </Menu> */}

            <Tab
              className={classes.menuItem}
              disableRipple
              component={NavLink}
              to="/category/education"
              label="Education"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={NavLink}
              to="/category/music"
              label="Music"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={NavLink}
              to="/category/animal"
              label="Animal"
            />
            {/* <ArrowDropDownIcon /> */}
          </Tabs>
          <Toolbar disableGutters className={classes.toolBarContainer}>
            {user?.token ? (
              <Button
                className={classes.sellContentBtn}
                component={Link}
                to="/contributor/dashboard"
              >
                Sell Your Content
              </Button>
            ) : (
              <Button
                className={classes.sellContentBtn}
                component={Link}
                to="/contributor/join"
              >
                Sell Your Content
              </Button>
            )}

            {/* <Button disableRipple className={classes.enterprise}>
              <img
                className={classes.crownIcon}
                src={enterpriseCrownIcon}
                alt="Crown"
              />
              Enterprise
            </Button> */}

            {/* <Button className={classes.premium}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Premium
            </Button> */}

            {user && user?.isLogged ? (
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
                    src={user?.avatar}
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
                onClick={() => setOpenAuthModal(true)}
              >
                <img
                  className={classes.crownIcon}
                  src={signInIcon}
                  alt="Crown"
                />
                Sign In
              </Button>
            )}
          </Toolbar>
        </Toolbar>
      </Container>

      <CustomPopper
        open={open}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
      />

      <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
    </>
  );
};

export default DesktopMenu;
