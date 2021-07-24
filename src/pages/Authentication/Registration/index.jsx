import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import lockIcon from "../../../assets/password.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import { auth } from "../../../database";
import useStyles from "../Auth.styles";
import ModalAuth from "./Modal/ModalAuth";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";

const clientId = "461243390784-aphglbk47oqclmqljmek6328r1q6qb3p.apps.googleusercontent.com";

export const Registration = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [confirmValue, setConfirmValue] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };
  const handleShowHideConfirmPassword = () => {
    setConfirmValue((value) => !value);
  };
  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (user.token) history.push("/");

    document.body.style.backgroundColor = "#143340";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!username || !email || !password || !confirmPassword) {
      setModalIsOpen(false);
      toast.error("All fields are required");
      return;
    }

    if (username.length < 3) {
      setModalIsOpen(false);
      toast.error("Username should be at least 3 or more characters");
      return;
    }

    if (email) {
      const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!validateEmail.test(String(email).toLowerCase())) {
        setModalIsOpen(false);
        toast.error("Your email is not validate");
        return;
      }
    }

    if (password.length < 5) {
      setModalIsOpen(false);
      toast.error("Password should be at least 6 or more characters");
      return;
    }

    if (password !== confirmPassword) {
      setModalIsOpen(false);
      toast.error("Password not match");
    }

    axios.post("https://piktask.com/api/auth/signup", {
      username,
      email,
      password,
      confirmPassword,
    }).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        openModal()
      }

    }).catch((error) => {
      toast.error(error.message);
    })

    await auth.sendSignInLinkToEmail(email, {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    });

    // Show success message to the user
    toast.success(
      `An email has been sent to ${email}. Please check and verify your email`
    );

    // Save username, email, and password, to localStorage
    window.localStorage.setItem("userName", username);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("confirmPassword", confirmPassword);

    // Remove the existing value
    // setUsername("");
    // setEmail("");
    // setPassword("");
    setIsLoading(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleGoogleLogin = async googleData => {
    const res = await fetch("https://piktask.com/api/auth/google_login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
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

  }

  //login with facebook
  const handleFacebookLogin = async facebookData => {
    const res = await fetch("https://piktask.com/api/auth/facebook_login", {
      method: "POST",
      body: JSON.stringify({
        token: facebookData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
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
  }


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
          <div className={classes.formWrapper}>
            <div className={classes.formWrapperInner}>
              <div className={classes.formHeading}>
                <Typography className={classes.formTitle} variant="h2">
                  Sign up
                </Typography>
                <Typography className={classes.formSubtitle}>
                  with your social network
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
                    cookiePolicy={'single_host_origin'}
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
                    <div className={classes.passwordField}>
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
                    </div>

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
                      disabled={!username || !email || !password || !confirmPassword}
                    >
                      Signup
                    </Button>
                    <ModalAuth modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalAuth>
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
      </div>
    </>
  );
};
