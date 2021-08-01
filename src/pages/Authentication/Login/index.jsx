import {
  Checkbox,
  FormControlLabel,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import lockIcon from "../../../assets/password.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import Spacing from "../../../components/Spacing";
import useStyles from "../Auth.styles";
import logoWhite from "../../../assets/logo-white.png"
import authImage from "../../../assets/auth.png";
import { TabPanel } from "@material-ui/lab";
import { CustomBtn, InputField } from "../../../components/InputField";

const clientId =
  "461243390784-aphglbk47oqclmqljmek6328r1q6qb3p.apps.googleusercontent.com";

export const Login = ({ history }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const [passwordValue, setPasswordValue] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    userName: "",
    password: "",
  });

  //Handle the password show and hide
  const handleShowHidePassword = () => {
    setPasswordValue((value) => !value);
  };
  // const handleShowHideConfirmPassword = () => {
  //   setConfirmPasswordValue((value) => !value);
  // };

  //Redirect to home page when user logs in
  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    // if (user.token) history.push("/");
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history]);

  const handleAuthData = (e) => {
    const { name, value } = e.target;

    setAuthData({ ...authData, [name]: value });
  };


  const handleChangeTab = () => {
    return tabIndex === 0 ? setTabIndex(1) : tabIndex === 1 && setTabIndex(0);
  };

  //handle SignIn
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!authData.userName || !authData.password) {
      toast.error("Please fill in all the fields");
      setLoading(false);
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username: authData.userName,
        password: authData.password,
      })
      .then((res) => {
        console.log("signIN", res);
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
        toast.error("Invalid email or password", error.message);
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
    // store returned user somehow
    if (data.status) {
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
      toast.success(data.message);
      // handleResponse(true);
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
    // store returned user somehow
    if (data.status) {
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
      toast.success(data.message);
      pathHistory.replace(from);
    }
  };

  return (
    <>
      <div className={classes.rootContainer}>
        <div className={classes.logoArea}>
          <Link to="/">
            <img src={brandLogo} alt="Piktask" />
          </Link>
          <Typography variant="body1">
            Registering to this website, you accept our Terms of Use and our
            Privacy Policy
          </Typography>
        </div>
        <div className={classes.formPageContainer}>
          <img
            src={formIconTop}
            alt="Background Icon"
            className={classes.backgroundIconTop}
          />
           <div style={{ padding: 0, overflow: "hidden" }}>
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
              </div>
            </Grid>
          </Grid>
        </div>
          <img
            src={formIconBottom}
            alt="Background"
            className={classes.backgroundIconBottom}
          />
        </div>
      </div>
    </>
  );
};
