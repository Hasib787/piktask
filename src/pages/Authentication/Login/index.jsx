import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import facebookLogo from "../../../assets/facebookLogo.png";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import googleLogo from "../../../assets/googleLogo.png";
import lockIcon from "../../../assets/password.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import { auth, googleAuthProvider } from "../../../database";
import useStyles from "../Auth.styles";

export const Login = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.token) history.push("/admin/dashboard");

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

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = user?.getIdTokenResult();

      if ((await idTokenResult)?.token) {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user?.email,
            token: (await idTokenResult)?.token,
          },
        });
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user?.getIdTokenResult();

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user?.email,
            token: idTokenResult?.token,
          },
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
                  Sign in
                </Typography>
                <Typography className={classes.formSubtitle}>
                  with your social network
                </Typography>
              </div>

              <div>
                <div className={classes.socialsButtons}>
                  <Button
                    className={classes.googleBtn}
                    onClick={signInWithGoogle}
                  >
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
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className={classes.form}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="User name / Email"
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
