import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import formIconBottom from "../../../assets/formIconBottom.png";
import formIconTop from "../../../assets/formIconTop.png";
import { useDispatch } from "react-redux";
import lockIcon from "../../../assets/password.png";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import Spacing from "../../../components/Spacing";
import useStyles from "../Auth.styles";
import { toast } from "react-toastify";
import Layout from "../../../Layout";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const Login = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathHistory = useHistory();
  const { from } = location.state || { from: { pathname: "/" } };

  const previousLocation = location.search;
  const params = new URLSearchParams(previousLocation);
  const previousPage = params.get("url");


  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const role = "user";

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [history, from]);

  const handleShowHidePassword = () => {
    setValue((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
        role,
      })
      .then((res) => {
        if (res.data.status) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          const decodedToken = jwt_decode(token.split(" ")[1]);
          localStorage.setItem("profileImage", decodedToken.avatar);

          if (decodedToken.email) {
            dispatch({
              type: "SET_USER",
              payload: {
                ...decodedToken,
                token,
              },
            });
          }
          if (previousPage) {
            pathHistory.push(previousPage);
          } else {
            pathHistory.push(from);
          }
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <Layout title={"Login || Piktask"}>
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
                  Sign In
                </Typography>
                <Typography className={classes.formSubtitle}>
                  Sign in with your email & password
                </Typography>
              </div>

              <div>
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
                      disabled={!username || !password}
                    >
                      Sign In
                    </Button>
                    <Link
                      to="/reset-password"
                      className={classes.passwordResetLink}
                    >
                      Password Reset
                    </Link>
                    <Spacing space={{ height: "1rem" }} />
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
        <Spacing space={{ height: "5rem" }} />
      </div>
      <Footer />
    </Layout>
  );
};
