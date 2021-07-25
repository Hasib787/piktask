import { Button, MenuItem, MenuList, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crownIcon from "../../../../assets/icons/crown.svg";
import logo from "../../../../assets/logo.svg";
import useStyles from "./MobileMenu.styles";

const MobileMenu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const user = useSelector((state) => state.user);

  const handleChange = (event, index) => {
    setValue(index);
  };

  return (
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
        <MenuItem classes={{ selected: classes.selected }}>
          <Link to="/vector">Vector</Link>
        </MenuItem>
        <MenuItem classes={{ selected: classes.selected }}>
          <Link to="/psd">PSD</Link>
        </MenuItem>
        <MenuItem classes={{ selected: classes.selected }}>
          <Link to="/background">Background</Link>
        </MenuItem>
        <MenuItem classes={{ selected: classes.selected }}>
          <Link to="/template">Template</Link>
        </MenuItem>
        <MenuItem classes={{ selected: classes.selected }}>
          <Link to="/pricing">Pricing</Link>
        </MenuItem>
        <MenuItem classes={{ selected: classes.selected }}>
          <Link to="/help">Help</Link>
        </MenuItem>
      </MenuList>

      {user && user.token && (
        <Button
          component={Link}
          to="/sell-content"
          className={classes.mobileBtn}
        >
          Sell Your Content
        </Button>
      )}

      <Button component={Link} to="/" className={classes.mobileBtn}>
        <img src={crownIcon} alt="Crown" />
        Premium
      </Button>
    </Toolbar>
  );
};

export default MobileMenu;
