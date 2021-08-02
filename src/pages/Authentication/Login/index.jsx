import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
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
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import useStyles from "../Auth.styles";

// const clientId =
//   "461243390784-aphglbk47oqclmqljmek6328r1q6qb3p.apps.googleusercontent.com";

export const Login = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (user && user.token) history.replace(from);
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history, from]);

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
  
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.data.status) {
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
  // //login with google
  // const handleGoogleLogin = async (googleData) => {
  //   const res = await fetch(
  //     `${process.env.REACT_APP_API_URL}/auth/google_login`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         token: googleData.tokenId,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   // store returned user somehow
  //   if (data.status) {
  //     const token = data.token;
  //     localStorage.setItem("token", token);
  //     const decodedToken = jwt_decode(token.split(" ")[1]);

  //     if (decodedToken.email) {
  //       dispatch({
  //         type: "SET_USER",
  //         payload: {
  //           ...decodedToken,
  //           token,
  //         },
  //       });
  //     }
  //     toast.success(data.message);
  //     // handleResponse(true);
  //     pathHistory.replace(from);
  //   }
  // };

  // //login with facebook
  // const handleFacebookLogin = async (facebookData) => {
  //   const res = await fetch(
  //     `${process.env.REACT_APP_API_URL}/auth/facebook_login`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         token: facebookData.tokenId,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   // store returned user somehow
  //   if (data.status) {
  //     const token = data.token;
  //     localStorage.setItem("token", token);
  //     const decodedToken = jwt_decode(token.split(" ")[1]);

  //     if (decodedToken.email) {
  //       dispatch({
  //         type: "SET_USER",
  //         payload: {
  //           ...decodedToken,
  //           token,
  //         },
  //       });
  //     }
  //     toast.success(data.message);
  //     pathHistory.replace(from);
  //   }
  // };

  return (
    <>
      <Header />
      <div className={classes.rootContainer}>
        <Spacing space={{ height: "5rem" }} />
        <div className={classes.formPageContainer}>
        <img
            src={formIconTop}
            alt="Background Icon"
            className={classes.backgroundIconTop}
          />
           {/* <Spacing space={{ height: "2rem" }} /> */}
          <div className={classes.formWrapper}>
            <div className={classes.formWrapperInner}>
              <div className={classes.formHeading}>
                <Typography className={classes.formTitle} variant="h2">
                  Sign In
                </Typography>
                <Typography className={classes.formSubtitle}>
                  Sign in with your email & password
                </Typography>
              </div>
              <div>
                {/* <div className={classes.socialsButtons}>
                  <GoogleLogin
                    clientId={clientId}
                    className={classes.googleBtn}
                    buttonText="Google"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy={"single_host_origin"}
                  />

                  <FacebookLogin
                    className={classes.facebookBtn}
                    appId="168140328625744"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={handleFacebookLogin}
                    callback={handleFacebookLogin}
                  />
                </div> */}

                {/* <Typography variant="subtitle1" className={classes.formDevider}>
                  Or
                </Typography> */}

                <div>
                  <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className={classes.form}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="User name / Email"
                      className={classes.formControl}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className={classes.passwordField}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Password"
                        type={value ? "text" : "password"}
                        className={classes.formControl}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <img
                        src={lockIcon}
                        alt="Show or hide password"
                        onClick={handleShowHidePassword}
                      />
                    </div>

                    <FormControlLabel
                      value="end"
                      label="I can't remember my password"
                      labelPlacement="end"
                      control={<Checkbox color="primary" />}
                      className={classes.checkboxLabel}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.formButton}
                      type="submit"
                      disabled={loading || !username || !password}
                    >
                      Sign In
                    </Button>
                    <Link
                      to="/reset-password"
                      className={classes.passwordResetLink}
                    >
                      Password Reset
                    </Link>
                    <Spacing space={{ height: "1rem" }} />
                  </form>
                  <Button
                    component={Link}
                    to="/registration"
                    className={classes.formLink}
                  >
                    Not a member? Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <img
            src={formIconBottom}
            alt="Background"
            className={classes.backgroundIconBottom}
          />
        </div>
        <Spacing space={{ height: "5rem" }} />
      </div>
    <Footer />
    </>
  );
};
