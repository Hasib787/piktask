import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useStyles from "./UserSideBar.style";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
// import DevicesIcon from "@material-ui/icons/Devices";
import GetAppIcon from "@material-ui/icons/GetApp";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import authorPhoto from "../../../assets/author.png";

const UserSideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [value, setValue] = useState(0);
  // const [open, setOpen] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/user/userProfile" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/user/favorites" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/user/downloads" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/user/following" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/user/devices" && value !== 4) {
      setValue(4);
    } else if (
      window.location.pathname === "/user/mySubscription" &&
      value !== 5
    ) {
      setValue(5);
    }
  }, [value]);

  const handleSignout = () => {
    if (user && user?.token) {
      toast.success("You successfully signed out");
      user.isLogged = false;
      history.push("/");
      localStorage.clear();

      dispatch({
        type: "LOGOUT",
        payload: {
          email: "",
          token: "",
        },
      });
    }
  };

  return (
    <>
      <Card className={classes.userProfile}>
        <div className={classes.userProfileContent}>
          {user?.avatar ? (
            <div className={classes.profileImage}>
              <img src={user?.avatar} alt="UserProfile" />
            </div>
          ) : (
            <div className={classes.profileImage}>
              <img src={authorPhoto} alt="UserProfile" />
            </div>
          )}
          <div className={classes.profileInfo}>
            <Typography variant="h2">{user?.username}</Typography>
            <Typography>{user?.email}</Typography>
          </div>
        </div>
      </Card>
      <Card className={classes.userMenuList}>
        <CardContent>
          <List component="nav" aria-labelledby="nested-sidebar-nav">
            <ListItem
              className={classes.userMenuItem}
              classes={{ selected: classes.selectedItem }}
              component={Link}
              to="/user/userProfile"
              selected={value === 0}
            >
              <PersonOutlineIcon />
              <span>Edit Profile</span>
            </ListItem>

            <ListItem
              className={classes.userMenuItem}
              classes={{ selected: classes.selectedItem }}
              component={Link}
              to="/user/favorites"
              selected={value === 1}
            >
              <FavoriteBorderIcon />
              <span>Favorite</span>
            </ListItem>

            <ListItem
              className={classes.userMenuItem}
              classes={{ selected: classes.selectedItem }}
              component={Link}
              to="/user/downloads"
              selected={value === 2}
            >
              <GetAppIcon />
              <span>Downloads(0/10)</span>
            </ListItem>

            <ListItem
              className={classes.userMenuItem}
              classes={{ selected: classes.selectedItem }}
              component={Link}
              to="/user/following"
              selected={value === 3}
            >
              <PeopleOutlineIcon />
              <span>Following</span>
            </ListItem>

            {/* <ListItem
              className={classes.userMenuItem}
              classes={{ selected: classes.selectedItem }}
              component={Link}
              to="/user/devices"
              selected={value === 4}
            >
              <DevicesIcon />
              <span>Devices</span>
            </ListItem>

            <ListItem
              className={classes.userMenuItem}
              classes={{ selected: classes.selectedItem }}
              component={Link}
              to="/user/mySubscription"
              selected={value === 5}
            >
              <span>My Subscription</span>
            </ListItem> */}

            <ListItem className={classes.userMenuItem} onClick={handleSignout}>
              <PowerSettingsNewIcon />
              <span>Logout</span>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card className={classes.closedAccount}>
        <CardContent component={Link} to="#!">
          <Typography>Close My Account</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserSideBar;
