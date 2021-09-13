import { Button, Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./Sidebar.styles";
import logo from "../../../assets/Logo/piktask-6.png";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import EuroIcon from '@material-ui/icons/Euro';

const Sidebar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/admin/dashboard" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/admin/upload" && value !== 1) {
      setOpen(true);
      setValue(1);
      setSelectedItem(1);
    } else if (window.location.pathname === "/admin/pending" && value !== 2) {
      setValue(1);
      setSelectedItem(2);
    } else if (window.location.pathname === "/admin/revision" && value !== 3) {
      setOpen(true);
      setValue(1);
      setSelectedItem(3);
    } else if (window.location.pathname === "/admin/reject" && value !== 4) {
      setOpen(true);
      setValue(1);
      setSelectedItem(4);
    } else if (window.location.pathname === "/admin/publish" && value !== 5) {
      setOpen(true);
      setValue(1);
      setSelectedItem(5);
    } else if (window.location.pathname === "/admin/earnings" && value !== 6) {
      setValue(6);
    } else if (window.location.pathname === "/admin/plan" && value !== 7) {
      setValue(7);
    } else if (window.location.pathname === "/admin/guidline" && value !== 8) {
      setValue(8);
    }
  }, [value]);

  // const handleChange = (e, index) => {
  //   setValue(index);
  // };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <aside className={classes.sidebarWrapper}>
      <div className={classes.logoWrapper}>
        <Button
          component={Link}
          to="/"
          // className={classes.logoWrapper}
          disableRipple
        >
          <img src={logo} className={classes.sidebarLogo} alt="Piktask Logo" />
        </Button>
      </div>
      <List component="nav" aria-labelledby="nested-sidebar-nav">
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedItem,
          }}
          component={Link}
          to="/admin/dashboard"
          selected={value === 0}
        >
          <DashboardIcon />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedItem,
          }}
          className={classes.dropdownMenu}
          onClick={handleClick}
          component={Link}
          to="/admin/upload"
          selected={value === 1}
        >
          <CloudUploadIcon />
          <ListItemText primary="Upload File" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className={classes.submenuContainer}
          >
            {/* <ListItem
              component={Link}
              to="/admin/submit"
              className={classes.nested}
              selected={value === 0}
            >
              <ListItemText primary="Submit File(50)" />
            </ListItem> */}
            <ListItem
              component={Link}
              to="/admin/revision"
              className={classes.nested}
              selected={value === 1 && selectedItem === 3}
            >
              <ListItemText primary="Under Revision(30)" />
            </ListItem>
            <ListItem
              component={Link}
              to="/admin/reject"
              className={classes.nested}
              selected={value === 1 && selectedItem === 4}
            >
              <ListItemText primary="Reject File(6)" />
            </ListItem>
            <ListItem
              component={Link}
              to="/admin/publish"
              className={classes.nested}
              selected={value === 1 && selectedItem === 5}
            >
              <ListItemText primary="Publish(24)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedItem,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/earnings"
          selected={value === 6}
        >
          <EuroIcon />
          <ListItemText primary="Earning Management" />
        </ListItem>
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedItem,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/plan"
          selected={value === 7}
        >
          <CardMembershipIcon />
          <ListItemText primary="Contributor Price Plan" />
        </ListItem>
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedItem,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/guidline"
          selected={value === 8}
        >
          <HelpOutlineIcon />
          <ListItemText primary="Guidline" />
        </ListItem>
      </List>
    </aside>
  );
};

export default Sidebar;
