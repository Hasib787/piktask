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
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import GetAppIcon from "@material-ui/icons/GetApp";
import shutterstockIcon from "../../../assets/icons/shutterstock.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import freepikIcon from "../../../assets/icons/freepik.svg";
import behanceIcon from "../../../assets/icons/behance.svg";
import dribbleIcon from "../../../assets/icons/dribble.svg";
import authorPhoto from "../../../assets/author.png";
import useStyles from "./UserSideBar.style";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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
  const user = useSelector((state) => state.user);
  
  const [downloadCount, setDownloadCount] = useState("");
  const [downloadLimit, setDownloadLimit] = useState("");
  const [alertDialog, setAlertDialog] = useState(false);
  const [userProfile, setUserProfile] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");

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
    setLoading(true);

    if (user?.token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/profile/download_count`, {
          headers: { Authorization: user?.token },
        })
        .then(({ data }) => {
          if (data.status) {
            setDownloadCount(data?.downloads);
            setDownloadLimit(data?.daily_limit - data?.downloads);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // get user information
    if (user?.token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/profile`, {
          headers: { Authorization: user.token },
        })
        .then(({ data }) => {
          if (data?.status) {
            setUserProfile(data.user);
            setProfilePicture(data.user.avatar);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [user?.token]);

  //close account modal
  const handleDialogOpen = () => { setAlertDialog(true);};
  const handleDialogClose = () => { setAlertDialog(false);};

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
    } else if (window.location.pathname === "/user/subscription" && value !== 5) {
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

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file?.name?.match(/\.(jpg|jpeg|png|gif)$/) && file !== undefined) {
      toast.error("You can only upload .jpg, .jpeg, .png, .gif etc");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", file);

    const url = `${process.env.REACT_APP_API_URL}/profile/profile_picture`;
    axios({
      method: "put",
      url,
      headers: {
        Authorization: user.token,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        if (res.status) {
          toast.success(res.data.message);
          setProfilePicture(res.data.image);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {mobileView ? (
        <div>
          <Button component={Link} to="/user/profile"><PersonOutlineIcon /></Button>
          <Button component={Link} to="/user/favorites"><FavoriteBorderIcon /></Button>
          <Button component={Link} to="/user/downloads"><GetAppIcon /></Button>
          <Button component={Link} to="/user/following"><PeopleOutlineIcon /></Button>
        </div>
      ) : (
        <>
          <Card className={classes.userProfile}>
            <div className={classes.userProfileContent}>
              <div className={classes.profileImage}>
                {profilePicture ? (
                  <img src={profilePicture} alt="UserProfile" />
                ) : (
                  <img src={authorPhoto} alt="UserProfile" />
                )}
              </div>
              <div className={classes.avatarOverlay}>
                <Button className={classes.uploadButton}>
                  <label htmlFor="image" for="upload-photo">
                    <PhotoCameraIcon />
                    <input
                      type="file"
                      name="profile_picture"
                      accept="image/*"
                      id="upload-photo"
                      style={{ display: "none" }}
                      onChange={handleUpdateImage}
                    />
                  </label>
                </Button>
              </div>
              <div className={classes.profileInfo}>
                <Typography variant="h2">{user?.username}</Typography>
                <Typography>{user?.email}</Typography>
              </div>
              <div className={classes.socialMedia}>
                {userProfile?.facebook !== "" && (
                  <Button component={Link} to={`${userProfile?.facebook}`} target="_blank">
                    <img src={facebookIcon} className={classes.facebookIcon} alt="facebookIcon"/>
                  </Button>
                )}
                {userProfile?.twitter !== "" && (
                  <Button component={Link} to={`${userProfile?.twitter}`} target="_blank">
                    <img src={twitterIcon} className={classes.twitterIcon} alt="twitterIcon"/>
                  </Button>
                )}
                {userProfile?.linkedin !== "" && (
                  <Button component={Link} to={`${userProfile?.linkedin}`} target="_blank">
                    <img src={linkedinIcon} className={classes.linkedinIcon} alt="linkedinIcon"/>
                  </Button>
                )}
                {userProfile?.instagram !== "" && (
                  <Button component={Link} to={`${userProfile?.instagram}`} target="_blank">
                    <img src={instagramIcon} className={classes.instagramIcon} alt="instagramIcon"/>
                  </Button>
                )}
                {userProfile?.shutterstock !== "" && (
                  <Button component={Link} to={`${userProfile?.shutterstock}`} target="_blank">
                    <img src={shutterstockIcon} className={classes.shutterstockIcon} alt="shutterstockIcon"/>
                  </Button>
                )}
                {userProfile?.freepik !== "" && (
                  <Button component={Link} to={`${userProfile?.freepik}`} target="_blank">
                    <img src={freepikIcon} className={classes.freepikIcon} alt="freepikIcon"/>
                  </Button>
                )}
                {userProfile?.behance !== "" && (
                  <Button component={Link} to={`${userProfile?.behance}`} target="_blank">
                    <img src={behanceIcon} className={classes.behanceIcon} alt="behanceIcon"/>
                  </Button>
                )}
                {userProfile?.dribble !== "" && (
                  <Button component={Link} to={`${userProfile?.dribble}`} target="_blank">
                    <img src={dribbleIcon} className={classes.dribbleIcon} alt="dribbleIcon"/>
                  </Button>
                )}
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
                  <span>
                    Downloads({downloadCount}/{downloadLimit})
                  </span>
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
              open={alertDialog}
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
                  </form>
                </div>
              </TabPanel>
            </Dialog>
          </Card>
        </>
      )}
    </>
  );
};

export default UserSideBar;
