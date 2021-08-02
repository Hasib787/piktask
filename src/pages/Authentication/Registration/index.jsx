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
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import lockIcon from "../../../assets/password.png";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import { auth } from "../../../database";
import useStyles from "../Auth.styles";

const clientId =
  "461243390784-aphglbk47oqclmqljmek6328r1q6qb3p.apps.googleusercontent.com";

export const Registration = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [confirmValue, setConfirmValue] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isRedirectTo, setRedirectTo] = useState(false);

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };
  const handleShowHideConfirmPassword = () => {
    setConfirmValue((value) => !value);
  };

  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (user.token) history.push("/");


    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history]);

  //Registration form submit and validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (username.length < 3) {
      toast.error("Username should be at least 3 or more characters");
      setIsLoading(false);
      return;
    } else if (email && !validateEmail.test(String(email))) {
      toast.error("Your email is invalid");
      setIsLoading(false);
      return;
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      setIsLoading(false);
      return;
    }

    //   else if(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/)){
    //     toast.error("Password should contain at least a number, lowercase, uppercase and a special character @,#,%,& etc.");
    //     setIsLoading(false);
    //     return;
    // }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username,
        email,
        password,
        confirmPassword: password,
      })
      .then(async (res) => {
        if (res?.status === 200) {
          await auth.sendSignInLinkToEmail(email, {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
          });

          // Show success message to the user
          toast.success(
            `An email has been sent to ${email}. Please check and confirm your registration`
          );

          setIsLoading(false);
          setRedirectTo(true);
        } else {
          console.warn("Something went wrong with signup");
        }
      })
      .catch((error) => {
        toast.error(error.message);
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
      pathHistory.replace(from);
    }
  };

  //login with facebook
  const handleFacebookLogin = async (facebookData) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/facebook_login`, {
      method: "POST",
      body: JSON.stringify({
        token: facebookData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
     {isRedirectTo && <Redirect to="/confirm-signup" />}
    <Header />
      <div className={classes.rootContainer}>
      <Spacing space={{ height: "5rem" }} />

        <div className={classes.formPageContainer}>
          <img
            src={formIconTop}
            alt="Background Icon"
            className={classes.backgroundIconTop}
          />
          <div className={classes.formWrapper}>
            <div className={classes.formWrapperInner}>
              <div className={classes.formHeading}>
                <Typography className={classes.formTitle} variant="h2">
                  Sign Up
                </Typography>
                <Typography className={classes.formSubtitle}>
                  With your social network
                </Typography>
              </div>

              <div>
                <div className={classes.socialsButtons}>
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Google"
                    className={classes.googleBtn}
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
                </div>

                <Typography variant="subtitle1" className={classes.formDevider}>
                  Or
                </Typography>

                <div>
                  <form
                    autoComplete="off"
                    className={classes.form}
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="User name"
                      className={classes.formControl}
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      className={classes.formControl}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    {/* <div className={classes.passwordField}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Confirm Password"
                        type={confirmValue ? "text" : "password"}
                        className={classes.formControl}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <img
                        src={lockIcon}
                        alt="Show or hide password"
                        onClick={handleShowHideConfirmPassword}
                      />
                    </div> */}

                    <Typography variant="body1" className={classes.helpText}>
                      Your password must be at least 6 characters long and must
                      contain letters, numbers and special characters. Cannot
                      contain whitespace.
                    </Typography>

                    <FormControlLabel
                      value="end"
                      label=" I do not wish to receive news and promotions from piktask Company by email."
                      labelPlacement="end"
                      control={<Checkbox color="primary" />}
                      className={classes.checkboxLabel}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.formButton}
                      type="submit"
                      disabled={
                        isLoading || !username || !email || !password 
                      }
                    >
                      Sign Up
                    </Button>
                  </form>

                  <Button
                    component={Link}
                    to="/login"
                    className={classes.formLink}
                    disableRipple
                  >
                    Already registered? Log in
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
