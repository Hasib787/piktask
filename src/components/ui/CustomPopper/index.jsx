import {
  Button,
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
// import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import crownGreenIcon from "../../../assets/icons/crownGreenIcon.svg";
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

  const handleSignout = () => {

    if (user && user?.token) {

      toast.success("You successfully signed out");
      user.isLogged = false;
      history.push("/")
      localStorage.clear();

      dispatch({
        type: "LOGOUT",
        payload: {
          email:"",
          token:"",
        },
      });

      // firebase
      //   .auth()
      //   .signOut()
      //   .then(() => {
      //     toast.success("You successfully signed out");
      //     // window.location.reload(history.replace("/"));
      //     // window.location.reload("/");
      //     user.isLogged=false;
      //     history.push("/")
      //     localStorage.clear();

      //   })
      //   .catch((error) => {
      //     console.log("Signout error", error.message);
      //   });
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
                      {user && user?.avatar ? (
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
                        {user && user?.token && user?.username}
                      </Typography>
                      <Typography variant="body1" className={classes.userEmail}>
                        {user && user?.token && user?.email}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Button className={classes.accountStatusBtn}>
                      <img
                        className={classes.accountIcon}
                        src={crownGreenIcon}
                        alt="Free"
                      />
                      Free
                    </Button>
                  </Grid>
                </Grid>

                <Grid container className={classes.productDownloadCount}>
                  <Grid item xs={6} className={classes.productDownloadGrid}>
                    <Typography variant="h2" className={classes.totalAmount}>
                      5
                    </Typography>
                    <Typography variant="h3" className={classes.totalText}>
                      Daily Downloads
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.productDownloadGrid}>
                    <Typography variant="h2" className={classes.totalAmount}>
                      5
                    </Typography>
                    <Typography variant="h3" className={classes.totalText}>
                      Remaining Downloads
                    </Typography>
                  </Grid>
                </Grid>

                <MenuItem
                  className={classes.userMenuItem}
                  onClick={handleClose}
                  component={Link}
                  to="/admin/settings"
                >
                  <span>My Profile</span>
                  <ArrowForwardIosIcon />
                </MenuItem>
                <MenuItem
                  className={classes.userMenuItem}
                  // onClick={handleClose}
                  component={Link}
                  to="/admin/upload"
                >
                  <span>Go Upload</span>
                  <ArrowForwardIosIcon />
                </MenuItem>
                <MenuItem
                  className={classes.userMenuItem}
                  onClick={handleClose}
                >
                  <span>Subscriptions</span>
                  <ArrowForwardIosIcon />
                </MenuItem>
                <MenuItem
                  className={classes.userMenuItem}
                  onClick={handleClose}
                >
                  <span>My Download</span>
                  <ArrowForwardIosIcon />
                </MenuItem>
                <MenuItem
                  className={classes.userMenuItem}
                  onClick={handleClose}
                >
                  Followers
                </MenuItem>
                <MenuItem
                  className={classes.userMenuItem}
                  onClick={(e) => {
                    handleClose(e);
                    handleSignout();
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default CustomPopper;
