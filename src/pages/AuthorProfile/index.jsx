import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import authorImg from "../../assets/author.png";
import heroBanner from "../../assets/banner/banner.png";
import AuthorItems from "../../components/ui/AuthorItems";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import SocialShare from "../../components/ui/SocialShare";
import Layout from "../../Layout";
import SignUpModal from "../Authentication/SignUpModal";
import useStyles from "./AuthorProfile.styles";


const AuthorProfile = () => {
  const classes = useStyles();
  const { username } = useParams();
  const user = useSelector((state) => state.user);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [imageSummery, setImageSummery] = useState([]);
  const [profileInfo, setProfileInfo] = useState({});


  useEffect(() => {
    try {
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/${username}/statistics`)
      .then(({ data }) => {
        console.log('data',data.profile.avatar);
        
        if (data?.status) {
          setProfileInfo(data?.profile);
          setImageSummery(data?.images_summary);
          setLoading(false);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }, [username])

  const handleJoinUsButton = () =>{
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
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {profileInfo !== undefined ? (
                <Grid container className={classes.profileWrapper}>
                  <div className={classes.authorImg}>
                    {profileInfo?.avatar ? (
                      <img src={profileInfo?.avatar} alt={profileInfo?.username} />
                    ) : (
                      <img src={authorImg} alt={profileInfo?.username} />
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
                      {profileInfo.facebook || profileInfo.instagram || profileInfo.twitter ? (
                        <>
                          <SocialShare
                            title="Follow this author:"
                            profileInfo={profileInfo}
                          />
                        </>
                      ) : ( null )}
                    </div>
                  </div>
                </Grid>
                ) : (
                  <h1>No information found</h1>
                )
              }
            </>
          )
        }
        </Container>
      </div>
      <AuthorItems userId={profileInfo.id} imageSummery={imageSummery} />
      
      {!user.token ? (
        <CallToAction
          title="Join Piktask team"
          subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
          buttonText="Join Us"
          buttonClicked={()=>handleJoinUsButton()}
        />
      ) : (
        <CallToAction
          title="Go Premium"
          subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
          buttonLink="/subscription"
          buttonText="See Plans"
        />
      )}
      
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