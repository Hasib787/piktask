import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import authorImg from "../../assets/author.png";
import heroBanner from "../../assets/banner/banner.png";
import facebook from "../../assets/icons/facebook-round.svg";
import instagram from "../../assets/icons/instagram-round.svg";
import twitter from "../../assets/icons/twitter-round.svg";
import AuthorItems from "../../components/ui/AuthorItems";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import SocialShare from "../../components/ui/SocialShare";
import Layout from "../../Layout";
import { SocialMedia } from "../../types";
import SignUpModal from "../Authentication/SignUpModal";
import useStyles from "./AuthorProfile.styles";

const socialMedias: SocialMedia[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    image: instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    image: twitter,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    image: facebook,
  },
];

const AuthorProfile = () => {
  const classes = useStyles();
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [profileInfo, setProfileInfo] = useState({});
  const [imageSummery, setImageSummery] = useState([]);
  const [openAuthModal, setOpenAuthModal] = useState(false)

  useEffect(() => {
    try {
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}/statistics`)
      .then(({ data }) => {
        if (data?.status) {
          setProfileInfo(data?.profile);
          setImageSummery(data?.images_summary);
        }
      })
    } catch (error) {
      console.log(error);
    }

  }, [id])

  const handleJoinUsButton =()=>{
    if (!user.token) {
      setOpenAuthModal(true);
    }
  }

  
  return (
    <Layout>
      <Header />
      <div
        className={classes.authorHero}
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <Container>
          <Grid container className={classes.profileWrapper}>
            <div className={classes.authorImg}>
              {profileInfo?.avatar ? (
                <img src={profileInfo?.avatar} alt="Design Studio" />
              ) : (
                <img src={authorImg} alt="Design Studio" />
              )}
            </div>
            <div className={classes.authorInfo}>
              <Typography className={classes.authorName} variant="h3">
                {profileInfo?.username}
              </Typography>
              <div className={classes.resourceDetails}>
                <Typography className={classes.infoItem} variant="body2">
                  Resources
                  <span>{profileInfo?.total_images}</span>
                </Typography>
                <Typography className={classes.infoItem} variant="body2">
                  Followers
                  <span>{profileInfo?.total_followers}</span>
                </Typography>
                <Typography className={classes.infoItem} variant="body2">
                  Downloads
                  <span>{profileInfo?.total_downloads}</span>
                </Typography>
              </div>
              <div className={classes.authorSocials}>
                <SocialShare
                  title="Share this page:"
                  socialMedias={socialMedias}
                />
              </div>
            </div>
          </Grid>
        </Container>
      </div>
      <AuthorItems id={id} imageSummery={imageSummery} />

      <CallToAction
        title="Join Designhill designer team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonText="Join Us"
        buttonClicked={()=>handleJoinUsButton()}
      />
       {/* Sign up modal section*/}
        <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <Footer />
    </Layout>
  );
};

export default AuthorProfile;
