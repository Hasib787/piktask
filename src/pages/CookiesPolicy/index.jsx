import { Container, Typography } from "@material-ui/core";
import React from "react";
import Spacing from "../../components/Spacing";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./CookiesPolicy.style";

export const CookiesPolicy = () => {
  const classes = useStyles();
  return (
    <Layout title={"Cookies policy || Piktask"}>
      <Header />

      <HeroSection cookiesPolicy size="medium" isSearch />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <div className={classes.cookiesPolicyWrapper}>
          <div>
            <div className={classes.cookiesPolicyTitle}>
              <Typography variant="h2">What we own : </Typography>
            </div>
            <Spacing space={{ height: "1rem" }} />
            <div>
              <Typography className={classes.description}>
                We own all the Piktask content that we have put on Piktask. This
                includes the design,Software,Website, Theme, Template,Idea,
                Feelings, and look and feel of the Piktask sites, and copyright,
                trademarks, designs and other intellectual property on Piktask.
                We own all the Softwares, Application, logos, service marks and
                trade names on Piktask site. You will not copy, distribute,
                modify or make derivative works of any of our Piktask Content or
                use any of our intellectual property in any way not expressly
                stated in these terms.
              </Typography>
              <Spacing space={{ height: "3rem" }} />
              <div className={classes.cookiesPolicyTitle}>
                <Typography variant="h2">Web browser cookies : </Typography>
              </div>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                Our Site may use "cookies" to enhance User experience. User's
                web browser places cookies on their hard drive for
                record-keeping purposes and sometimes to track information about
                them. User may choose to set their web browser to refuse
                cookies, or to alert you when cookies are being sent. If they do
                so, note that some parts of the Site may not function properly.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
      <Spacing space={{ height: "4rem" }} />
      <Footer />
    </Layout>
  );
};
