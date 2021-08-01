import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomBtn, InputField } from "../../../components/InputField";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import useStyles from "../ResetPassword/ResetPassword.styles";

export const ConfirmSignup = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [isRedirectTo, setRedirectTo] = useState(false);
  const [token, setToken] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };

  useEffect(() => {
    document.body.style.backgroundColor = "#ECEEF5";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  //For Set Password
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!token) {
      setLoading(false);
      setToken("");
      toast.error("Field should not be empty. ");
      return;
    } else if (!token.match(/^(?=.*[0-9])/)){
      setLoading(false);
      setToken("");
      toast.error("Token only contains numeric value");
      return;
    }else if (token.length < 8 || token.length > 8) {
      setLoading(false);
      setToken("");
      toast.error("Token should be 8 digit number");
      return;
    }

    if (token) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/verify/account`, {
          token,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
            setLoading(false);
            setToken("");
            setRedirectTo(true);
            return;
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);;
          setToken("");
          setLoading(false); 
        });
    }
  };

  return (
    <>
      {/* if confirm redirect to login */}
      {isRedirectTo && <Redirect to="/login" />}

      <Header />

      <Spacing space={{ height: "2.5rem" }} />

      <Container>
        <Grid container spacing={0} justify="center">
          <Grid item sm={12} md={6}>
            <div className={classes.cardWrapper} style={{ padding: "4rem" }}>
              <div className={classes.cardHeadingWrapper}>
                <Typography className={classes.cardHeading} variant="h2">
                  Confirm Signup
                </Typography>

                <Spacing space={{ height: "1.5rem" }} />

                <Typography className={classes.cardSubtitle}>
                  We've sent you an email with some digits. Please check your
                  email and enter below to confirm your signup.
                </Typography>
              </div>

              <Spacing space={{ height: "3.5rem" }} />

              <form autoComplete="off" onSubmit={handleSubmit}>
                <InputField
                  label="Enter Token"
                  name="token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />

                <CustomBtn text="Confirm Signup" disabledBtn={isLoading} />
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Spacing space={{ height: "5rem" }} />

      <Footer />
    </>
  );
};
