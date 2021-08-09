import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router';
import useStyles from "./SignUpModal.styles";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { toast } from 'react-toastify';
import { auth } from '../../../database';
import { Checkbox, Dialog, DialogContent, FormControlLabel, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import Spacing from '../../../components/Spacing';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import { CustomBtn, InputField } from '../../../components/InputField';
import { Link } from 'react-router-dom';
import lockIcon from "../../../assets/password.png";
import logoWhite from "../../../assets/logo-white.png";
import authImage from "../../../assets/auth.png";

const clientId =
  "523940507800-llt47tmfjdscq2icuvu1fgh20hmknk4u.apps.googleusercontent.com";

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

const SignUpModal = (props) => {
    const classes = useStyles();
    const { openAuthModal, setOpenAuthModal } = props;

  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);

  const [passwordValue, setPasswordValue] = useState(false);
  // const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRedirectTo, setRedirectTo] = useState(false);

  const [authData, setAuthData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Handle the password show and hide
  const handleShowHidePassword = () => {
    setPasswordValue((value) => !value);
  };

  //Redirect to home page when user logs in
  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    // if (user.token) history.push("/");
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleAuthData = (e) => {
    const { name, value } = e.target;

    setAuthData({ ...authData, [name]: value });
  };

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
  };

  const handleChangeTab = () => {
    return tabIndex === 0 ? setTabIndex(1) : tabIndex === 1 && setTabIndex(0);
  };

  //handle SignIn
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username: authData.userName,
        password: authData.password,
      })
      .then((res) => {
        if (res.data.status) {
          setOpenAuthModal(false);
          const token = res.data.token;
          localStorage.setItem("token", token);
          const decodedToken = jwt_decode(token.split(" ")[1]);

          if (decodedToken.email) {
            dispatch({
              type: "SET_USER",
              payload: {
                ...decodedToken,
                token,
              },
            });
          }
          pathHistory.replace(from);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
          authData.userName = "";
          authData.password = "";
          setLoading(false);  
      });
  };

  //Handle signUp form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (authData.userName.length < 3 || authData.userName.length > 15) {
      toast.error("Username must be between 3 and 15 characters long");
      setLoading(false);
      return;
    } else if (!/^[a-z0-9_.]+$/.test(authData.userName)) {
      toast.error(
        "Username can only use lowercase letters, numbers, underscores, and dots"
      );
      setLoading(false);
      return;
    } else if (authData.userName.match(/^_/)) {
      toast.error("Username can not use only underscore. Ex: james_bond");
      setLoading(false);
      return;
    } else if (authData.userName.match(/^\./)) {
      toast.error("Username can not use only dot. Ex: james.bond");
      setLoading(false);
      return;
    } else if (authData.userName.match(/^[0-9]/)) {
      toast.error("Username can not be a number. Ex: bond007");
      setLoading(false);
      return;
    } else if (authData.email && !validateEmail.test(String(authData.email))) {
      toast.error("Your email is invalid");
      setLoading(false);
      return;
    } else if (authData.password.length < 6) {
      toast.error("Password should be at least 6 characters");
      setLoading(false);
      return;
    }

    //   else if(!authData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/)){
    //     toast.error("Password should contain at least a number, lowercase, uppercase and a special character @,#,%,& etc.");
    //     setLoading(false);
    //     return;
    // }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username: authData.userName,
        email: authData.email,
        password: authData.password,
        confirmPassword: authData.password,
      })
      .then(async (res) => {
        if (res?.status === 200) {
          await auth.sendSignInLinkToEmail(authData.email, {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
          });
      
          // Show success message to the user
          toast.success(
            `An email has been sent to ${authData.email}. Please check and confirm your registration`
          );

          authData.userName = "";
          authData.email = "";
          authData.password = "";
          setLoading(false);
          setRedirectTo(true);
        } else {
          console.warn("Something went wrong with signup");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        authData.userName = "";
        authData.email = "";
        authData.password = "";
        setLoading(false);
      });
  };

  //login with google
  const handleGoogleLogin = async (googleData) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/google_login`,
      {
        method: "POST",
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // store user data in localStorage
    if (data.status) {
      setOpenAuthModal(false);
      const token = data.token;
      localStorage.setItem("token", token);
      const decodedToken = jwt_decode(token.split(" ")[1]);

      if (decodedToken.email) {
        dispatch({
          type: "SET_USER",
          payload: {
            ...decodedToken,
            token,
          },
        });
      }
      pathHistory.replace(from);
    }
  };

  //login with facebook
  const handleFacebookLogin = async (facebookData) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/facebook_login`,
      {
        method: "POST",
        body: JSON.stringify({
          token: facebookData.tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // store user data in localStorage
    if (data.status) {
      setOpenAuthModal(false);
      const token = data.token;
      localStorage.setItem("token", token);
      const decodedToken = jwt_decode(token.split(" ")[1]);

      if (decodedToken.email) {
        dispatch({
          type: "SET_USER",
          payload: {
            ...decodedToken,
            token,
          },
        });
      }
      pathHistory.replace(from);
    }
  };

  return (
    <>
      {isRedirectTo && <Redirect to="/confirm-signup" />}
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

                <div className={classes.socialsButtons}>
                  <GoogleLogin
                    clientId={clientId}
                    className={classes.googleBtn}
                    buttonText="Google"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy={"single_host_origin"}
                  />

                  <Spacing space={{ margin: "0 0.5rem" }} />

                  <FacebookLogin
                    className={classes.facebookBtn}
                    appId="168140328625744"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={handleFacebookLogin}
                    callback={handleFacebookLogin}
                  />
                </div>

                <Spacing space={{ height: "2rem" }} />
                <div className={classes.horizontalLine}>
                  <span>OR</span>
                </div>
                <Spacing space={{ height: "3.2rem" }} />

                {/* Tab panel for Sign In */}
                <TabPanel value={tabIndex} index={0}>
                  <form onSubmit={handleSignIn}>
                    <InputField
                      label="User Name / Email"
                      name="userName"
                      value={authData.userName}
                      onChange={handleAuthData}
                    />
                    <div className={classes.passwordField}>
                      <InputField
                        label="Password"
                        type={passwordValue ? "text" : "password"}
                        name="password"
                        value={authData.password}
                        onChange={handleAuthData}
                      />
                      <img
                        src={lockIcon}
                        alt="Show or hide password"
                        onClick={handleShowHidePassword}
                      />
                    </div>

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
                      value={authData.userName}
                      onChange={handleAuthData}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      value={authData.email}
                      onChange={handleAuthData}
                    />
                    <div className={classes.passwordField}>
                      <InputField
                        label="Password"
                        type={passwordValue ? "text" : "password"}
                        name="password"
                        value={authData.password}
                        onChange={handleAuthData}
                      />
                      <img
                        src={lockIcon}
                        alt="Show or hide password"
                        onClick={handleShowHidePassword}
                      />
                    </div>

                    <CustomBtn
                      text="Sign Up"
                      color="green"
                      disabledBtn={
                        !authData.userName ||
                        !authData.email ||
                        !authData.password
                      }
                    />
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

export default SignUpModal;