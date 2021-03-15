import { Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import brandLogo from "../../../assets/piktaskLogo.png";
import useStyles from "../Auth.styles";

export const ForgetPassword = (): JSX.Element => {
  const classes = useStyles();
  // const [value, setValue] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#143340";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

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
                  <form autoComplete="off" className={classes.form}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="User name / Email"
                      className={classes.formControl}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.formButton}
                    >
                      Reset Password
                    </Button>
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
