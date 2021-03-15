import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
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
    console.log("Change Func", index);
    setValue(index);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleSubmenus = (e) => {
    if (open === 2) {
      return;
    }
    setOpen(!open);
  };

  console.log("Value", value);

  return (
    <aside className={classes.sidebarWrapper}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        orientation="vertical"
        classes={{ indicator: classes.indicator }}
      >
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/dashboard"
          label="Dashboard"
          //   aria-owns={anchorEl ? "simple-menu" : undefined}
          //   aria-haspopup={anchorEl ? true : undefined}
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/upload"
          label="Upload Files"
          icon={
            <ArrowDropDownIcon
              fontSize="large"
              className={classes.arrowIcon}
              onClick={(e) => handleSubmenus(e)}
            />
          }
        />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="a" disablePadding>
            <ListItem button>
              <ListItemText primary="Starred" />
              <ListItemText primary="Pending" />
              <ListItemText primary="Submitted" />
              <ListItemText primary="Publish" />
            </ListItem>
          </List>
        </Collapse>
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/pending"
          label="Pending File"
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/revision"
          label="Under Revision"
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/reject"
          label="Reject File"
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/publish"
          label="Publish"
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/earnings"
          label="Earning Management"
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/plan"
          label="Contributor Price Plan"
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          className={classes.tabMenu}
          component={Link}
          to="/admin/guidline"
          label="Guidline"
        />
      </Tabs>

      {/* <List className={classes.listNavs}>
        <ListItem
          onClick={(e) => setSelectedItem(0)}
          selected={selectedItem === 0}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/dashboard">Dashboard</Link>
        </ListItem>
        <ListItem
          onClick={(e) => {
            setSelectedItem(1);
          }}
          selected={selectedItem === 1}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/upload">Upload Files</Link>

          <Collapse in={openSubmenus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </ListItem>

        <ListItem
          onClick={(e) => setSelectedItem(2)}
          selected={selectedItem === 2}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/pending">Pending File</Link>
        </ListItem>
        <ListItem
          selected={selectedItem}
          onClick={(e) => handleListItemClick(3)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/revision">Under Revision</Link>
        </ListItem>
        <ListItem
          selected={selectedItem}
          onClick={(e) => handleListItemClick(4)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/reject">Reject File</Link>
        </ListItem>
        <ListItem
          selected={selectedItem}
          onClick={(e) => handleListItemClick(5)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/publish">Publish</Link>
        </ListItem>
        <ListItem
          selected={selectedItem}
          onClick={(e) => handleListItemClick(6)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/earnings">Earning Management</Link>
        </ListItem>
        <ListItem
          selected={selectedItem}
          onClick={(e) => handleListItemClick(7)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/plan">Contributor Price Plan</Link>
        </ListItem>
        <ListItem
          selected={selectedItem === 8}
          onClick={(e) => handleListItemClick(8)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/guidline">Guidline</Link>
        </ListItem>
        <ListItem
          selected={selectedItem === 9}
          onClick={(e) => handleListItemClick(9)}
          classes={{ selected: classes.selected }}
        >
          <Link to="/admin/stats">Stats</Link>
        </ListItem> */}

      {/* {menuItems.length && menuItems.map(menu => (
                <ListItem 
                    key={menu.id} 
                    selected={selectedItem === menu.id} 
                    onClick={e => handleListItemClick(menu.id)}
                    classes={{selected: classes.selected}}
                    >
                    <Link to={menu.link}>{menu.name}</Link>
                </ListItem>
            ))} */}
      {/* </List> */}
    </aside>
  );
};

export default Sidebar;
