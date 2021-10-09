import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  TextField,
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
import GetAppIcon from "@material-ui/icons/GetApp";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import authorPhoto from "../../../assets/author.png";
import axios from "axios";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`authentication-tabpanel-${index}`}
      aria-labelledby={`authentication-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `user-authentication-tab-${index}`,
    "aria-controls": `user-authentication-tabpanel-${index}`,
  };
}

const UserSideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);

  const [value, setValue] = useState(0);
  const [alartDialog, setAlartDialog] = useState(false);
  const [downloadCount, setDownloadCount] = useState("");
  const [downloadLimit, setDownloadLimit] = useState("");
  const [isLoading, setLoading] = useState(false);

  //mobile responsive
  const [menuSate, setMenuSate] = useState({ mobileView: false });
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

  useEffect(() => {
    if (user?.token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/profile/download_count`, {
          headers: { Authorization: user?.token },
        })
        .then(({data}) => {
          if (data.status) {
            setDownloadCount(data?.downloads);
            setDownloadLimit(data?.daily_limit - data?.downloads);
            setLoading(false);
          }
        })
        .catch((error) => { console.log(error);});
    }
  }, [user?.token]);

  //close account modal
  const handleDialogOpen = () => {
    setAlartDialog(true);
  };
  const handleDialogClose = () => {
    setAlartDialog(false);
  };


  const handleChangeTab = () => {
    return tabIndex === 0 ? setTabIndex(1) : tabIndex === 1 && setTabIndex(0);
  };

  useEffect(() => {
    if (window.location.pathname === "/user/profile" && value !== 0) {
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
      window.location.pathname === "/user/subscription" &&
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

  const handleCloseAccount = (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/user`;
    axios
      .delete(URL, {
        headers: { Authorization: user.token },
        data: { password: password },
      })
      .then((res) => {
        console.log("res", res);
        if (res.status) {
          toast.success("Your account are successfully deleted");
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
      })
      .catch((error) => {
        toast.error(error.response.data?.message);
      });
  };

  return (
    <>
      {mobileView ? (
        <div>
          <Button component={Link} to="/user/profile">
            <PersonOutlineIcon />
          </Button>
          <Button component={Link} to="/user/favorites">
            <FavoriteBorderIcon />
          </Button>
          <Button component={Link} to="/user/downloads">
            <GetAppIcon />
          </Button>
          <Button component={Link} to="/user/following">
            <PeopleOutlineIcon />
          </Button>
        </div>
      ) : (
        <>
          <Card className={classes.userProfile}>
            <div className={classes.userProfileContent}>
              <div className={classes.profileImage}>
                {user?.avatar ? (
                  <img src={user?.avatar} alt="UserProfile" />
                ) : (
                  <img src={authorPhoto} alt="UserProfile" />
                )}
                <div className={classes.profileInfo}>
                  <Typography variant="h2">{user?.username}</Typography>
                  <Typography>{user?.email}</Typography>
                </div>
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
                  to="/user/profile"
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
                  <span>Favourite</span>
                </ListItem>

                <ListItem
                  className={classes.userMenuItem}
                  classes={{ selected: classes.selectedItem }}
                  component={Link}
                  to="/user/downloads"
                  selected={value === 2}
                >
                  <GetAppIcon />
                  <span>Downloads({downloadCount}/{downloadLimit})</span>
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
              to="/user/subscription"
              selected={value === 5}
            >
              <span>My Subscription</span>
            </ListItem> */}

                <ListItem
                  className={classes.userMenuItem}
                  onClick={handleSignout}
                >
                  <PowerSettingsNewIcon />
                  <span>Logout</span>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card className={classes.closedAccount}>
            <CardContent>
              <Typography onClick={handleDialogOpen}>
                Close My Account
              </Typography>
            </CardContent>
            {/* close account modal */}
            <Dialog
              className={classes.closeAccountDialog}
              open={alartDialog}
              onClose={handleDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <TabPanel {...a11yProps(0)} value={tabIndex} index={0}>
                <DialogTitle className={classes.closeAccountTitle}>
                  {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Note that you will close your Piktask accounts! Your premium
                    subscription will also be canceled with no refund.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleDialogClose}
                    className={classes.keepAccountBtn}
                    autoFocus
                  >
                    keep Account
                  </Button>
                  {user.signupBy !== "email" ? (
                    <Button
                      onClick={handleCloseAccount}
                      className={classes.closeAccountBtn}
                      autoFocus
                    >
                      Close Account
                    </Button>
                  ) : (
                    <Button
                      onClick={handleChangeTab}
                      className={classes.closeAccountBtn}
                      autoFocus
                    >
                      Close Account
                    </Button>
                  )}
                </DialogActions>
              </TabPanel>

              <TabPanel {...a11yProps(1)} value={tabIndex} index={1}>
                <div style={{ padding: "2rem", width: "60rem" }}>
                  <DialogTitle className={classes.closeAccountsTitle}>
                    {"Are you sure?"}
                  </DialogTitle>
                  <form onSubmit={handleCloseAccount}>
                    <TextField
                      className={classes.passwordField}
                      fullWidth
                      variant="outlined"
                      label="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <DialogActions>
                      <Button
                        onClick={handleDialogClose}
                        className={classes.keepAccountBtn}
                        autoFocus
                      >
                        keep Account
                      </Button>
                      <Button
                        className={classes.closeAccountBtn}
                        autoFocus
                        type="submit"
                      >
                        Close Account
                      </Button>
                    </DialogActions>
                    {/* <CustomBtn type="submit" text="Sign In" color="green" /> */}
                  </form>
                </div>
              </TabPanel>
            </Dialog>

            {/* <Dialog
              className={classes.closeAccountDialog}
              open={deleteAccountDialog}
              onClose={handleDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {/* <TabPanel  {...a11yProps(0)} value={tabIndex} index={0}> */}
            {/* <DialogTitle className={classes.closeAccountTitle}>
                  {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                <div className={classes.passwordField}>
                    <InputField
                      label="Password"
                      type={passwordValue ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <img
                      src={lockIcon}
                      alt="Show or hide password"
                      onClick={handleShowHidePassword}
                    />
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleCloseModalClose}
                    className={classes.keepAccountBtn}
                    autoFocus
                  >
                    keep Account
                  </Button>
                  <Button
                    onClick={handleChangeTab}
                    className={classes.closeAccountBtn}
                    autoFocus
                  >
                    Close Account
                  </Button>
                </DialogActions>
                </Dialog> */}
          </Card>
        </>
      )}
    </>
  );
};

export default UserSideBar;
