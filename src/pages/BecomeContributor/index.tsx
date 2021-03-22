import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import crownIcon from "../../assets/icons/crown.svg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import logo from "../../assets/logo.svg";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import useStyles from "./Contributor.styles";

const BecomeContributor = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contributorHero}>
        <Container className={classes.heroContainer}>
          <Grid container className={classes.gridContainer}>
            <Link to="/">
              <img src={logo} alt="Piktask" />
            </Link>

            <Button
              component={Link}
              variant="outlined"
              to="/registration"
              className={classes.joinNowBtn}
            >
              Login or Join Now
            </Button>
          </Grid>

          <div className={classes.heroContent}>
            <Typography variant="h2" className={classes.heroHeading}>
              <span>Become a Contributor</span>
              Share your creations and earn money doing what you love
            </Typography>
            <Button className={classes.heroJoinNowBtn}>
              <img src={crownIcon} alt="Join Now" />
              Join Now
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <Grid container spacing={3} className={classes.contributorSection}>
          <Grid item xs={12} sm={6}>
            <div className={classes.contributorText}>
              <Typography variant="h2">
                Your work.
                <br />
                Your way.
              </Typography>
              <Typography variant="body1">
                Speak with your own voice! On our marketplaces you can maintain
                your identity, build your brand and promote your work to the
                community - however you like.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.galleryWrapper}>
              <img className={classes.image1} src={image1} alt="Gallery" />
              <img className={classes.image2} src={image2} alt="Gallery" />
              <img className={classes.image3} src={image3} alt="Gallery" />
              <img className={classes.image4} src={image4} alt="Gallery" />
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.processStepWrapper}>
        <Container>
          <Grid container spacing={3} className={classes.processGridContainer}>
            <Grid item xs={6} sm={4} md={3} className={classes.processItem}>
              <div className={classes.processStepNumber}>1</div>
              <div className={classes.processTexts}>
                <span
                  style={{ textTransform: "uppercase", fontSize: "1.6rem" }}
                >
                  Step 1
                </span>
                <span>Sign up</span>
                <Button
                  disableRipple
                  className={classes.joinNowLink}
                  component={Link}
                  to="/registration"
                >
                  Join now
                </Button>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} className={classes.processItem}>
              <div className={classes.processStepNumber}>2</div>
              <div className={classes.processTexts}>
                <span
                  style={{ textTransform: "uppercase", fontSize: "1.6rem" }}
                >
                  Step 2
                </span>
                <span>
                  Share your <br /> best artwork
                </span>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} className={classes.processItem}>
              <div className={classes.processStepNumber}>3</div>
              <div className={classes.processTexts}>
                <span
                  style={{ textTransform: "uppercase", fontSize: "1.6rem" }}
                >
                  Step 3
                </span>
                <span>
                  Earn <br /> money
                </span>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container>
        <Grid container spacing={3} className={classes.contributorSection}>
          <Grid item xs={12} sm={6}>
            <div className={classes.contributorText}>
              <Typography variant="h2">
                Focus on
                <br />
                quality
              </Typography>
              <Typography variant="body1">
                Speak with your own voice! On our marketplaces you can maintain
                your identity, build your brand and promote your work to the
                community - however you like.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.galleryWrapper2}>
              <img className={classes.image5} src={image5} alt="Gallery" />
              <img className={classes.image6} src={image6} alt="Gallery" />
              <img className={classes.image7} src={image7} alt="Gallery" />
              <img className={classes.image8} src={image8} alt="Gallery" />
            </div>
          </Grid>
        </Grid>
      </Container>

      <CallToAction
        title="Daily 10 image/photos Download"
        subtitle="Top website templates with the highest sales volume."
        buttonText="Get Started"
        buttonLink="/registration"
      />
      <Footer />
    </>
  );
};

export default BecomeContributor;
