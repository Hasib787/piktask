import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./Sidebar.styles";

const Sidebar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/admin/dashboard" && value !== 0) {
      setValue(0);
      return;
    } else if (window.location.pathname === "/admin/upload" && value !== 1) {
      setValue(1);
      return;
    } else if (window.location.pathname === "/admin/pending" && value !== 2) {
      setValue(2);
      return;
    } else if (window.location.pathname === "/admin/revision" && value !== 3) {
      setValue(3);
      return;
    } else if (window.location.pathname === "/admin/reject" && value !== 4) {
      setValue(4);
      return;
    } else if (window.location.pathname === "/admin/publish" && value !== 5) {
      setValue(5);
      return;
    } else if (window.location.pathname === "/admin/earnings" && value !== 6) {
      setValue(6);
      return;
    } else if (window.location.pathname === "/admin/plan" && value !== 7) {
      setValue(7);
      return;
    } else if (window.location.pathname === "/admin/guidline" && value !== 8) {
      setValue(8);
      return;
    }
  }, [value]);

  const handleChange = (e, index) => {
    setValue(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <aside className={classes.sidebarWrapper}>
      <List
        component="nav"
        aria-labelledby="nested-sidebar-nav"
        className={classes.root}
      >
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selected,
          }}
          component={Link}
          to="/admin/dashboard"
          selected
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selected,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/upload"
        >
          <ListItemText primary="Upload File" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className={classes.submenuContainer}
          >
            <ListItem
              component={Link}
              to="/admin/submit"
              className={classes.nested}
            >
              <ListItemText primary="Submit File(50)" />
            </ListItem>
            <ListItem
              component={Link}
              to="/admin/revision"
              className={classes.nested}
            >
              <ListItemText primary="Under Revision(30)" />
            </ListItem>
            <ListItem
              component={Link}
              to="/admin/reject"
              className={classes.nested}
            >
              <ListItemText primary="Reject File(6)" />
            </ListItem>
            <ListItem
              component={Link}
              to="/admin/publish"
              className={classes.nested}
            >
              <ListItemText primary="Publish(24)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedMenu,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/earnings"
        >
          <ListItemText primary="Earning Management" />
        </ListItem>
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedMenu,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/plan"
        >
          <ListItemText primary="Contributor Price Plan" />
        </ListItem>
        <ListItem
          classes={{
            gutters: classes.gutters,
            selected: classes.selectedMenu,
          }}
          onClick={handleClick}
          component={Link}
          to="/admin/guidline"
        >
          <ListItemText primary="Guidline" />
        </ListItem>
      </List>
    </aside>
  );
};

export default Sidebar;
