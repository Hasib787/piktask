import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import useStyles from "../Auth.styles";
import { useHistory, useLocation } from "react-router-dom";


export const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/login' } };

  const classes = useStyles();
  // const [value, setValue] = useState(false);

  useEffect(() => {

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setPasswordChange(true);

    if (email && !passwordChange) {
      axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, {
        email,
      }).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message)
        }

      }).catch((error) => {
        setPasswordChange(false);
        toast.error("No user found with this email", error.message);
      })
    }

    if (email) {
      const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!validateEmail.test(String(email).toLowerCase())) {
        toast.error("Your email is not validate");
        return;
      }
    }

   
    setIsLoading(false);
  }

  const handleSetPassword = () => {
    if (passwordChange && token && password && confirmPassword) {
      axios.post(`${process.env.REACT_APP_API_URL}/auth/reset-password`, {
        token,
        password,
        confirmPassword,
      }).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message)
          history.replace(from);
        }

      }).catch((error) => {
        toast.error("No user with this token found on server", error.message);
      })

      if ( !token || !password || !confirmPassword) {
        toast.error("All fields are required");
        return;
      }

      if (password.length < 5) {
        toast.error("Password should be at least 6 or more characters");
        return;
      }
  
      if (password !== confirmPassword) {
        toast.error("Password not match");
      }
    }
  }

  return (
    <>
      <div className={classes.rootContainer}>
        <div className={classes.logoArea}>
          <Link to="/">
            <img src={brandLogo} alt="Piktask" />
          </Link>
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
                  Reset Password
                </Typography>
                {!passwordChange && <Typography className={classes.formSubtitle}>
                  Enter your username or email to reset your password.
                </Typography>}
                {passwordChange && <Typography className={classes.formSubtitle}>
                  Enter your Token, New Password and Confirm Password <br /> to reset your password.
                </Typography>}
                <Typography className={classes.formSubtitle}>
                  If you are experiencing problems resetting your
                  password{" "}
                  <Button
                    disableRipple
                    component={Link}
                    to="/contactus"
                    className={classes.buttonTextLink}
                  >
                    contact us
                  </Button>{" "}
                  or{" "}
                  <Button
                    disableRipple
                    component={Link}
                    to="/email"
                    className={classes.buttonTextLink}
                  >
                    send us an email
                  </Button>
                </Typography>
              </div>

              <div>
                <Typography variant="subtitle1" className={classes.formDevider}>
                  Or
                </Typography>

                <div>
                  <form
                    autoComplete="off"
                    className={classes.form}
                    onSubmit={handleSubmit}
                  >
                    {!passwordChange && <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      className={classes.formControl}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />}
                    {passwordChange && <TextField
                      fullWidth
                      variant="outlined"
                      label="Enter Your Token"
                      className={classes.formControl}
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />}
                    {passwordChange && <TextField
                      fullWidth
                      variant="outlined"
                      label="New Password"
                      className={classes.formControl}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />}
                    {passwordChange && <TextField
                      fullWidth
                      variant="outlined"
                      label="Confirm Password"
                      className={classes.formControl}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />}
                    {!passwordChange && <Button
                      variant="contained"
                      fullWidth
                      className={classes.formButton}
                      type="submit"
                      disabled={isLoading || !email}
                    >
                      Reset Password
                    </Button>}
                    {passwordChange && <Button
                      variant="contained"
                      fullWidth
                      className={classes.formButton}
                      type="submit"
                      onClick={() => handleSetPassword()}
                      disabled={isLoading || !token || !password || !confirmPassword}
                    >
                      Set Password
                    </Button>}
                  </form>
                  <div className={classes.formButtonGroups}>
                    <Button
                      component={Link}
                      to="/login"
                      className={classes.formLink}
                      disableRipple
                    >
                      Login
                    </Button>
                    <Button
                      component={Link}
                      to="/registration"
                      className={classes.formLink}
                      disableRipple
                    >
                      Not a member? Sign up
                    </Button>
                  </div>
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
