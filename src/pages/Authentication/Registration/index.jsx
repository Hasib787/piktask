import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import facebookLogo from "../../../assets/facebookLogo.png";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import googleLogo from "../../../assets/googleLogo.png";
import lockIcon from "../../../assets/password.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import { auth } from "../../../database";
import useStyles from "../Auth.styles";

export const Registration = ({ history }): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };

  useEffect(() => {
    if (user && user.token) history.push("/");

    document.body.style.backgroundColor = "#143340";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!username || !email || !password) {
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

    if (password.length < 5) {
      toast.error("Password should be at least 6 or more characters");
      return;
    }

    await auth.sendSignInLinkToEmail(email, {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    });

    // Show success message to the user
    toast.success(
      `An email has been sent to ${email}. Please check and verify your email`
    );

    // Save username, email, and password, to localstorage
    window.localStorage.setItem("userName", username);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);

    // Remove the existing value
    // setUsername("");
    // setEmail("");
    // setPassword("");
    setIsLoading(false);
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
                  <Button className={classes.googleBtn}>
                    <img src={googleLogo} alt="Signup with Google" />
                  </Button>
                  <Button className={classes.facebookBtn}>
                    <img src={facebookLogo} alt="Signup with facebook" />
                  </Button>
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
                      disabled={isLoading}
                    >
                      Signup
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
      </div>
    </>
  );
};
