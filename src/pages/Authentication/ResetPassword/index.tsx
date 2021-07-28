import { Button, Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import heroBanner from "../../../assets/banner/banner-single-page.png";
import { CustomBtn, InputField } from "../../../components/InputField";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import HeroSection from "../../../components/ui/Hero";
import useStyles from "./ResetPassword.styles";

export const ResetPassword = (): JSX.Element => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };

  useEffect(() => {
    document.body.style.backgroundColor = "#ECEEF5";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    setPasswordChange(true);

    if (email && !passwordChange) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, {
          email,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
          }
        })
        .catch((error) => {
          setPasswordChange(false);
          toast.error("No user found with this email", error.message);
        });
    }

    if (email) {
      const validateEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!validateEmail.test(String(email).toLowerCase())) {
        toast.error("Your email is not validate");
        return;
      }
    }

    setIsLoading(false);
  };

  const handleSetPassword = () => {
    if (passwordChange && token && password && confirmPassword) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/reset-password`, {
          token,
          password,
          confirmPassword,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
            history.replace(from);
          }
        })
        .catch((error) => {
          toast.error("No user with this token found on server", error.message);
        });

      if (!token || !password || !confirmPassword) {
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
  };

  return (
    <>
      <Header />
      <HeroSection background={heroBanner} />

      <Spacing space={{ height: "2.5rem" }} />

      <Container>
        <Grid container spacing={0} justify="center">
          <Grid item sm={12} md={6}>
            <div className={classes.cardWrapper} style={{ padding: "4rem" }}>
              <div className={classes.cardHeadingWrapper}>
                <Typography className={classes.cardHeading} variant="h2">
                  Reset Password
                </Typography>

                <Spacing space={{ height: "1.5rem" }} />

                {!passwordChange && (
                  <Typography className={classes.cardSubtitle}>
                    Enter your email address below and we’ll send a special
                    reset password link to your inbox.
                  </Typography>
                )}

                {passwordChange && (
                  <Typography className={classes.cardSubtitle}>
                    Enter your Token, New Password and Confirm Password <br />{" "}
                    to reset your password.
                  </Typography>
                )}
              </div>

              <Spacing space={{ height: "3.5rem" }} />

              <form autoComplete="off" onSubmit={handleSubmit}>
                <InputField
                  label="User name/Email"
                  name="userNameOrEmail"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />

                <CustomBtn text="Reset Password" />
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
          </Grid>
        </Grid>
      </Container>

      <Spacing space={{ height: "5rem" }} />

      <Footer />
    </>
  );
};
