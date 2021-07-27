import {
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crownIcon from "../../../../assets/icons/crown.svg";
import enterpriseCrownIcon from "../../../../assets/icons/crownEnterpriseIcon.svg";
import signInIcon from "../../../../assets/icons/signInIcon.svg";
import logo from "../../../../assets/piktaskLogo.svg";
import useStyles from "./DesktopMenu.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomPopper from "../../CustomPopper";

const DesktopMenu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const user = useSelector(state => state.user);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

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
            <Button className={classes.enterprise}>
              <img className={classes.crownIcon} src={enterpriseCrownIcon} alt="Crown" />
              Enterprise
            </Button>
            <Button className={classes.premium}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Premium
            </Button>
            {
              user && user?.token ? (
                <div
                  className={classes.userAvatarArea}
                  onClick={handleToggle}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  ref={anchorRef}
                >
                  {
                    user && user?.avatar ? (
                      <img
                        className={classes.avatar}
                        src={user.avatar}
                        alt="UserPhoto"
                      />
                    ) : (
                      <AccountCircleIcon className={classes.avatar} />
                    )
                  }
                  <ArrowDropDownIcon className={classes.arrowDown} />
                </div>
              ) : (
                <Button
                  className={classes.signInBtn}
                  component={Link}
                  to="/registration"
                >
                  <img className={classes.crownIcon} src={signInIcon} alt="Crown" />
                  Sign In
                </Button>
              )
            }
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
    </> 
  );
};

export default DesktopMenu;
