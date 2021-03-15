import {
  AppBar,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crownIcon from "../../../../assets/icons/crown.svg";
import logo from "../../../../assets/logo-back.png";
import useStyles from "./DesktopMenu.styles";

const DesktopMenu = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const user = useSelector((state) => state.user);

  const handleChange = (event: object, index: number): void => {
    setValue(index);
  };

  return (
    <div className={classes.headerBottom}>
      <AppBar position="static">
        <Container className={classes.container}>
          <Toolbar disableGutters className={classes.headerBottomToolbar}>
            <Button
              component={Link}
              to="/"
              className={classes.logoWrapper}
              disableRipple
            >
              <img src={logo} className={"classes.logo"} alt="Dev" />
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
                to="/categories"
                label="Categories"
              />
              <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/vector"
                label="vector"
              />
              <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/psd"
                label="Psd"
              />
              <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/background"
                label="Background"
              />
              <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/template"
                label="Template"
              />
              <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/png-images"
                label="Png images"
              />
              {/* <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/pricing"
                label="Pricing"
              />
              <Tab
                className={classes.menuItem}
                disableRipple
                component={Link}
                to="/help"
                label="Help"
              /> */}
            </Tabs>
            {user && user.token && (
              <Button
                className={classes.sellContentBtn}
                component={Link}
                to="/sell-content"
              >
                Sell Your Content
              </Button>
            )}
            <Button className={classes.premium}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Premium
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default DesktopMenu;
