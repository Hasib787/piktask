import {
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EuroIcon from "@material-ui/icons/Euro";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import DevicesIcon from "@material-ui/icons/Devices";
import GetAppIcon from "@material-ui/icons/GetApp";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import crownGreenIcon from "../../../assets/icons/crownGreenIcon.svg";
import useStyles from "./Popper.styles";

const CustomPopper = ({
  open,
  handleToggle,
  anchorRef,
  handleClose,
  handleListKeyDown,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [downloadCount, setDownloadCount] = useState("");
  const [downloadLimit, setDownloadLimit] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (user?.isLogged && user?.role === "user") {
      axios
        .get(`${process.env.REACT_APP_API_URL}/profile/download_count`, {
          headers: { Authorization: user?.token },
        })
        .then(({ data }) => {
          if (data?.status) {
            setDownloadCount(data?.downloads);
            setDownloadLimit(data?.daily_limit - data?.downloads);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user?.token, user?.isLogged, user?.role]);

  const handleSignout = () => {
    if (user && user?.token) {
      user.isLogged = false;
      history.push("/");
      localStorage.removeItem("token");

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
    <Popper
      open={open}
      anchorEl={anchorRef?.current}
      role={undefined}
      transition
      disablePortal
      className={classes.dropDownMenuContainer}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
                className={classes.dropdownMenuWrapper}
              >
                <Grid container className={classes.gridUserInfo}>
                  <Grid item xs={6} className={classes.userInDropdown}>
                    <div className={classes.avatarCircle}>
                      {user?.isLogged &&
                      user?.avatar &&
                      user?.avatar !== "null" ? (
                        <img
                          className={classes.dropdownUserAvatar}
                          src={user?.avatar}
                          alt="UserPhoto"
                        />
                      ) : (
                        <AccountCircleIcon
                          className={classes.dropdownUserAvatar}
                        />
                      )}
                    </div>
                    <div>
                      <Typography
                        variant="h3"
                        className={classes.dropdownUserName}
                      >
                        {user?.username}
                      </Typography>
                      <Typography variant="body1" className={classes.userEmail}>
                        {user?.email}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Button className={classes.accountStatusBtn}>
                      <img
                        className={classes.accountIcon}
                        src={crownGreenIcon}
                        alt="Free"
                      />
                      Free
                    </Button> */}
                  </Grid>
                </Grid>

                {user?.role === "user" && (
                  <Grid container className={classes.productDownloadCount}>
                    <Grid item xs={6} className={classes.productDownloadGrid}>
                      <Typography variant="h2" className={classes.totalAmount}>
                        {downloadCount}
                      </Typography>
                      <Typography variant="h3" className={classes.totalText}>
                        Daily Downloads
                      </Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.productDownloadGrid}>
                      <Typography variant="h2" className={classes.totalAmount}>
                        {downloadLimit}
                      </Typography>
                      <Typography variant="h3" className={classes.totalText}>
                        Remaining Downloads
                      </Typography>
                    </Grid>
                  </Grid>
                )}

                {user?.role === "user" && (
                  <div>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={handleClose}
                      component={Link}
                      to="/user/profile"
                    >
                      <div className={classes.userMenuIcon}>
                        <PersonOutlineIcon />
                        <span>Edit Profile</span>
                      </div>
                      <ArrowForwardIosIcon />
                    </MenuItem>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={handleClose}
                      component={Link}
                      to="/user/favorites"
                    >
                      <div className={classes.userMenuIcon}>
                        <FavoriteBorderIcon />
                        <span>Favourite</span>
                      </div>
                      <ArrowForwardIosIcon />
                    </MenuItem>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={handleClose}
                      component={Link}
                      to="/user/downloads"
                    >
                      <div className={classes.userMenuIcon}>
                        <GetAppIcon />
                        <span>
                          Downloads({downloadCount}/{downloadLimit})
                        </span>
                      </div>
                      <ArrowForwardIosIcon />
                    </MenuItem>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={handleClose}
                      component={Link}
                      to="/user/following"
                    >
                      <div className={classes.userMenuIcon}>
                        <PeopleOutlineIcon />
                        <span>Following</span>
                      </div>
                      <ArrowForwardIosIcon />
                    </MenuItem>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={(e) => {
                        handleClose(e);
                        handleSignout();
                      }}
                    >
                      <div className={classes.userMenuIcon}>
                        <PowerSettingsNewIcon />
                        <span>Logout</span>
                      </div>
                    </MenuItem>
                  </div>
                )}

                {user?.role === "contributor" && (
                  <div>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={handleClose}
                      component={Link}
                      to="/contributor/earnings"
                    >
                      <div className={classes.userMenuIcon}>
                        <EuroIcon />
                        <span>Earning Management</span>
                      </div>
                      <ArrowForwardIosIcon />
                    </MenuItem>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={handleClose}
                      component={Link}
                      to="/contributor/settings"
                    >
                      <div className={classes.userMenuIcon}>
                        <AccountCircleIcon />
                        <span>Account Setting</span>
                      </div>
                      <ArrowForwardIosIcon />
                    </MenuItem>
                    <MenuItem
                      className={classes.userMenuItem}
                      onClick={(e) => {
                        handleClose(e);
                        handleSignout();
                      }}
                    >
                      <div className={classes.userMenuIcon}>
                        <PowerSettingsNewIcon />
                        <span>Logout</span>
                      </div>
                    </MenuItem>
                  </div>
                )}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default CustomPopper;
