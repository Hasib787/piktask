import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Spacing from "../../../components/Spacing";
import CallToAction from "../../../components/ui/CallToAction";
import Footer from "../../../components/ui/Footer";
import HeroSection from "../../../components/ui/Hero";
import Layout from "../../../Layout";
import useStyles from "./JoinNow.style";
import rightArrow from "../../../assets/icons/stepArrow.svg";
// import image from "../../../assets/banner/contributorBG.jpg";

const JoinNow = () => {
  const classes = useStyles();
  return (
    <Layout title={"Join Now || Piktask"}>
      <HeroSection size="large" contributorUser isSearch />
      <Spacing space={{ height: "2.5rem" }} />

      {/* WorkingSteps  */}
      {/* <div>
        <Container>
          <Grid item container spacing={25}>
            <Grid md={6} sm={6} xs={12}>
              <div className={classes.contentWrapper}>
                <div>
                  <Typography variant="h1">Your Work.</Typography>
                  <Typography variant="h1">Your Way.</Typography>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique quam repudiandae ab doloremque aliquid iste
                    necessitatibus fugit velit deserunt alias. Obcaecati dolorem
                    nesciunt eum facilis nemo ipsam suscipit maiores eos, sunt
                    rem, eaque aliquam reiciendis?
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={6} sm={6} xs={12}>
              <div className={classes.imageWrapper}>
                <img src={image} width="400px" alt="" />
                <img src={image} width="400px" alt="" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div> */}
      <Spacing space={{ height: "2.5rem" }} />
      {/* Instruction  */}
      <div className={classes.instructionArea}>
        <Container>
          <div className={classes.instructionWrapper}>
            <div className={classes.instructionContent}>
              <div className={classes.instructionBy}>
                <div>
                  <Typography variant="h2">1</Typography>
                </div>
                <div>
                  <Typography>STEP 1</Typography>
                  <Typography variant="h4">Sign up</Typography>
                  <Typography variant="h5">Join now</Typography>
                </div>
              </div>
              <div className={classes.rightArrow}>
                <img src={rightArrow} alt="rightArrow" />
              </div>
            </div>
            <div className={classes.instructionContent}>
              <div className={classes.instructionBy}>
                <div>
                  <Typography variant="h1">2</Typography>
                </div>
                <div>
                  <Typography>STEP 2</Typography>
                  <Typography variant="h4">Share your</Typography>
                  <Typography variant="h4">best artwork</Typography>
                </div>
              </div>
              <div className={classes.rightArrow}>
                <img src={rightArrow} alt="rightArrow" />
              </div>
            </div>
            <div className={classes.instructionContent}>
              <div className={classes.instructionBy}>
                <div>
                  <Typography variant="h1">3</Typography>
                </div>
                <div>
                  <Typography>STEP 3</Typography>
                  <Typography variant="h4">Earn</Typography>
                  <Typography variant="h4">money</Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Spacing space={{ height: "2.5rem" }} />
      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        contributorJoinNow
        buttonText="Join Now"
      />
      <Footer />
    </Layout>
  );
};

export default JoinNow;
