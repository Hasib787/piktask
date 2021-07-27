import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  FormControlLabel,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authImage from "../../../../assets/auth.png";
import facebookLogo from "../../../../assets/facebook.png";
import googleLogo from "../../../../assets/google.png";
import crownIcon from "../../../../assets/icons/crown.svg";
import logoWhite from "../../../../assets/logo-white.png";
import logo from "../../../../assets/piktaskLogo.png";
import { CustomBtn, InputField } from "../../../InputField";
import Spacing from "../../../Spacing";
import useStyles from "./DesktopMenu.styles";

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

function a11yProps(index: number) {
  return {
    id: `user-authentication-tab-${index}`,
    "aria-controls": `user-authentication-tabpanel-${index}`,
  };
}

const DesktopMenu = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const anchorRef = useRef(null);

  const [value, setValue] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleAuthData = (e) => {
    const { name, value } = e.target;

    setAuthData({ ...authData, [name]: value });
  };

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
  };

  const handleChange = (event, index) => {
    setValue(index);
  };

  const handleChangeTab = () => {
    return tabIndex === 0 ? setTabIndex(1) : tabIndex === 1 && setTabIndex(0);
  };

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <Container className={classes.container}>
        <Toolbar disableGutters className={classes.headerBottomToolbar}>
          <Button
            component={Link}
            to="/"
            className={classes.logoWrapper}
            disableRipple
          >
            <img src={logo} className={classes.logo} alt="Dev" />
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
              to="/vector"
              label="Vector"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/photos"
              label="Photos"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/psd"
              label="PSD"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/png"
              label="PNG"
            />
            <Tab
              className={classes.menuItem}
              disableRipple
              component={Link}
              to="/category"
              label="Category"
            />
            {/* <ArrowDropDownIcon /> */}
          </Tabs>
          <Toolbar disableGutters className={classes.toolBarContainer}>
            {user && user?.token && (
              <Button
                className={classes.sellContentBtn}
                component={Link}
                to="/sell-content"
              >
                Sell Your Content
              </Button>
            )}

            <Button className={classes.enterprise}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Enterprise
            </Button>
            <Button className={classes.premium}>
              <img className={classes.crownIcon} src={crownIcon} alt="Crown" />
              Premium
            </Button>
            {user && user?.token ? (
              <div
                className={classes.userAvatarArea}
                onClick={handleToggle}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                ref={anchorRef}
              >
                {user && user?.avatar ? (
                  <img
                    className={classes.avatar}
                    src={user.avatar}
                    alt="UserPhoto"
                  />
                ) : (
                  <AccountCircleIcon className={classes.avatar} />
                )}
                <ArrowDropDownIcon className={classes.arrowDown} />
              </div>
            ) : (
              <Button
                className={classes.signInBtn}
                // component={Link}
                // to="/registration"
                onClick={() => setOpenAuthModal(true)}
              >
                Sign In
              </Button>
            )}
          </Toolbar>
        </Toolbar>
      </Container>

      <Dialog
        open={openAuthModal}
        onClose={handleCloseAuthModal}
        aria-labelledby="authentication-dialog"
        aria-describedby="authentication-dialog"
        style={{ backgroundColor: "rgb(20 51 64 / 77%)" }}
        maxWidth="md"
      >
        <DialogContent style={{ padding: 0, overflow: "hidden" }}>
          <Grid container spacing={3}>
            <Grid item sm={5}>
              <div className={classes.leftPanel}>
                <img
                  className={classes.authLogo}
                  src={logoWhite}
                  alt="Piktask"
                />
                <Typography>Enjoy Free Download Now!</Typography>
                <Typography>*Get 50% OFF Discount for Premium Plan</Typography>
                <Typography>*Download 6 Images for Free Everyday</Typography>
                <Typography>
                  *2,600,000+ Images to energize your Design
                </Typography>

                <Spacing space={{ height: 30 }} />

                <img src={authImage} alt="Piktask" />
              </div>
            </Grid>
            <Grid item sm={7}>
              <div className={classes.rightPanel}>
                <Tabs
                  value={tabIndex}
                  onChange={handleChangeTab}
                  aria-label="authentication tabs"
                  className={classes.tabsWrapper}
                  variant="fullWidth"
                >
                  <Tab
                    label="Login"
                    {...a11yProps(0)}
                    className={classes.tabItem}
                    classes={{ selected: classes.selected }}
                    disableRipple
                  />
                  <Tab
                    label="Sign Up"
                    {...a11yProps(1)}
                    className={classes.tabItem}
                    classes={{ selected: classes.selected }}
                    disableRipple
                  />
                </Tabs>
                {/* End tabs */}

                <Typography
                  style={{
                    textAlign: "center",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  with your social network
                </Typography>

                <div className={classes.socialLoginBtns}>
                  <Button
                    disableRipple
                    className={`${classes.googleBtn} ${classes.socialLogin}`}
                  >
                    <img src={googleLogo} alt="Login with Google" />
                  </Button>

                  <Spacing space={{ margin: "0 0.5rem" }} />

                  <Button
                    disableRipple
                    className={`${classes.facebookBtn} ${classes.socialLogin}`}
                  >
                    <img src={facebookLogo} alt="Login with facebook" />
                  </Button>
                </div>

                <Spacing space={{ height: "2rem" }} />
                <div className={classes.horizontalLine}>
                  <span>OR</span>
                </div>
                <Spacing space={{ height: "3.2rem" }} />

                {/* Tab panel for Sign In */}
                <TabPanel value={tabIndex} index={0}>
                  <form onSubmit={handleSubmit}>
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      value={authData.email}
                      onChange={handleAuthData}
                    />
                    <InputField
                      label="Password"
                      type="password"
                      name="password"
                      value={authData.password}
                      onChange={handleAuthData}
                    />

                    <CustomBtn type="submit" text="Sign In" color="green" />
                  </form>

                  <Spacing space={{ height: "1.5rem" }} />

                  <Link
                    to="/reset-password"
                    className={classes.passwordResetLink}
                  >
                    Password Reset
                  </Link>

                  <div className={classes.signUpLink}>
                    Not a member? <span onClick={handleChangeTab}>Sign Up</span>
                  </div>
                </TabPanel>

                {/* Tab panel for Sign Up */}
                <TabPanel value={tabIndex} index={1}>
                  <form onSubmit={handleSubmit}>
                    <InputField
                      label="User Name"
                      name="userName"
                      value={authData.password}
                      onChange={handleAuthData}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      value={authData.password}
                      onChange={handleAuthData}
                    />
                    <InputField
                      label="Password"
                      type="password"
                      name="password"
                      value={authData.password}
                      onChange={handleAuthData}
                    />

                    <CustomBtn type="submit" text="Sign Up" color="green" />
                  </form>

                  <Spacing space={{ height: "0.5rem" }} />

                  <FormControlLabel
                    className={classes.checkboxLabel}
                    control={
                      <Checkbox
                        name="receiveNewsLetter"
                        size="medium"
                        className={classes.checkbox}
                      />
                    }
                    label="I do not wish to receive news and promotions from piktask Company by email."
                  />

                  <div onClick={handleChangeTab} className={classes.authText}>
                    Already registered? Log in
                  </div>
                </TabPanel>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DesktopMenu;
