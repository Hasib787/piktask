import {
  Button,
  Card,
  FormControl,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import behanceIcon from "../../../assets/icons/behance.svg";
import cardsIcon from "../../../assets/icons/cards.svg";
import cvcIcon from "../../../assets/icons/cvcicon.svg";
import dribbbleIcon from "../../../assets/icons/dribble.svg";
import facebook from "../../../assets/icons/facebook.svg";
import freepikIcon from "../../../assets/icons/freepik.svg";
import instagram from "../../../assets/icons/instagram.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import shutterstock from "../../../assets/icons/shutterstock.svg";
import twitter from "../../../assets/icons/twitter.svg";
import Footer from "../../../components/ui/Footer";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import useStyles from "./AccountSettings.styles";

const AccountSettings = () => {
  const classes = useStyles();
  const [payment, setPayment] = useState("Paypal");
  const [country, setCountry] = useState("Bangladesh");
  const [state, setState] = useState("Chittagong");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>

      <div className={classes.adminRoot}>
        <Sidebar />

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.profileContentWrapper}>
          <div className={classes.settingsHero}>
            <Typography variant="h1">Your Account Dashboard</Typography>
          </div>
          {/* Ends Hero */}

          <div className={classes.settingsFormWrapper}>
            <form onClick={handleSubmit} className={classes.selectPeriodFrom}>
              <Card className={classes.cardRoot}>
                <div className={classes.headingWrapper}>
                  <Typography
                    className={classes.settingsFormTitle}
                    variant="h4"
                  >
                    Personal Information
                  </Typography>
                  <hr className={classes.seperator} />
                </div>

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
                        id="email"
                        label="Email"
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
                        id="userid"
                        label="User ID"
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
                        id="phonenumber"
                        label="Phone Number"
                        variant="outlined"
                        className={`${classes.inputField}`}
                      />
                    </FormControl>
                  </div>

                  <div className={classes.fieldsGroup}>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                    >
                      <Select
                        native
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        label="Country"
                        IconComponent={ExpandMoreIcon}
                        className={classes.selectArea}
                      >
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Nepal">Nepal</option>
                        <option value="China">China</option>
                        <option value="India">India</option>
                        <option value="America">America</option>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                    >
                      <Select
                        native
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        label="Your State/City"
                        IconComponent={ExpandMoreIcon}
                        className={classes.selectArea}
                      >
                        <option value="Bangladesh">Dhaka</option>
                        <option value="Nepal">Chittagong</option>
                        <option value="China">Khulna</option>
                        <option value="India">Rajshahi</option>
                        <option value="America">Barishal</option>
                      </Select>
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

                  <div className={classes.fieldsGroup}>
                    <FormControl
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                    >
                      <TextField
                        id="address"
                        label="Current Address"
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
                        id="billingaddress"
                        label="Billling Address"
                        variant="outlined"
                        className={`${classes.inputField}`}
                      />
                    </FormControl>
                  </div>
                </div>
                {/* Card Wrapper ends */}
              </Card>

              <Card className={classes.cardRoot}>
                <div className={classes.headingWrapper}>
                  <Typography
                    className={classes.settingsFormTitle}
                    variant="h4"
                  >
                    Add Payment Method
                  </Typography>
                  <hr className={classes.seperator} />
                </div>

                <div className={classes.cardWrapper}>
                  <div className={classes.fieldsGroup}>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                    >
                      <Select
                        native
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        label="Name on Card"
                        IconComponent={ExpandMoreIcon}
                        className={classes.selectArea}
                      >
                        <option value="Paypal">Paypal</option>
                        <option value="Master Card">Master Card</option>
                        <option value="Credit Card">Credit Card</option>
                      </Select>
                    </FormControl>

                    <FormControl
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                      className={`${classes.inputImage} ${classes.lastField}`}
                    >
                      <TextField
                        id="username"
                        label="Credit Card Number"
                        variant="outlined"
                        className={`${classes.inputField}`}
                        placeholder="Credit Card Number"
                      />
                      <img
                        className={classes.cardIcon}
                        src={cardsIcon}
                        alt="Accepted Cards"
                      />
                    </FormControl>
                  </div>
                  <div className={classes.fieldsGroup}>
                    <FormControl
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                    >
                      <TextField
                        id="name"
                        label="Expiration Date"
                        variant="outlined"
                        className={`${classes.inputField}`}
                        placeholder="Expiration Date"
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      classes={{ fullWidth: classes.fullWidth }}
                      className={classes.inputImage}
                    >
                      <TextField
                        type="number"
                        id="username"
                        label="CVC"
                        variant="outlined"
                        className={`${classes.inputField}`}
                        placeholder="CVC"
                      />
                      <img
                        className={classes.cvcIcon}
                        src={cvcIcon}
                        alt="CVC"
                      />
                    </FormControl>
                  </div>
                </div>
              </Card>
              {/* Add payment method ends */}

              <Card className={classes.cardRoot}>
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
              </Card>
              {/* Ends Professional Portfolio */}

              <Card className={classes.cardRoot}>
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
                        <img src={facebook} alt="Facebook Icon" />
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
              </Card>
              {/* Ends Professional Portfolio */}

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
            </form>
          </div>
          </div>
          {/* Ends form wrapper */}
          <Footer addminFooter />
        </main>
      </div>

    </Layout>
  );
};

export default AccountSettings;
