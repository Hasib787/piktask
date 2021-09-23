import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, FormControl, TextareaAutosize, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Spacing from "../../components/Spacing";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./Support.style";

const problemCategory = [
    { value: "Advertise_with_us", label: "Advertise with us" },
    { value: "Collaboration_Offer", label: "Collaboration Offer" },
    { value: "Download_Issue", label: "Download Issue" },
    { value: "I_found_an_error/bug", label: "I found an error/bug" },
    { value: "Payment_Failed", label: "Payment Failed" },
    { value: "Suggestions", label: "Suggestions" },
    { value: "Others", label: "Others" },
  ];
export const Support = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  
  return (
    <Layout title={" support || Piktask"}>
      <Header />
      <HeroSection support isSearch />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <div className={classes.supportWrapper}>
          <div>
            <div className={classes.supportTitle}>
              <Typography variant="h2">
                Software and Service Support :
              </Typography>
            </div>
            <Spacing space={{ height: "1rem" }} />
            <div>
              <Typography className={classes.description}>
                Our Team piktask 24/7 is dedicated to support our beloved
                Customers.We have a good support team to the client.if you need
                any assistance for any software or service.You can just Email us
                directly at : bdtask@gmail.com or info@bdtask.com or submit a
                ticket. Our Response time is 24 hours maximum.
              </Typography>
              <Spacing space={{ height: "3rem" }} />
              <div className={classes.termsTitle}>
                <Typography variant="h2">Submit a request </Typography>
              </div>
              <Spacing space={{ height: "1rem" }} />
              <div className={classes.supportForm}>
              <FormControl fullWidth className={classes.fieldWrapper}>
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <TextField
                    id="name"
                    InputLabelProps={{ shrink: true }}
                    className={classes.inputField}
                    placeholder="Name"
                    variant="outlined"
                    fullWidth
                    // error={titleError}
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.fieldWrapper}>
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <TextField
                    id="email"
                    InputLabelProps={{ shrink: true }}
                    className={classes.inputField}
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                  />
                </FormControl>

                <FormControl fullWidth className={classes.fieldWrapper}>
                  <label htmlFor="license">
                     What your problem is about? <span>*</span>
                  </label>
                  <TextField
                    id="license"
                    className={classes.usagesInput}
                    select
                    label=""
                    variant="outlined"
                    // value={usages}
                    // onChange={handleUsagesChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {problemCategory.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </FormControl>
                <FormControl fullWidth className={classes.fieldWrapper}>
                  <label htmlFor="description">Description</label>
                  <TextareaAutosize
                    id="description"
                    className={classes.formDescription}
                    aria-label="minimum height"
                    minRows={6}
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  className={classes.uploadBtn}
                  type="submit"
                  disabled={isLoading}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={classes.uploadIcon}
                  />
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Spacing space={{ height: "4rem" }} />
      <Footer />
    </Layout>
  );
};
