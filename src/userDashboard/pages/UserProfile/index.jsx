import { 
  Button, 
  Card, 
  Container, 
  FormControl, 
  Grid, 
  Select, 
  TextField, 
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

const UserProfile = () => {
  const classes = useStyles();
  const [payment, setPayment] = useState("Paypal");
  const [country, setCountry] = useState("Bangladesh");
  const [state, setState] = useState("Chittagong");

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
  return (
    <Layout title={"UserProfile | piktask"}>
      <Header />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={4}>
          <Grid item md={3} sm={3} xm={12}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xm={12}>
            <div>
              <form onClick={handleSubmit} className={classes.selectPeriodFrom}>
                <Card className={classes.cardRoot}>
                  <div className={classes.headingWrapper}>
                    <Typography
                      className={classes.settingsFormTitle}
                      variant="h4"
                    >
                      Connect
                    </Typography>
                    <hr className={classes.seperator} />
                  </div>
                  <Typography
                      className={classes.personalInfoTitle}
                      variant="h4"
                    >
                      Personal data
                    </Typography>
                  <div className={classes.cardWrapper}>
                    <div className={classes.fieldsGroup}>
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                      >
                        <TextField
                          id="name"
                          label="Name"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.lastField}
                      >
                        <TextField
                          id="username"
                          label="User Name"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                    </div>

                    <div className={classes.fieldsGroup}>
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                      >
                        <TextField
                          id="location"
                          label="Location"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.lastField}
                      >
                        <TextField
                          id="email"
                          label="Email"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                    </div>

                    <div className={classes.fieldsGroup}>
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                      >
                        <TextField
                          id="jobPosition"
                          label="Job Position"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.lastField}
                      >
                        <TextField
                          type="password"
                          id="password"
                          label="Password"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                    </div>

                    <div className={classes.fieldsGroup}>
                    <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                      >
                        <TextField
                          id="teleNumber"
                          label="Telephone Number"
                          variant="outlined"
                          type="number"
                          className={`${classes.inputField}`}
                          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                        />
                      </FormControl>

                      <FormControl
                        fullWidth
                        classes={{ fullWidth: classes.fullWidth }}
                        className={classes.lastField}
                      >
                        <TextField
                          id="postalcode"
                          label="Zip/Postal Code"
                          variant="outlined"
                          className={`${classes.inputField}`}
                        />
                      </FormControl>
                    </div>
                  </div>

                  {/* Professional Portfolio section start  */}
                  <div className={classes.headingWrapper}>
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
                          label="Your Shutterstock Account"
                          variant="outlined"
                          className={`${classes.inputField}`}
                          placeholder="Your Shutterstock Account"
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
                  <div className={classes.headingWrapper}>
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
                    Restore All Attributes
                  </Button>
                  <Button
                    type="submit"
                    className={`${classes.settingsBtn} ${classes.saveBtn}`}
                  >
                    Save All Changes
                  </Button>
                </div>
                </Card>
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
