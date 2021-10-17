import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Spacing from "../../components/Spacing";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./AboutUs.style";
import clientMeeting from "../../assets/aboutUs/meeting_with_client.jpg";
import bdtaskMembers from "../../assets/aboutUs/bdtask_members.jpg";

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Header />
      <HeroSection aboutUs isSearch />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <div className={classes.supportWrapper}>
          <div>
            <div className={classes.aboutTitle}>
              <Typography variant="h2">About Our Company</Typography>
            </div>
            <Spacing space={{ height: "1rem" }} />
            <div>
              <Grid container>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography className={classes.description}>
                    Piktask is one of the leading Software Company in
                    Bangladesh. At Piktask we work with cutting edge technology
                    to support our clients and also bring the best quality
                    product in the market. Currently, we have 7000 square feet
                    well-decorated office with a cool working environment
                    situated at B-25, Mannan Plaza, 4th Floor, Khilkhet
                    Dhaka-1229. Just as we are very serious about our product
                    quality, we also make sure every team member finds the
                    working place as a place of comfort, fun and learning den.
                    Since its inception, Piktask has played a major role in some
                    of the largest IT projects in the country. Internationally,
                    Piktask has established itself as a key player in the small
                    enterprise solution with reasonable price even affordable to
                    LDC (Least Developed Countries). Our diverse expertise
                    extends beyond deployment to provide operational,
                    maintenance, support and business outsourcing services. Our
                    technology specialists have years of experience delivering
                    successful solutions in different platform.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <div className={classes.meetingImage}>
                    <img src={clientMeeting} alt="MD meeting with client" />
                  </div>
                </Grid>
              </Grid>

              <Spacing space={{ height: "3rem" }} />

              <Grid container>
                <Grid item xs={12} sm={5} md={5}>
                  <div className={classes.historyTitle}>
                    <Typography variant="h2">
                      History {"&"} background:
                    </Typography>
                    <div className={classes.borderLine}></div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7}>
                  <Typography className={classes.historyDescription}>
                    The story behind the making of Piktask is quite interesting.
                    Three young software engineers were dreaming to become
                    entrepreneurs. And who are brothers in real life. Planning,
                    executing, developing, nurturing and managing were the 5 key
                    factors what makes this dream to come true. In 2016 their
                    fourth brother joined the company as a creative designer
                    which made the company more dynamic. Though Piktask started
                    their journey in 2013 with the three founders Sumch Mohammad
                    Tarek, Tanzil Ahmad {"&"} Tohidul Islam but it takes 3 long
                    hard years to establish as a limited company. Now in 2020,
                    Piktask has more than 45+ team members who have successfully
                    completed hundreds of projects already. Recently Piktask
                    launched an academic section where Piktask offers different
                    types of professional It and soft skill courses.
                  </Typography>
                </Grid>
              </Grid>
              <Spacing space={{ height: "3rem" }} />
              <div className={classes.bdtaskMembersImage}>
                <img src={bdtaskMembers} alt="Bdtask members " />
              </div>

              <Spacing space={{ height: "2rem" }} />

              <Grid spacing={3} container>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h2">Mission</Typography>
                  <Typography className={classes.missionVisionDescription}>
                    Making quality products with reasonable pricing and
                    establish trust in digital products among the mass people.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h2">Vision</Typography>
                  <Typography  className={classes.missionVisionDescription}>
                    The vision of Bdtask is to introduce technology to mass
                    people to help them improve their lifestyle and solve
                    problems in their daily life through digitalization.
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
      <Spacing space={{ height: "6rem" }} />
      <Footer />
    </Layout>
  );
};
