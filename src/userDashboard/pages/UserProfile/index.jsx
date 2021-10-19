import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
} from "@material-ui/core";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import UserSideBar from "../../components/UserSideBar";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import Spacing from "../../../components/Spacing";
import Layout from "../../../Layout";
import useStyles from "./UserProfile.style";
import shutterstockLogo from "../../../assets/icons/shutterstock.svg";
import instagramLogo from "../../../assets/icons/instagram.svg";
import facebookLogo from "../../../assets/icons/facebook.svg";
import linkedinLogo from "../../../assets/icons/linkedin.svg";
import dribbbleIcon from "../../../assets/icons/dribble.svg";
import freepikIcon from "../../../assets/icons/freepik.svg";
import behanceIcon from "../../../assets/icons/behance.svg";
import twitterLogo from "../../../assets/icons/twitter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import Switch from "@material-ui/core/Switch";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Switch from '@mui/material/Switch';

const clientId =
  "523940507800-llt47tmfjdscq2icuvu1fgh20hmknk4u.apps.googleusercontent.com";

const   UserProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pathHistory = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const { from } = location.state || { from: { pathname: "/" } };
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [job_position, setJob_position] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [shutterstock, setShutterstock] = useState("");
  const [freepik, setFreepik] = useState("");
  const [behance, setBehance] = useState("");
  const [dribble, setDribble] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  //mobile view
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 577
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  // get user information
  useEffect(() => {
    setLoading(true);

    if(user?.token){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/profile`, {
        headers: { Authorization: user.token },
      })
      .then(({ data }) => {
        if (data?.status) {
          setName(data.user.name);
          setUsername(data.user.username);
          setEmail (data.user.email);
          setLocationAddress(data.user.location);
          setJob_position(data.user.job_position);
          setPhone(data.user.phone);
          setWebsite(data.user.website);
          setShutterstock(data.user.shutterstock);
          setFreepik(data.user.freepik);
          setBehance(data.user.behance);
          setDribble(data.user.dribble);
          setFacebook(data.user.facebook);
          setTwitter(data.user.twitter);
          setLinkedin(data.user.linkedin);
          setInstagram(data.user.instagram);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
  }, [user.token]);

  //Update user profile
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", locationAddress);
    formData.append("job_position", job_position);
    formData.append("phone", phone);
    formData.append("website", website);
    formData.append("shutterstock", shutterstock);
    formData.append("freepik", freepik);
    formData.append("behance", behance);
    formData.append("dribble", dribble);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);

    const url = `${process.env.REACT_APP_API_URL}/user/profile`;
    axios({
      method: "put",
      url,
      headers: {
        Authorization: user.token,
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((res) => {
        if (res?.status === 200) {
          toast.success(res.data.message);
          setErrors({});
        }
      })
      .catch((error) => {
        const { errors } = error.response.data;
        setErrors(errors);
      });
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
        headers: {"Content-Type": "application/json",},
      }
    );
    const data = await res.json();
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
    <Layout title={"UserProfile || Piktask"}>
      <Header />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} sm={3} xs={12} className={classes.cardItem}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.cardItem}>
            <div className={classes.userProfileRoot}>
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
                    render={(renderProps) => (
                      <Button
                        className={classes.googleButton}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <FontAwesomeIcon
                          className={classes.googleIcon}
                          icon={faGoogle}
                        />
                        <span>{!mobileView && "Connect"} Google</span>
                      </Button>
                    )}
                    buttonText="Login"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy={"single_host_origin"}
                  />
                  <Spacing space={{ margin: "0 0.5rem" }} />

                  <FacebookLogin
                    appId="168140328625744"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={handleFacebookLogin}
                    callback={handleFacebookLogin}
                    render={(renderProps) => (
                      <Button
                        className={classes.facebookBtn}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <FontAwesomeIcon
                          className={classes.facebookIconBtn}
                          icon={faFacebookF}
                        />
                        <span>{!mobileView && "Connect"} Facebook</span>
                      </Button>
                    )}
                  />
                </div>
              </div>
              <hr className={classes.separator} />
              <form
                onSubmit={handleSubmit}
                className={classes.selectPeriodFrom}
              >
                <div className={classes.cardRoot}>
                  <Grid
                    className={classes.profileInfoField}
                    container
                    spacing={0}
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
                          name="name"
                          value={name}
                          defaultValue={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Location"
                          className={classes.formControl}
                          name="locationAddress"
                          value={locationAddress}
                          onChange={(e) => setLocationAddress(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Job Position"
                          className={classes.formControl}
                          name="jobPosition"
                          value={job_position}
                          onChange={(e) => setJob_position(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Telephone Number"
                          className={classes.formControl}
                          name="telephoneNumber"
                          type="number"
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
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
                          value={username}
                        />
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Email"
                          className={classes.formControl}
                          name="email"
                          value={email}
                        />
                        <TextField
                          error={!!errors.website}
                          helperText={errors.website}
                          fullWidth
                          variant="outlined"
                          label="Website"
                          className={classes.formControl}
                          name="website"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
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
                    <hr className={classes.separator} />
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
                          <img src={shutterstockLogo} alt="Shutterstock Icon" />
                        </label>
                        <TextField
                          id="shutterstock"
                          error={!!errors.shutterstock}
                          helperText={errors.shutterstock}
                          label="Your Shutterstock Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Shutterstock Account"
                          value={shutterstock}
                          onChange={(e) => setShutterstock(e.target.value)}
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
                          error={!!errors.freepik}
                          helperText={errors.freepik}
                          label="Your Freepik Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Freepik Account"
                          value={freepik}
                          onChange={(e) => setFreepik(e.target.value)}
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
                          error={!!errors.behance}
                          helperText={errors.behance}
                          label="Your Behance Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Behance Account"
                          value={behance}
                          onChange={(e) => setBehance(e.target.value)}
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
                          error={!!errors.dribble}
                          helperText={errors.dribble}
                          label="Your Dribbble Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Dribbble Account"
                          value={dribble}
                          onChange={(e) => setDribble(e.target.value)}
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
                    <hr className={classes.separator} />
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
                            src={facebookLogo}
                            className={classes.facebookIcon}
                            alt="Facebook Icon"
                          />
                        </label>
                        <TextField
                          id="facebook"
                          error={!!errors.facebook}
                          helperText={errors.facebook}
                          label="Your Facebook Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Facebook Account"
                          value={facebook}
                          onChange={(e) => setFacebook(e.target.value)}
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
                          <img src={twitterLogo} alt="Twitter Icon" />
                        </label>
                        <TextField
                          id="twitter"
                          error={!!errors.twitter}
                          helperText={errors.twitter}
                          label="Your Twitter Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Twitter Account"
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
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
                          <img src={linkedinLogo} alt="Linkedin Icon" />
                        </label>
                        <TextField
                          id="linkedin"
                          error={!!errors.linkedin}
                          helperText={errors.linkedin}
                          label="Your Linkedin Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Linkedin Account"
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
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
                          <img src={instagramLogo} alt="Instagram Icon" />
                        </label>
                        <TextField
                          id="instagram"
                          error={!!errors.instagram}
                          helperText={errors.instagram}
                          label="Your Instagram Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Instagram Account"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
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
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
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
