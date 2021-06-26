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
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import lockIcon from "../../../assets/password.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import useStyles from "../Auth.styles";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";

const clientId = "461243390784-aphglbk47oqclmqljmek6328r1q6qb3p.apps.googleusercontent.com";

export const Login = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  // const handleResponse = () =>{
  //       if (user && user.token) {
  //         history.replace(from);
  //     }else{
  //       history.push('/');
  //     }
  // }


  useEffect(() => {
    if (user && user.token) history.replace(from);

    document.body.style.backgroundColor = "#143340";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history]);

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post("http://174.138.30.55/api/auth/login", {
      username,
      password,
    }).then((res) => {
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
        toast.success(res.data.message);
        // handleResponse(true);
        pathHistory.replace(from);
      }

    }).catch((error) => {
      toast.error("Username/Email or Password doesn't match", error.message);
    })

  };


  //login with google
  const handleGoogleLogin = async googleData => {
    const res = await fetch("http://174.138.30.55/api/auth/google_login", {
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
      // handleResponse(true);
      pathHistory.replace(from);
    }
  }

  //login with facebook
  const handleFacebookLogin = async facebookData => {
    const res = await fetch("http://174.138.30.55/api/auth/facebook_login", {
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
                    className={classes.googleBtn}
                    buttonText="Google"
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
