import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  Select,
  TextField,
  Typography,
  FormControlLabel,
  styled,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import Layout from "../../../Layout";
import UserSideBar from "../../components/UserSideBar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./UserProfile.style";
import shutterstock from "../../../assets/icons/shutterstock.svg";
import freepikIcon from "../../../assets/icons/freepik.svg";
import behanceIcon from "../../../assets/icons/behance.svg";
import dribbbleIcon from "../../../assets/icons/dribble.svg";
import facebook from "../../../assets/icons/facebook.svg";
import twitter from "../../../assets/icons/twitter.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import instagram from "../../../assets/icons/instagram.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToggleButton } from "@material-ui/lab";
import Switch from '@material-ui/core/Switch';

const clientId =
  "523940507800-llt47tmfjdscq2icuvu1fgh20hmknk4u.apps.googleusercontent.com";




const UserProfile = () => {
  const classes = useStyles();
  const [payment, setPayment] = useState("Paypal");
  const [country, setCountry] = useState("Bangladesh");
  const [state, setState] = useState("Chittagong");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const pathHistory = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    const [switchToggle, setSwitchToggle] = useState(false)

   const handleChange = name => event => {
    setSwitchToggle({ [name]: event.target.checked });
    };

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //login with google
  const handleGoogleLogin = async (googleData) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/google_login`,
      {
        method: "POST",
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
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
  };
  //login with facebook
  const handleFacebookLogin = async (facebookData) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/facebook_login`, {
      method: "POST",
      body: JSON.stringify({
        token: facebookData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
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
  };
  return (
    <Layout title={"UserProfile | piktask"}>
      <Header />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={4}>
          <Grid className={classes.cardItem} item md={3} sm={3} xm={12}>
            <UserSideBar />
          </Grid>
          <Grid className={classes.cardItem} item md={9} sm={9} xm={12}>
            <div className={classes.userProfileRoot}>
              <form onClick={handleSubmit} className={classes.selectPeriodFrom}>
                <div className={classes.cardRoot}>
                  <div className={classes.headingWrapper}>
                    <div>
                      <Typography
                        className={classes.settingsFormTitle}
                        variant="h4"
                      >
                        Connect
                      </Typography>
                    </div>
                    <div className={classes.socialsButtons}>
                      <GoogleLogin
                        clientId={clientId}
                        buttonText="Google"
                        className={classes.googleBtn}
                        onSuccess={handleGoogleLogin}
                        onFailure={handleGoogleLogin}
                        cookiePolicy={"single_host_origin"}
                      />
                      <Spacing space={{ margin: "0 0.5rem" }} />
                      <div className={classes.facebookBtn}>
                        <FacebookLogin
                          // className={classes.facebookBtn}
                          appId="168140328625744"
                          autoLoad={false}
                          fields="name,email,picture"
                          onClick={handleFacebookLogin}
                          callback={handleFacebookLogin}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className={classes.seperator} />
                  <Grid
                    className={classes.profileInfoField}
                    container
                    spacing={2}
                  >
                    <Grid item xs={12} md={6} sm={6}>
                      <Typography
                        className={classes.personalInfoTitle}
                        variant="h4"
                      >
                        Personal data
                      </Typography>
                      <div className={classes.personalDataField}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Real Name"
                          className={classes.formControl}
                          name="realName"
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Location"
                          className={classes.formControl}
                          name="location"
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Job Position"
                          className={classes.formControl}
                          name="jobPosition"
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Telephone Number"
                          className={classes.formControl}
                          name="username"
                          type="number"
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <Typography
                        className={classes.accountInfoTitle}
                        variant="h4"
                      >
                        Account Information
                      </Typography>
                      <div className={classes.personalDataField}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="User Name"
                          className={classes.formControl}
                          name="username"
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Email"
                          className={classes.formControl}
                          name="email"
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Password"
                          className={classes.formControl}
                          name="password"
                          type="password"
                          // value={username}
                          // onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className={classes.dataChangeBtn}>
                          <Link
                            to="/reset-password"
                            className={classes.passwordResetLink}
                          >
                            Forget Password?
                          </Link>
                          <Button
                            type="submit"
                            className={classes.profileInfoSaveBtn}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  {/* Professional Portfolio section start  */}
                  <div className={classes.portfolioHeadingWrapper}>
                    <Typography
                      className={classes.settingsFormTitle}
                      variant="h4"
                    >
                      Professional Portfolio
                    </Typography>
                    <hr className={classes.seperator} />
                  </div>
                  <div className={classes.cardWrapper}>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="shutterstock"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={shutterstock} alt="Shutterstock Icon" />
                        </label>
                        <TextField
                          id="shutterstock"
                          label="https://www.shutterstock.com/"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="https://www.shutterstock.com/"
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="freepik"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={freepikIcon} alt="Freepik Icon" />
                        </label>
                        <TextField
                          id="freepik"
                          label="Your Freepik Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Freepik Account"
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="behance"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={behanceIcon} alt="Behance Icon" />
                        </label>
                        <TextField
                          id="behance"
                          label="Your Behance Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Behance Account"
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="dribbble"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={dribbbleIcon} alt="Dribbble Icon" />
                        </label>
                        <TextField
                          id="dribbble"
                          label="Your Dribbble Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Dribbble Account"
                        />
                      </FormControl>
                    </div>
                  </div>
                  {/* Social link section start */}
                  <div className={classes.socialHeadingWrapper}>
                    <Typography
                      className={classes.settingsFormTitle}
                      variant="h4"
                    >
                      Social Link
                    </Typography>
                    <hr className={classes.seperator} />
                  </div>
                  <div className={classes.cardWrapper}>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="facebook"
                          className={classes.portfolioIconWrapper}
                        >
                          <img
                            src={facebook}
                            className={classes.facebookIcon}
                            alt="Facebook Icon"
                          />
                        </label>
                        <TextField
                          id="facebook"
                          label="Your Facebook Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Facebook Account"
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="twitter"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={twitter} alt="Twitter Icon" />
                        </label>
                        <TextField
                          id="twitter"
                          label="Your Twitter Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Twitter Account"
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="linkedin"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={linkedin} alt="Linkedin Icon" />
                        </label>
                        <TextField
                          id="linkedin"
                          label="Your Linkedin Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Linkedin Account"
                        />
                      </FormControl>
                    </div>
                    <div
                      className={`${classes.fieldsGroup} ${classes.linkField}`}
                    >
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.portfolioLink}
                      >
                        <label
                          htmlFor="instagram"
                          className={classes.portfolioIconWrapper}
                        >
                          <img src={instagram} alt="Instagram Icon" />
                        </label>
                        <TextField
                          id="instagram"
                          label="Your Instagram Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Instagram Account"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.buttonGroup}>
                    <Button
                      className={`${classes.settingsBtn} ${classes.restoreBtn}`}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className={`${classes.settingsBtn} ${classes.saveBtn}`}
                    >
                      Save Changes
                    </Button>
                  </div>
                  <Typography className={classes.notification} variant="h4">
                    Notifications
                  </Typography>
                  <div className={classes.getNews}>
                    <Typography className={classes.getNewsTitle}>
                      I wish to receive newsletters,promotions and news from
                      Piktask Company
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={switchToggle}
                          onChange={handleChange}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Primary"
                    />
                  </div>
                  <div className={classes.basicInfo}>
                    <Typography>
                      Basic information on Data Protection: Piktask Company
                      stores your data to improve the service and, with your
                      consent, offers news, promotions and raffles, as well as
                      projects and releases from Piktask Company.
                      <Link to="#" className={classes.moreInfo}>
                        More information
                      </Link>
                    </Typography>
                  </div>
                </div>
                {/* Card Wrapper ends */}
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{ height: "5rem" }} />
      <Footer />
    </Layout>
  );
};

export default UserProfile;
