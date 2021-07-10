import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import useStyles from "../Auth.styles";
import lockIcon from "../../../assets/password.png";

export const ForgetPassword = (): JSX.Element => {
  const classes = useStyles();
  // const [value, setValue] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState(false);
  const [confValue, setConfValue] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = "#143340";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };
  const handleConfShowHidePassword = () => {
    setConfValue((value) => !value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPasswordReset(true);

    if (email && !passwordReset) {
      axios.post("https://piktask.com/api/auth/forgot-password", {
        email: email
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
            console.log("data collect", response);
          }
        })
        .catch((error) => {
          setPasswordReset(false);
          toast.error("User Already Exists", error.message)
        })
    }

    if (!email) {
      toast.error("All fields are required");
      return;
    }

    if (email) {
      const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!validateEmail.test(String(email).toLowerCase())) {
        toast.error("Your email is not validate");
        return;
      }
    }
    setIsLoading(false);
  };

  const handleResetFormSubmit = () => {
    if (passwordReset && token && password && confirmPassword) {
      axios.post("https://piktask.com/api/auth/reset-password", {
        token: token,
        password: password,
        confirmPassword: confirmPassword
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
            history.push("/login");
            console.log("data collect", response);

          }
        })
        .catch((error) => {
          toast.error(error.message)
        })
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
                <Typography className={classes.formSubtitle}>
                  Enter your username or email to reset your password.
                </Typography>
                <Typography className={classes.formSubtitle}>
                  You will receive an email with instructions on how to reset
                  your password. If you are experiencing problems resetting your
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
                  <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                    {!passwordReset && <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      className={classes.formControl}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    }
                    {passwordReset &&
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Token"
                        className={classes.formControl}
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                      />
                    }
                    {passwordReset &&
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
                    }
                    {passwordReset &&
                      <div className={classes.passwordField}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Confirm Password"
                          type={confValue ? "text" : "password"}
                          className={classes.formControl}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <img
                          src={lockIcon}
                          alt="Show or hide password"
                          onClick={handleConfShowHidePassword}
                        />
                      </div>
                    }
                    {!passwordReset &&
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.formButton}
                        disabled={isLoading || !email}
                        type="submit"
                      >
                        Reset Password
                      </Button>
                    }
                    {passwordReset &&
                      <Button onClick={() => handleResetFormSubmit()}
                        variant="contained"
                        fullWidth
                        className={classes.formButton}
                        disabled={isLoading || !token || !password || !confirmPassword}
                        type="submit"
                      >
                        Set Password
                      </Button>
                    }
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
