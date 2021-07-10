import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import facebookLogo from "../../../assets/facebookLogo.png";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
// import googleLogo from "../../../assets/googleLogo.png";
import lockIcon from "../../../assets/password.png";
import brandLogo from "../../../assets/piktaskLogo.png";
// import { auth, googleAuthProvider } from "../../../database";
import useStyles from "../Auth.styles";
import jwt_decode from "jwt-decode";
import GoogleLogin from 'react-google-login';

export const Login = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);

  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const clientId = "461243390784-aphglbk47oqclmqljmek6328r1q6qb3p.apps.googleusercontent.com";
  const userHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  useEffect(() => {
    if (user && user.token) history.replace(from);

    document.body.style.backgroundColor = "#143340";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post("https://piktask.com/api/auth/login", {
      username,
      password,
    })
      .then((response) => {
        console.log(response.data.token);
        if (response.data.status) {
          const token = response.data.token;
          window.localStorage.setItem("token", token);
          const decode = jwt_decode(token.split(" ")[1]);
          if (decode.email) {
            dispatch({
              type: "SET_USER",
              payload: {
                ...decode,
                token
              }
            })
          }
          toast.success("Login Successfully", response)
          userHistory.replace(from);
        }
      })
      .catch((error) => {
        toast.error("Invalid Email Address or Password", error.message)
      })
  };

  // const signInWithGoogle = async () => {
  //   await auth
  //     .signInWithPopup(googleAuthProvider)
  //     .then(async (result) => {
  //       const { user } = result;
  //       const idTokenResult = await user?.getIdTokenResult();

  //       dispatch({
  //         type: "LOGGED_IN_USER",
  //         payload: {
  //           email: user?.email,
  //           token: idTokenResult?.token,
  //         },
  //       });
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  const handleLogin = async googleData => {
    const res = await fetch("https://piktask.com/api/auth/google_login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    if (data.status) {
      const token = data.token;
      window.localStorage.setItem("token", token);
      const decode = jwt_decode(token.split(" ")[1]);
      if (decode.email) {
        dispatch({
          type: "SET_USER",
          payload: {
            ...decode,
            token
          }
        })
      }
      toast.success("Login Successfully")
      userHistory.replace(from);
    }
    console.log(data);
    // store returned user somehow
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
                  Sign in
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
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                  >
                  </GoogleLogin>
                  {/* <Button
                    className={classes.googleBtn}
                    onClick={signInWithGoogle}
                  >
                    <img src={googleLogo} alt="Signup with Google" />
                  </Button> */}
                  <Button className={classes.facebookBtn}>
                    <img src={facebookLogo} alt="Signup with facebook" />
                  </Button>
                </div>

                <Typography variant="subtitle1" className={classes.formDevider}>
                  Or
                </Typography>

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
                      disabled={loading & !username || !password}
                    >
                      Signin
                    </Button>
                    <Button
                      component={Link}
                      to="/new-password"
                      className={classes.resetPasswordLink}
                      disableElevation
                      disableFocusRipple
                      disableRipple
                    >
                      Forget Password
                    </Button>
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
      </div>
    </>
  );
};
